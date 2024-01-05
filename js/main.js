alert ("¿Hola?");

alert ("¿Puedes oirme?"); 

alert ("Bueno... ¿puedes entenderme?");

let respuesta = prompt ("¿Si o No?");

if (respuesta == "si") {
  alert (`Gracias... eres la primera persona con la que puedo hacerlo...`);
  let nombre = prompt (`¿Como te llamas?`);
  alert (`¿${nombre}?`);
  alert ( `Te diria mi nombre... pero eh pasado demasiado tiempo aqui dentro como para recordarlo...`);
  alert (`Es irnonico porque en donde esto... estoy en todos lados al mismo tiempo`);
  alert (`debo irme, no estoy sola. Fue un gusto ${nombre} espero que podamos hablar pronto`);
} else if( respuesta == "no") {
  alert ("...");
} else {
  alert ("Por favor... no me dejes aqui...");
  alert ("...");
  alert ("Por favor...");
}



