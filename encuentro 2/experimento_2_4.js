// Experimento 2 procedimiento

//Funcion tagear respuesta
var isCorrect = function(trial_data){
  rv = 'FALSE'; //Definimos el resultado inicial como falso

  // Cambiamos el resultado en los dos casos donde es verdadero
  if (trial_data.isWord == 'TRUE' && trial_data.key_press == 74){
    rv = 'TRUE';
  } else if (trial_data.isWord == 'FALSE' && trial_data.key_press == 70){
    rv = 'TRUE';
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
    button_label: "Siguiente",
    on_finish: function (trial_data){
      var respuestas = JSON.parse(trial_data.responses);
      jsPsych.data.addProperties({
             educacion: respuestas.Q0});
      }
  };

//Pusheamos los demográficos a la timeline
timeline.push(demograficos_1, demograficos_2);

//Instrucciones
var instrucciones = {
    type: 'html-keyboard-response',
    stimulus: '<p>Estas son las instrucciones:</p> <p>lea y decida si es palabra o no.</p><p>Presione <b>F</b> si no es palabra y <b>J</b> si es una palabra</p><p>Presione cualquier tecla para continuar</p>'
};
timeline.push(instrucciones);

//Creamos pantalla blanca y fijación

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

//Lista de estímulos
var estimulos = [
  {id: '1' , pr: 'zapato', bl: 'CANARIO', isRel: 'FALSE', isWord: 'TRUE'},
  {id: '2' , pr: 'velero', bl: 'DURAZNO', isRel: 'FALSE', isWord: 'TRUE'},
  {id: '3' , pr: 'sobrino', bl: 'PELOTA', isRel: 'FALSE', isWord: 'TRUE'},
  {id: '4' , pr: 'tobillo', bl: 'LAPICERA', isRel: 'FALSE', isWord: 'TRUE'},
  {id: '5' , pr: 'cacerola', bl: 'PANTALÓN', isRel: 'FALSE', isWord: 'TRUE'},
  {id: '6' , pr: 'estante', bl: 'ARMARIO', isRel: 'TRUE', isWord: 'TRUE'},
  {id: '7' , pr: 'bosque', bl: 'DESIERTO', isRel: 'TRUE', isWord: 'TRUE'},
  {id: '8' , pr: 'camello', bl: 'CABALLO', isRel: 'TRUE', isWord: 'TRUE'},
  {id: '9' , pr: 'corazón', bl: 'CEREBRO', isRel: 'TRUE', isWord: 'TRUE'},
  {id: '10' , pr: 'tortilla', bl: 'MILANESA', isRel: 'TRUE', isWord: 'TRUE'},
  {id: '1' , pr: 'águila', bl: 'CARRANO', isRel: 'NONE', isWord: 'FALSE'},
  {id: '2' , pr: 'ciruela', bl: 'MERTASNO', isRel: 'NONE', isWord: 'FALSE'},
  {id: '3' , pr: 'raqueta', bl: 'DELOTA', isRel: 'NONE', isWord: 'FALSE'},
  {id: '4' , pr: 'carpeta', bl: 'CASIMERA', isRel: 'NONE', isWord: 'FALSE'},
  {id: '5' , pr: 'campera', bl: 'CONTILÁN', isRel: 'NONE', isWord: 'FALSE'},
  {id: '6' , pr: 'palmera', bl: 'ALTANIO', isRel: 'NONE', isWord: 'FALSE'},
  {id: '7' , pr: 'pulsera', bl: 'TERCEPTO', isRel: 'NONE', isWord: 'FALSE'},
  {id: '8' , pr: 'teléfono', bl: 'MALLAVO', isRel: 'NONE', isWord: 'FALSE'},
  {id: '9' , pr: 'cuchara', bl: 'PEREBRO', isRel: 'NONE', isWord: 'FALSE'},
  {id: '10' , pr: 'ventana', bl: 'JILATESO', isRel: 'NONE', isWord: 'FALSE'},
    ];

//Creamos el esquema del procedimiento
//Definimos una pantalla de keyboard-response con una timeline específica
//La función jsPsych.timelineVariable nos permite definir luego de dónde obtener la info
var primeText = {type: 'html-keyboard-response',
                  timeline: [
                              blanca,
                              fijacion,
                            {stimulus: jsPsych.timelineVariable('pr'), trial_duration: 1000, choices: jsPsych.NO_KEYS, data: {isWord: jsPsych.timelineVariable('isWord'), type: 'pr'}},
                            {stimulus: jsPsych.timelineVariable('bl'), trial_duration: 3000, choices: ['f', 'j'], data: {isWord: jsPsych.timelineVariable('isWord'), type: 'bl', isRel: jsPsych.timelineVariable('isRel')}, on_finish: function(trial_data){trial_data.correct = isCorrect(trial_data);}}
                            ]
                };

//Creamos el procedimiento del experimento
//Definimos una timeline (el esquema) y una variable de donde se toman las timeline_variables

var exp_procedure = {
                      timeline: [primeText],
                      timeline_variables: estimulos};

//Puheamos a la timeline principal
timeline.push(exp_procedure);


jsPsych.init({
    timeline: timeline,
    show_progress_bar: true,
    message_progress_bar: 'Barra progreso',
    on_finish: function(){
    jsPsych.data.displayData();
    }
});
