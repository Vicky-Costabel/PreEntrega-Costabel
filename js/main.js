const modal = document.querySelector('.modal-dialogo');
const telefono = document.querySelector('.telefono')
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const llamar = document.getElementById('llamar');

// tarjetas
function cambiarImagen() {
    let imagen1 = document.getElementById('imagen1');
    let imagen2 = document.getElementById('imagen2');
    if (imagen1.src.includes('tarjeta1.png')) {
      imagen1.src = 'img/tarjeta2.png';
      telefono.classList.add('telefono-show')
    } else if(imagen1.src.includes('tarjeta2.png')){
      imagen2.src = 'img/tarjeta1.png'; 
    }
}

//telefono
let codigoCorrecto = '46517585612';

let codigoIngresado = '';

llamar.addEventListener('click', () => {
  if (codigoCorrecto === codigoIngresado) {
    iniciarDialogo()
  } else {
    alert('No, ese numero no es.');
  }
});


function agregarDigito(numero) {
  if (pantalla.textContent === "0") {
    pantalla.textContent = numero;
  } else {
    pantalla.textContent += numero;
  }
  codigoIngresado = pantalla.textContent.replace(/\s/g, '');
}

function borrarDigito() {
  if (pantalla.textContent.length === 1) {
    pantalla.textContent = "0";
  } else {
    pantalla.textContent = pantalla.textContent.slice(0, -1);
  }
  codigoIngresado = pantalla.textContent.replace(/\s/g, '');
}

document.querySelectorAll(".btn").forEach(boton => {
  boton.addEventListener("click", function() {
    const botonApretado = boton.textContent;
    switch(botonApretado) {
      case "←":
        borrarDigito();
        break;
      default:
        agregarDigito(botonApretado);
        break;
    }
  });
});



function iniciarDialogo() {
    modal.classList.add('modal--show');
    const mensajes = [
    "Se dice que en los infiernos existe un ser, una entidad que adopta la forma de una imponente mujer, una rebelde adolescente o una inocente niña. Sin embargo, en realidad, no es más que un alma caída, una abominación creada de la unión entre un ángel caído y un demonio.",
    "Este ser llegó al infierno como muchos otros, emergiendo desde lo más profundo del fango y ascendiendo con una determinación inquebrantable, superando a todas las demás almas en pena.",
    "Su mirada es audaz, su intelecto astuto y su lengua afilada como mil cuchillas. Es un ser que ha forjado su propio camino lentamente, labrándolo con esfuerzo y determinación hasta alcanzar la cima, desplazando incluso a los mismos demonios que una vez fueron los creadores de los pecados.",
    "Sus dominios son exclusivamente suyos, bajo su absoluto control y mando. Nada entra ni sale sin su permiso. Sin embargo, en las puertas de sus dominios, en su entrada, se encuentra un bar conocido como 'Baby Fox', un lugar donde todos los pecados se congregan y se alimentan entre sí: la lujuria, la ira, la pereza, y todo lo imaginable en el infierno. Pero todo lo que ocurre bajo ese techo está estrictamente bajo su supervisión.",
    "Los seres que 'trabajan' en este lugar le pertenecen, son su propiedad, y nada ni nadie puede tocar lo que es suyo.",
    "De lo contrario, se rumorea que este ser es capaz de infligir las peores torturas, las más atroces de las atrocidades, justo antes de asesinarte lentamente y con dolor. Luego, cocinaría tu carne y la serviría a uno de sus muchos clientes con gustos 'peculiares'. Por lo tanto, es mejor no provocar su ira.",
    "Se dice que es el ser más peligroso del infierno, un ser desprovisto de alma que tortura a cualquiera que ponga un pie en sus dominios por toda la eternidad.",
    "Se dicen muchas cosas de este ser, y ninguna de ellas es buena...",
    "Sin embargo, hay quienes sostienen que todo esto es falso, que este ser despiadado no es más que una máscara que utiliza para alejar a los verdaderos demonios de sus dominios. Se rumorea que este ser no es lo que parece, que en realidad es piadoso y compasivo, que comprende la naturaleza humana y reconoce que el pecado no hace a alguien una mala persona. Se dice que siempre hay lugar para la redención en su presencia.",
    "Se comenta que, si logras obtener su número y solicitas 'trabajo', podrás escapar del sufrimiento eterno del infierno y vivir en sus dominios. Aunque no sea el paraíso, se dice que es mejor que el lugar del que venías antes.",
    "Ahora. ¿Confías en los rumores?"
  ];

  const burbujaContainer = document.getElementById('burbujaContainer');
    let mensajeActual = 0;

    function mostrarMensajeSiguiente() {
        if (mensajeActual < mensajes.length) {
            crearBurbuja(mensajes[mensajeActual]);
            mensajeActual++;
            
            burbujaContainer.scrollTop = burbujaContainer.scrollHeight;
        } else {
           
            botonSiguiente.disabled = true;
        }
    }

    function crearBurbuja(mensaje) {
        const burbuja = document.createElement('p');
        burbuja.classList.add('burbuja');
        burbuja.textContent = mensaje;
        burbujaContainer.appendChild(burbuja);
        burbuja.scrollIntoView();
    }

    function handleClick() {
        mostrarMensajeSiguiente();
    }

    
    document.addEventListener('click', handleClick);

   
    function detenerEscucha() {
        document.removeEventListener('click', handleClick);
    }

   
}

