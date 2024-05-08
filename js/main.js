const boton = document.getElementById('boton');
const barrera = document.querySelector('.barrera');
const inicio = document.getElementById("inicio");
const introduccion = document.getElementById('introduccion');
const velo = document.querySelector('.velo');
const modal = document.querySelector('.modal-inicio');
const seccionPrimera = document.getElementById('seccion1');
const seccionSegunda = document.getElementById('seccion2');
const seccionTercera = document.getElementById('seccion3');
const seccionCuarta = document.getElementById('seccion4');
const cuadroPlayer = document.querySelector('.cuadro-player');
const cuadroMuerte = document.querySelector('.cuadro-muerte')
const next = document.getElementById('siguiente')
const respuesta = document.getElementById('respuesta')
const cuadro = document.querySelector('.cuadro-opciones')
const muerte = document.querySelector('.dialogo-muerte')
const good = document.getElementById('good')
const bad = document.getElementById('bad')
const corazon =document.querySelector('.corazon')
const nombre= document.getElementById('nombre-player')
const finalM =document.querySelector('.bad')
const finalB =document.querySelector('.good')
const puerta = document.getElementById('puerta')
const personajes = document.querySelector('.personajes')
let i = 0;
let progreso = 100;
let intervalId = null;
let mensajeActual = 0;
let mensajeActual1 = 0;
let mensajes = [    
];

window.onload = function() {
  swal({
    title: "Advertencia",
    text: "Esta es una novela estilo visual corta donde se tratan temas relacionados con la muerte. Si este tema le parece incómodo, por favor, absténgase de jugar.",
    content: {
      element: "input",
      attributes: {
        id: "player",
        placeholder: "Por favor ingrese el nombre del personaje"
      }
    },
    buttons: {
      confirm: {
        text: "Aceptar",
        value: true,
        closeModal: true
      }
    }
  }).then((value) => {
    if (value) {
      const playerName = document.getElementById('player').value;
      localStorage.setItem('playerName', playerName);
      nombre.textContent = playerName;
      
    }
  });
};

fetch("mensajes.json")
.then(response => response.json())
.then(data => {
  mensajes=data.mensajes;
})
function iniciarHistoria() {
  modal.classList.add('modal--show');
  puerta.classList.add('hidden')
  function mostrarSiguienteMensaje() {
    if (mensajeActual <= mensajes.length) {
      introduccion.classList.add('oculto'); 
      introduccion.addEventListener('transitionend', () => {
        introduccion.textContent = mensajes[mensajeActual++];
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
  fetch("mensajes.json")
  .then(response => response.json())
  .then(data => {
    mensajes=data.mensajes1;
  })
  introduccion.textContent = mensajes[0];
  introduccion.classList.remove('oculto');
  function mostrarSiguienteMensaje1() {
    if (mensajeActual1 < mensajes.length - 1) {
      inicio.classList.add('oculto'); 
      inicio.addEventListener('transitionend', () => {
        inicio.textContent = mensajes[++mensajeActual1]; 
        inicio.classList.remove('oculto'); 
      }, { once: true }); 
    } else {
      setTimeout(cuadroPlayer.classList.remove('hidden'), 70000);  
      mostrarCuadro()
    }
  }
  document.addEventListener('click', mostrarSiguienteMensaje1);

  setTimeout(() => {
    inicio.classList.remove('oculto');
  }, 2000);

  setTimeout(() => {
    inicio.addEventListener('click', iniciarHistoria);
  }, 3000);
}

inicio.addEventListener('click', iniciarHistoria);

function mostrarCuadro() {
  inicio.classList.add('hidden');
  modal.classList.add ('blanco');
  modal.classList.remove ('negro');
  velo.classList.add('hidden');
  barrera.classList.add ('hidden'); 
  personajes.classList.remove('hidden');
  
}

function obtenerRespuestas() {
  let respuestas = {
    seccion1: obtenerSeleccion("seccion1"),
    seccion2: obtenerSeleccion("seccion2"),
    seccion3: obtenerSeleccion("seccion3")
  };
  let respuestasA = [];
  let respuestasB = [];
  for (let seccion in respuestas) {
    if (respuestas.hasOwnProperty(seccion)) {
      if (respuestas[seccion] === 'A') {
        respuestasA.push(seccion);
      } else if (respuestas[seccion] === 'B') {
        respuestasB.push(seccion);
      } else {
        if (Math.random() < 0.5) {
          respuestasA.push(seccion);
        } else {
          respuestasB.push(seccion);
        }
      }
    }
  }

  if(respuestasA.length > respuestasB.length) {
    corazon.classList.remove('fa-regular')
    corazon.classList.add('fa-solid')
    finalB.classList.remove('hidden')
  }else if (respuestasA.length < respuestasB.length){
    finalM.classList.remove('hidden')
    corazon.classList.remove('fa-regular')
    corazon.classList.remove('fa-heart')
    corazon.classList.add('fa-heart-crack')
    corazon.classList.add('fa-solid')
  }
  
}

function finalizarNovela() {
  intervalId = setInterval(() => {
    if (progreso < 100) {
      progreso += 0;
      modal.style.opacity = '1';
      cuadroPlayer.style.opacity = '1';
      cuadroMuerte.style.opacity= '1';
    } else if(progreso <= 100) {
      clearInterval(intervalId);
      reset.classList.remove('hidden')
    }
  }, 40);
}

function reiniciarCargaFinal() {
  clearInterval(intervalId);
  progreso = 0;
  modal.style.opacity = '0';
  cuadroPlayer.style.opacity = '0';
  cuadroMuerte.style.opacity= '0';
  personajes.style.opacity='0';
  setTimeout(modal.classList.remove('modal--show'), 3000)
  barrera.classList.add('hidden')
}

respuesta.addEventListener('click', () => {
  reiniciarCargaFinal();
});



function obtenerSeleccion(seccion) {
  let opciones = document.querySelectorAll('.' + seccion);
  for (let i = 0; i < opciones.length; i++) {
    if (opciones[i].classList.contains('seleccionada')) {
        return opciones[i].textContent;
    }
  }
  return '';
}

function cargarMensajes() {
  return fetch('mensajes.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar los mensajes');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => console.error('Error:', error));
}

function siguienteRonda(i){
  cargarMensajes().then(data =>{
    switch(i){
      case 1:
        seccionPrimera.classList.add('hidden');
        seccionCuarta.classList.remove('hidden');
        next.classList.remove('hidden');
        cuadroMuerte.classList.remove('hidden');
        muerte.textContent = data.muerteTxT[0];
        seccionCuarta.textContent = data.seccionCuartaTxT[0]; 
      break;
      case 2:
        seccionPrimera.classList.add('hidden');
        seccionCuarta.classList.remove('hidden');
        cuadroMuerte.classList.remove('hidden');
        next.classList.remove('hidden');
        muerte.textContent = data.muerteTxT[1];
        seccionCuarta.textContent = data.seccionCuartaTxT[1]; 
      break;
      case 3:
        seccionPrimera.classList.add('hidden');
        seccionCuarta.classList.remove('hidden');
        cuadroMuerte.classList.remove('hidden');
        next.classList.remove('hidden');
        muerte.textContent = data.muerteTxT[2];
        seccionCuarta.textContent = data.seccionCuartaTxT[2]; 
      break;
      case 4:
        seccionSegunda.classList.add('hidden');
        seccionCuarta.classList.remove('hidden');
        cuadroMuerte.classList.remove('hidden');
        next.classList.remove('hidden');
        muerte.textContent = data.muerteTxT[3];
        seccionCuarta.textContent = data.seccionCuartaTxT[3]; 
      break;
      case 5:
        seccionSegunda.classList.add('hidden');
        seccionCuarta.classList.remove('hidden');
        cuadroMuerte.classList.remove('hidden');
        next.classList.remove('hidden');
        muerte.textContent = data.muerteTxT[4];
        seccionCuarta.textContent = data.seccionCuartaTxT[4]; 
      break;
      case 6:
        seccionSegunda.classList.add('hidden');
        seccionCuarta.classList.remove('hidden');
        cuadroMuerte.classList.remove('hidden');
        next.classList.remove('hidden');
        muerte.textContent = data.muerteTxT[5];
        seccionCuarta.textContent = data.seccionCuartaTxT[5]; 
      break;
      case 7:
        seccionTercera.classList.add('hidden');
        seccionCuarta.classList.remove('hidden');
        cuadroMuerte.classList.remove('hidden');
        respuesta.classList.remove('hidden');
        muerte.textContent = data.muerteTxT[6];
        seccionCuarta.textContent = data.seccionCuartaTxT[6]; 
      break;
      case 8:
        seccionTercera.classList.add('hidden');
        seccionCuarta.classList.remove('hidden');
        cuadroMuerte.classList.remove('hidden');
        respuesta.classList.remove('hidden');
        muerte.textContent = data.muerteTxT[7];
        seccionCuarta.textContent = data.seccionCuartaTxT[7]; 
      break;
      case 9:
        seccionTercera.classList.add('hidden');
        seccionCuarta.classList.remove('hidden');
        cuadroMuerte.classList.remove('hidden');
        respuesta.classList.remove('hidden');
        muerte.textContent = data.muerteTxT[8];
        seccionCuarta.textContent = data.seccionCuartaTxT[8]; 
      break;
    };

  })
  
}


function siguiente(){
  next.addEventListener('click', function(){
    i++;
    switch(i){
      case 1:
        seccionCuarta.classList.add('hidden');
        next.classList.add('hidden');
        seccionSegunda.classList.remove('hidden');
      break;
      case 2: 
        seccionCuarta.classList.add('hidden');
        next.classList.add('hidden');
        seccionTercera.classList.remove('hidden');
      break;
      case 3:
        seccionCuarta.classList.add('hidden');
        next.classList.add('hidden');
      break;
      default:   
        break;
    }
  });
}

