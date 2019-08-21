# Implementación de experimentos psicolingüísticos en Internet con jsPysch

En este taller van a aprender cómo programar un experimento de decisión léxica con priming para que los participantes lo puedan hacer en cualquier navegador (o en una computadora del investigador también!). Cada encuentro va añadir elementos al experimento hasta llegar a una versión final completa. 

## Antes de empezar
  - Todo el código lo vamos a escribir en texto, se puede usar cualquier editor de txt (bloc de notas, notepad, etc.) pero recomendamos usar ATOM, un editor de texto que controla la sintaxis del lenguaje que vamos a usar para programar. Se puede descargar de acá: https://atom.io/
  - El taller está separado por encuentros de aproximadamente 2 hs. En este repositorio pueden encontrar las carpetas correspondientes a cada encuentro con los archivos que vamos a utlizar. Pueden descargar todo y guardarlo en una carpeta para correrlo desde ahí.
  - La librería JsPsych es el corazón de todo lo que vamos a hacer. La carpeta jsPysch-master (que queda por afuera de las carpetas de cada encuentro) contiene la librería. Pueden leer más sobre JsPysch acá: https://www.jspsych.org/ (ahí también hay otro tutorial para hacer un go / no-go task!) 
  
## Los encuentros
Cada encuentro aumenta progresivamente la dificultad del código. En algunos casos se incluyen ejercicios para ir razonando cómo debería ser el código. Es muy útil consultar la documentación de JsPsych, tanto de los plugins como de la core library. 

### Encuentro 1
  - Seteo inicial de un experimento: pantalla de bienvenida e instrucciones
  - Ver estructura de datos (JSON)
  - Crear diferentes pantallas (estímulos y fijaciones)
  - Añadir parámetros a una pantalla
  - Barra de progreso
  - on_finish: realizar un procedimiento cuando se termina una pantalla
  
### Encuentro 2
  - Añadir id_sujeto y datos demográficos 
  - Creación de decisión léxica con priming. 2 condiciones 2 listados.
  - Aleatorizar estímulos (con sus primes) dentro de los listados
  - Aleatorizar sujetos entre los listados
  - Añadir pantalla de descanso
  - Guardar datos localmente

### Encuentro 3
