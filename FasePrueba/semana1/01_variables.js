/* Variables en JavaScript */

/* Variable: es un espacio en memoria donde se almacena una referencia a un valor. */

/*
Una analogía de la vida real
Podemos comprender fácilmente el concepto de una “variable” si nos la imaginamos como una “caja” con una etiqueta de nombre único pegada en ella.
*/

/* Podemos declarar variables para almacenar datos al utilizar las palabra clave var, let, o const. */

// A. uso de var let y const

// 1. declarar o definir una variable
// declarar una variable sin iniciar
// var nombre;

// podemos introducir datos en ella al utilizar el operador de asignación =
// nombre = "Jesús";

// ahora está almacenada en el área de la memoria asociada con la variable. La podemos acceder utilizando el nombre de la variable:
// console.log(nombre);

// para ser concisos, podemos combinar la declaración de la variable y su asignación en una sola línea:
// var nombre = "Jesús";
// console.log(nombre);

// también podemos declarar variables múltiples en una sola línea:
// var nombre = "Jesús", apellido = "Fernández";
// console.log(nombre, apellido);

// esto puede parecer más corto, pero no lo recomendamos. Por el bien de la legibilidad.

// algunas personas también definen variables múltiples en estilo multilínea separadas por comas:
// var nombre = "Jesús",
//     apellido = "Fernández";
// console.log(nombre, apellido);

// por favor utiliza la versión de líneas múltiples es un poco más larga, pero se lee más fácil, una línea por variable:
// var nombre = "Jesús";
// var apellido = "Fernández";
// console.log(nombre, apellido);

// 2. var se puede re declarar y reasignar
// var nombre = 'Fredo';
// console.log(nombre);
// nombre = 'Js';
// console.log(nombre);

// 3. let no se puede declarar de nuevo, pero si se puede reasignar;
// let apellido = 'Hernandez';
// console.log(apellido);
// apellido = 'Hernandez';
// console.log(apellido);

// 4. const no se puede declarar sin iniciar y no se puede reasignar ni declarar de nuevo.
// const pi;
// console.log(pi);
// const pi = 3.1416;
// console.log(pi);
// pi = '3.1416';
// console.log(pi);

// 5 scope (alcance)

// var es visible en la funcion donde se declaro o global
// let y const son visibles en el bloque donde se declararon o globales

// B. Reglas para nombrar Variables

// 1. No se puede usar palabras reservadas (function, var, for, while, etc.), nos da un error de sintaxis.

// lista de palabras reservadas: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

// 2. No pueden empezar con un dígito
// let 2abc = 5;

// 3. Pueden empezar con una letra, guión bajo _ o $
// const $hello = 'Hello';
// console.log($hello);
// const _world = 'World!';
// console.log(_world);
// console.log($hello + _world);

// 4. Para nombres complejos se usa notación camelCase (camello). Es decir: palabras van una detrás de otra, con cada palabra iniciando con letra mayúscula:
// let nombreDeUsuario = 'jsfdz';

// Más Información: https://es.wikipedia.org/wiki/Camel_case

// C. Nombrar cosas correctamente
/*
Estando en el tema de las variables, existe una cosa de mucha importancia.
Una variable debe tener un nombre claro, de significado evidente, que describa el dato que almacena.
Nombrar variables es una de las habilidades más importantes y complejas en la programación.
Un vistazo rápido a el nombre de las variables nos revela cuál código fue escrito por un principiante o por un desarrollador experimentado.
Por favor pasa tiempo pensando en el nombre adecuado para una variable antes de declararla. Hacer esto te da un retorno muy sustancial.

Algunas reglas buenas para seguir:
  - Use términos legibles para humanos como userName o shoppingCart.
  - Evite abreviaciones o nombres cortos a, b, c, al menos que en serio sepa lo que está haciendo.
  - Cree nombres que describen al máximo lo que son y sean concisos.
  - Acuerda con tu equípo cuáles términos se utilizarán. Si a un visitante se le llamara “user”, debemos llamar las variables relacionadas currentUser o newUser en vez de currentVisitor o newManInTown.

¿Suena simple? lo es, pero no es tan fácil crear nombres de variables descriptivos y concisos a la hora de practicar.
*/
