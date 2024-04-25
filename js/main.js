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
  "'vuelve...'",
  "Despertaste en un abismo sin fondo, donde las sombras danzaban y la oscuridad engullía todo a su paso. Por un instante, la memoria te abandonó y te dejaste llevar por la sensación de flotar en ese lugar sin tiempo ni espacio, hasta que la razón te devolvió al suelo firme. El suelo húmedo calaba tus ropajes, mientras una brisa misteriosa acariciaba tu cabello despeinado. Un cántico suave te envolvía, como la melodía maternal que llama al hijo perdido. Sentías su llamado, una invitación a sumergirte en el oscuro abismo, pero algo en tu interior te recordaba que estabas aquí por un propósito.",
  "Volteaste la cabeza y divisaste a lo lejos una luz blanca, titilante como un faro en la noche. Una ventana, una puerta, un destello al final del túnel que te cegaba.",
  
  "'No es tarde aún', te susurraste a ti mismo con determinación.",
  
  "Avanzaste hacia la luz, y conforme te acercabas, una figura se delineaba en su resplandor. Reconociste a esa presencia al instante: era ella. Sus cabellos blancos como la nieve, su piel pálida como la luna y su vestido blanco como la pureza misma.",

  "Tus ojos se humedecieron, pero te prohibiste derramar lágrimas. Corriste hacia ella, la luz te envolvía cada vez más, pero llegó un momento en que el camino se truncó. Un velo cristalino, casi etéreo, te impedía llegar hasta ella. Gritaste su nombre una y otra vez, pero tu voz parecía perderse en la inmensidad.",

  "La desesperación y la ira se mezclaban dentro de ti, y golpeaste el velo con fuerza. Con un acto de voluntad férrea, te propusiste atravesarlo y, para tu asombro, lograste captar su atención. Sus ojos, que una vez brillaron como gemas preciosas, se posaron en ti. Parecía no reconocerte, pero no podía apartar la mirada." 
     
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
  mensajes = [
    ' ',
    'Su mano se alzó, como si estuviera a punto de tomar la tuya, pero algo en su gesto denotaba confusión, como si estuviera atrapada en un sueño del que no podía despertar. La presencia oscura, como una sombra hecha de cenizas, se alzaba detrás de ella, imponente y amenazante, despertando en ti el más primario y ancestral de los instintos: el de huir.',
    'Sin embargo, cuando te decidiste a interponerte entre ella y la figura oscura, te encontraste con una sorpresa inesperada. La oscuridad se disipó, revelando una figura que conocías demasiado bien: la tuya propia. Pero no era tú, era como si tu esencia hubiera sido corrompida, distorsionada en una versión maligna de ti mismo.',
    'El ser que se hacía pasar por ti se arrodilló frente a ella con una actitud que rozaba lo reverencial, extendiendo la mano como si fuera un caballero dispuesto a ofrecerle el mundo entero.'
  ];
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



function siguienteRonda(i){
  switch(i){
    case 1:
      seccionPrimera.classList.add('hidden');
      seccionCuarta.classList.remove('hidden');
      next.classList.remove('hidden');
      cuadroMuerte.classList.remove('hidden');
      muerte.textContent = 'Ven, cariño, toma mi mano y vámonos. Prometo que si lo haces, serás la mujer más feliz del mundo.';
      seccionCuarta.textContent = 'Los labios de ese oscuro ser se alzaron mientras la miraban con un amor falso. Era como si las sombras mismas estuvieran tejiendo una ilusión de afecto, pero ella podía percibir la frialdad detrás de esa máscara de ternura. Tu corazón se llenó de una sensación de advertencia, instándola a alejarse antes de que fuera demasiado tarde'; 
    break;
    case 2:
      seccionPrimera.classList.add('hidden');
      seccionCuarta.classList.remove('hidden');
      cuadroMuerte.classList.remove('hidden');
      next.classList.remove('hidden');
      muerte.textContent = 'Imagina un futuro lleno de risas, amor y aventuras compartidas. Juntos podemos construir un hogar donde cada día sea una nueva oportunidad para celebrar nuestro amor y crecer juntos. Confía en mí, juntos podemos hacer realidad nuestros sueños más profundos.';
      seccionCuarta.textContent = 'Los labios de ese oscuro ser se alzaron mientras la miraban con un amor falso. Era como si las sombras mismas estuvieran tejiendo una ilusión de afecto, pero ella podía percibir la frialdad detrás de esa máscara de ternura. En su mirada, había un destello de malicia disfrazado de dulzura, como si estuviera tramando algo siniestro bajo la superficie de su aparente amor.';
    break;
    case 3:
      seccionPrimera.classList.add('hidden');
      seccionCuarta.classList.remove('hidden');
      cuadroMuerte.classList.remove('hidden');
      next.classList.remove('hidden');
      muerte.textContent = 'Ven, cariño, toma mi mano y vámonos. Juntos podemos construir un hogar donde cada día sea una nueva oportunidad para celebrar nuestro amor eterno';
      seccionCuarta.textContent = 'Los labios de ese oscuro ser se alzaron mientras la miraban con un amor falso. En su mirada, había un destello de malicia disfrazado de dulzura, como si estuviera tramando algo siniestro bajo la superficie de su aparente amor. Su corazón se llenó de una sensación de advertencia, instándola a alejarse antes de que fuera demasiado tarde';
    break;
    case 4:
      seccionSegunda.classList.add('hidden');
      seccionCuarta.classList.remove('hidden');
      cuadroMuerte.classList.remove('hidden');
      next.classList.remove('hidden');
      muerte.textContent = 'Ven, cariño, toma mi mano y ven conmigo. He sido demasiado cruel contigo, pero tu amor me ha hecho cambiar. Quiero caminar contigo hacia un futuro donde reine el amor y la comprensión mutua. ';
      seccionCuarta.textContent = 'Su oscura mano tomó un mechón de su hermoso cabello y lo besó con tanta suavidad como si se tratara de la flor más frágil. Un sentimiento de repulsión y culpa te invadió. Era tu gesto, la forma en la que podías mostrarle tu amor, adorando cada una de sus cualidades.'; 
    break;
    case 5:
      seccionSegunda.classList.add('hidden');
      seccionCuarta.classList.remove('hidden');
      cuadroMuerte.classList.remove('hidden');
      next.classList.remove('hidden');
      muerte.textContent = 'Ven, cariño, toma mi mano y ven conmigo. He sido demasiado cruel contigo, pero tu amor me ha hecho cambiar. Confía en mí, te amo más de lo que las palabras pueden expresar, y haré todo lo posible para hacerte feliz.';
      seccionCuarta.textContent = 'Su oscura mano tomó un mechón de su hermoso cabello y lo besó con tanta suavidad como si se tratara de la flor más frágil. Era tu gesto, la forma en la que podías mostrarle tu amor, adorando cada una de sus cualidades.';
    break;
    case 6:
      seccionSegunda.classList.add('hidden');
      seccionCuarta.classList.remove('hidden');
      cuadroMuerte.classList.remove('hidden');
      next.classList.remove('hidden');
      muerte.textContent = 'Ven, cariño, toma mi mano y ven conmigo. He sido demasiado cruel contigo, pero tu amor me ha hecho cambiar. Confía en mí, te amo más de lo que las palabras pueden expresar, y haré todo lo posible para hacerte feliz.';
      seccionCuarta.textContent = 'Su oscura mano tomó un mechón de su hermoso cabello y lo besó con tanta suavidad como si se tratara de la flor más frágil. Un sentimiento de repulsión y culpa te invadió.';
    break;
    case 7:
      seccionTercera.classList.add('hidden');
      seccionCuarta.classList.remove('hidden');
      cuadroMuerte.classList.remove('hidden');
      respuesta.classList.remove('hidden');
      muerte.textContent = 'Déjame amarte para siempre. Juntos, podemos construir un futuro lleno de amor, alegría y compañerismo. Prometo amarte con todo mi ser, hoy y siempre.';
      seccionCuarta.textContent = 'Su voz se hizo suave y dulce, pero en el fondo, escondía el amargo sabor del final. Detrás de esa dulzura, se encontraba la tristeza de un adiós inevitable. Era como si el destino hubiera tejido un hilo invisible que los separaría, a pesar de sus deseos más profundos. '; 
    break;
    case 8:
      seccionTercera.classList.add('hidden');
      seccionCuarta.classList.remove('hidden');
      cuadroMuerte.classList.remove('hidden');
      respuesta.classList.remove('hidden');
      muerte.textContent = 'Ven conmigo y me harás el hombre más feliz del mundo y el más afortunado de todos. Déjame amarte para siempre. En tus brazos encuentro mi refugio y en tu corazón encuentro mi hogar. Prometo amarte con todo mi ser, hoy y siempre.';
      seccionCuarta.textContent = 'Su voz se hizo suave y dulce, pero en el fondo, escondía el amargo sabor del final.  Era como si el destino hubiera tejido un hilo invisible que los separaría, a pesar de sus deseos más profundos. En tu corazón, sabía que este era el preludio de un capítulo final que se acercaba inexorablemente.';
    break;
    case 9:
      seccionTercera.classList.add('hidden');
      seccionCuarta.classList.remove('hidden');
      cuadroMuerte.classList.remove('hidden');
      respuesta.classList.remove('hidden');
      muerte.textContent = 'Ven conmigo y me harás el hombre más feliz del mundo y el más afortunado de todos. Déjame amarte para siempre. Juntos, podemos construir un futuro lleno de amor, alegría y compañerismo. Prometo amarte con todo mi ser, hoy y siempre.';
      seccionCuarta.textContent = 'Su voz se hizo suave y dulce, pero en el fondo, escondía el amargo sabor del final.';
    break;
  }
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

