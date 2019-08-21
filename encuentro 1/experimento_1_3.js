// Experimento 1 procedimiento

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


// Crear variable timeline
var timeline = [];

// Crear pantalla de bienvenida

var bienvenida = {
    type: 'html-keyboard-response',
    stimulus: 'Bienvenido al experimento. Presione cualquier tecla para continuar.'
};


var instrucciones = {
    type: 'html-keyboard-response',
    stimulus: '<p>Estas son las instrucciones:</p> <p>lea y decida si es palabra o no.</p><p>Presione <b>F</b> si no es palabra y <b>J</b> si es una palabra</p>'
};

timeline.push(bienvenida, instrucciones);
 // Creamos estímulos

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
    on_finish: function(){
    jsPsych.data.displayData();
    }
});
