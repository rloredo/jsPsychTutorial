// Experimento 1 procedimiento

// Crear variable timeline
var timeline = [];

// Crear pantalla de bienvenida

var bienvenida = {
    type: 'html-keyboard-response',
    stimulus: 'Bienvenido al experimento',
    trial_duration: 5000    
};


var instrucciones = {
    type: 'html-keyboard-response',
    stimulus: 'Estas son las instrucciones. Leé perro.'
};

timeline.push(bienvenida, instrucciones);


jsPsych.init({
    timeline: timeline,
    on_finish: function(){
    jsPsych.data.displayData();
    }
});
