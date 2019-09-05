// Experimento 2 procedimiento

//Funcion tagear respuesta
var isCorrect = function(trial_data){
  rv = 'False'; //Definimos el resultado inicial como falso

  // Cambiamos el resultado en los dos casos donde es verdadero
  if (trial_data.is_word == 'True' && trial_data.key_press == 74){
    rv = 'True';
  } else if (trial_data.is_word == 'False' && trial_data.key_press == 70){
    rv = 'True';
  }
  //La función 'devuelve' el valor de rv según el caso
  return rv;
};

//Generamos id de sujeto
var subject_id = jsPsych.randomization.randomID(8);
//Agregamos a todos los trial el id
jsPsych.data.addProperties({sujeto: subject_id});


// Crear variable timeline
var timeline = [];

// Crear pantalla de bienvenida

var bienvenida = {
    type: 'html-keyboard-response',
    stimulus: 'Bienvenido al experimento. Presione cualquier tecla para continuar.'
};

timeline.push(bienvenida);

//Crear pantallas de datos demográficos
//Vamos a usar el plugin survey-multi-choice, hay que agregarlo al html

//Primero definimos las preguntas y las respuestas

// Preguntas
var page_1_questions = ["Edad", "Sexo"];
var page_2_questions = ["Estudios"];

// Escalas para respuesta
var page_1_options_1 = ["18 a 24 años", "25 a 39 años", "40 a 59 años ", "Más de 60 años"];
var page_1_options_2 = ["Masculino", "Femenino"];
var page_2_options = ["Primario en curso/completo", "Secundario en curso/completo", "Terciario en curso/completo", "Universitario en curso/completo", "Posgrado en curso/completo"];

//Creamos una pantalla con dos preguntas: edad y sexo
var demograficos_1 = {
    type: 'survey-multi-choice',
    questions: [{prompt: page_1_questions[0], options: page_1_options_1, required:true,}, {prompt: page_1_questions[1], options: page_1_options_2, required: true}],
    button_label: "Siguiente",
    //Agregamos a todos los trials las respuestas
    on_finish: function (trial_data){
      var respuestas = JSON.parse(trial_data.responses);
      jsPsych.data.addProperties({
             edad: respuestas.Q0,
             sexo: respuestas.Q1});
      }
    };

//Creamos otra pantalla con una sola pregunta: educación
var demograficos_2 = {
    type: 'survey-multi-choice',
    questions: [{prompt: page_2_questions, options: page_2_options, required:true,}],
    button_label: "Siguiente"
  };

//Pusheamos los demográficos a la timeline
timeline.push(demograficos_1, demograficos_2);

//Instrucciones
var instrucciones = {
    type: 'html-keyboard-response',
    stimulus: '<p>Estas son las instrucciones:</p> <p>lea y decida si es palabra o no.</p><p>Presione <b>F</b> si no es palabra y <b>J</b> si es una palabra</p>'
};
timeline.push(instrucciones);

 // Creamos pantallas de estímulos

 var palabra1 = {
     type: 'html-keyboard-response',
     stimulus: 'GATO',
     trial_duration: 3000,
     choices: ['f', 'j'],
     data: {is_word: 'True'},
     on_finish: function(trial_data){
       //Agregamos un campo en data que se llama correct y el valor es el resultado de la función
       trial_data.correct = isCorrect(trial_data);
     }
 };

var palabra2 = {
    type: 'html-keyboard-response',
    stimulus: 'PERRO',
    trial_duration: 3000,
    choices: ['f', 'j'],
    data: {is_word: 'True'},
    on_finish: function(trial_data){
      trial_data.correct = isCorrect(trial_data);
    }

};

var palabra3 = {
    type: 'html-keyboard-response',
    stimulus: 'GOGO',
    trial_duration: 3000,
    choices: ['f', 'j'],
    data: {is_word: 'False'},
    on_finish: function(trial_data){
      trial_data.correct = isCorrect(trial_data);
    }

};

var palabra4 = {
    type: 'html-keyboard-response',
    stimulus: 'PENRO',
    trial_duration: 3000,
    choices: ['f', 'j'],
    data: {is_word: 'False'},
    on_finish: function(trial_data){
      trial_data.correct = isCorrect(trial_data);
    }
};

var fijacion = {
  type: 'html-keyboard-response',
  stimulus: '+',
  trial_duration: 500,
  choices: jsPsych.NO_KEYS
};

var blanca = {
  type: 'html-keyboard-response',
  stimulus: '',
  trial_duration: 500,
  choices: jsPsych.NO_KEYS
};


timeline.push(blanca, fijacion, palabra1, blanca, fijacion, palabra3, blanca, fijacion, palabra2, blanca, fijacion, palabra4);

jsPsych.init({
    timeline: timeline,
    show_progress_bar: true,
    message_progress_bar: 'Barra progreso',
    on_finish: function(){
    jsPsych.data.displayData();
    }
});
