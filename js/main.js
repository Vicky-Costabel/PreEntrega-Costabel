const boton = document.getElementById('boton');
const barrera = document.querySelector('.barrera');
const iniciar = document.querySelector(".inicio");
const introduccion = document.getElementById('introduccion');
const velo = document.querySelector('.velo');
let progreso = 100;
let intervalId = null;
let modal = document.querySelector('.modal-inicio');
let mensajeActual = 0;
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
    } else {
      clearInterval(intervalId);
      iniciarNovela();
    }
  }, 40);
}

function inicialNovela() {


}

function reiniciarCarga() {
  clearInterval(intervalId);
  progreso = 0;
  velo.style.opacity = '1';
}

boton.addEventListener('click', () => {
  clearTimeout(intervalId);
  reiniciarCarga();
});


