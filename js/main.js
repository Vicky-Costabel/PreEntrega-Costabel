const boton = document.getElementById('boton');
const barrera = document.querySelector('.barrera');
const inicio = document.getElementById("inicio");
const introduccion = document.getElementById('introduccion');
const velo = document.querySelector('.velo');

const modalInicio = document.querySelector('.modal-inicio')
let progreso = 100;
let intervalId = null;
let modal = document.querySelector('.modal-inicio');
let mensajeActual = 0;
let mensajeActual1 = 0;
let mensajes = [
  "'vuelve...'",
  "Despertaste en un abismo sin fondo, donde las sombras danzaban y la oscuridad engullía todo a su paso. Por un instante, la memoria te abandonó y te dejaste llevar por la sensación de flotar en ese lugar sin tiempo ni espacio, hasta que la razón te devolvió al suelo firme. El suelo húmedo calaba tus ropajes, mientras una brisa misteriosa acariciaba tu cabello despeinado. Un cántico suave te envolvía, como la melodía maternal que llama al hijo perdido. Sentías su llamado, una invitación a sumergirte en el oscuro abismo, pero algo en tu interior te recordaba que estabas aquí por un propósito.",
  "Volteaste la cabeza y divisaste a lo lejos una luz blanca, titilante como un faro en la noche. Una ventana, una puerta, un destello al final del túnel que te cegaba.",
  "'No es tarde aún', te susurraste a ti mismo con determinación.",
  "Avanzaste hacia la luz, y conforme te acercabas, una figura se delineaba en su resplandor. Reconociste a esa presencia al instante: era ella. Sus cabellos blancos como la nieve, su piel pálida como la luna y su vestido blanco como la pureza misma.",
  "Tus ojos se humedecieron, pero te prohibiste derramar lágrimas. Corriste hacia ella, la luz te envolvía cada vez más, pero llegó un momento en que el camino se truncó. Un velo cristalino, casi etéreo, te impedía llegar hasta ella. Gritaste su nombre una y otra vez, pero tu voz parecía perderse en la inmensidad.",
  "La desesperación y la ira se mezclaban dentro de ti, y golpeaste el velo con fuerza. Con un acto de voluntad férrea, te propusiste atravesarlo y, para tu asombro, lograste captar su atención. Sus ojos, que una vez brillaron como gemas preciosas, se posaron en ti. Parecía no reconocerte, pero no podía apartar la mirada."     
];

function iniciarHistoria() {
  modal.classList.add('modal--show');
  function mostrarSiguienteMensaje() {
    if (mensajeActual < mensajes.length - 1) {
      introduccion.classList.add('oculto'); 
      introduccion.addEventListener('transitionend', () => {
        introduccion.textContent = mensajes[++mensajeActual]; 
        introduccion.classList.remove('oculto'); 
      }, { once: true }); 
    } else {
      introduccion.classList.add('oculto')
      barrera.classList.remove('hidden') 
    }
  }
  document.addEventListener('click', mostrarSiguienteMensaje);
}

function iniciarCarga() {
  intervalId = setInterval(() => {
    if (progreso < 100) {
      progreso += 0;
      velo.style.opacity = '0';
    } else if(progreso <= 100) {
      clearInterval(intervalId);
      
    }
  }, 40);
}

function reiniciarCarga() {
  clearInterval(intervalId);
  progreso = 0;
  velo.style.opacity = '1';
  boton.classList.add('hidden')

  iniciarNovela();
  
}

boton.addEventListener('click', () => {
  reiniciarCarga();
  
});


function iniciarNovela() {
  mensajes = [
    'Su mano se alzó, como si estuviera a punto de tomar la tuya, pero algo en su gesto denotaba confusión, como si estuviera atrapada en un sueño del que no podía despertar. La presencia oscura, como una sombra hecha de cenizas, se alzaba detrás de ella, imponente y amenazante, despertando en ti el más primario y ancestral de los instintos: el de huir.',
    'Sin embargo, cuando te decidiste a interponerte entre ella y la figura oscura, te encontraste con una sorpresa inesperada. La oscuridad se disipó, revelando una figura que conocías demasiado bien: la tuya propia. Pero no era tú, era como si tu esencia hubiera sido corrompida, distorsionada en una versión maligna de ti mismo.',
    'El ser que se hacía pasar por ti se arrodilló frente a ella con una actitud que rozaba lo reverencial, extendiendo la mano como si fuera un caballero dispuesto a ofrecerle el mundo entero.'
  ];
  
  function mostrarSiguienteMensaje1() {
    if (mensajeActual1 < mensajes.length - 1) {
      inicio.classList.add('oculto'); 
      inicio.addEventListener('transitionend', () => {
        inicio.textContent = mensajes[++mensajeActual1]; 
        inicio.classList.remove('oculto'); 
      }, { once: true }); 
    } else {
      inicio.classList.add('oculto') 
    }
  }
  document.addEventListener('click', mostrarSiguienteMensaje1);
}
  



