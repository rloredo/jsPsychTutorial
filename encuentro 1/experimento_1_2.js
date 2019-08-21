// Experimento 1 procedimiento

// Crear variable timeline
var timeline = [];

// Crear pantalla de bienvenida

var bienvenida = {
    type: 'html-keyboard-response',
    stimulus: 'Bienvenido al experimento. Presione cualquier tecla para continuar.'
};


var instrucciones = {
    type: 'html-keyboard-response',
    stimulus: '<p>Estas son las instrucciones:</p> <p>lea y decida si es palabra o no.</p>'
};

timeline.push(bienvenida, instrucciones);
 // Creamos estímulos

var palabra1 = {
    type: 'html-keyboard-response',
    stimulus: 'GATO',
    trial_duration: 3000,
    choices: ['f', 'j'],
    data: {is_word: 'True'}

};

var palabra2 = {
    type: 'html-keyboard-response',
    stimulus: 'PERRO',
    trial_duration: 3000,
    choices: ['f', 'j'],
    data: {is_word: 'True'}

};

var palabra3 = {
    type: 'html-keyboard-response',
    stimulus: 'GOGO',
    trial_duration: 3000,
    choices: ['f', 'j'],
    data: {is_word: 'False'}

};

var palabra4 = {
    type: 'html-keyboard-response',
    stimulus: 'PENRO',
    trial_duration: 3000,
    choices: ['f', 'j'],
    data: {is_word: 'False'}

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
    on_finish: function(){
    jsPsych.data.displayData();
    }
});
