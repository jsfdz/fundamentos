/* Funciones en javascript */
// Funciones: son un conjunto de instrucciones que realizan una tarea o calculan un valor y pueden ser reutilizadas.

/*
Sintaxis:

function nombreFuncion(parametros, ...){
    //Instrucciones
}
La palabra clave function va primero, luego va el nombre de función, luego una lista de parámetros entre paréntesis (separados por comas) y finalmente el código de la función (Instrucciones) entre llaves, también llamado “el cuerpo de la función”.
*/

// A) Declaración de una función:

// Para crear una función podemos usar una declaración de función.
// Ejemplo:
function miFuncion () {
  console.log('Intrucciones de la función')
  console.log('Más instrucciones de la función')
}

// Nuestra nueva función puede ser llamada por su nombre seguido por paréntesis, a esto se le conoce como 'invocar' o 'llamar' la función:
miFuncion()

/* Declaración de una función sin retorno */

// Ejemplo:
function mostrarMensaje () {
  // En el caso de que la función no tenga un valor de retorno, se puede omitir la palabra return.
  console.log('Hola mundo')
  // Resultado: Hola mundo
}

mostrarMensaje()
// ** Importante una función sin retorno siempre retorna undefined.

/* B) Variables Locales */
// Una variable declarada dentro de una función solo es visible dentro de esa función.

// Ejemplo:
function saludar () {
  const mensaje = 'Hola mundo' // Variable local
  console.log(mensaje)
}

// console.log(mensaje) // Error de referencia: mensaje no está definida
saludar()

/* C) Variables Externas (globales) */
// Variables declaradas fuera de cualquier función, se llaman globales.

// Ejemplo:
const texto = 'La variable texto es global'

function imprimirTexto () {
  console.log(texto)
}

imprimirTexto()
console.log(texto) // puedo acceder a la variable global desde cualquier lugar de mi código.

// Ejemplo alternando variables globales y locales:
let nombre = 'Juan'

function ejemplo1 () {
  // La variable externa solo se usa si no hay una local.
  const mensaje = `Hola ${nombre}`
  console.log(mensaje)
}

ejemplo1()

// Ejemplo modificando la variable global:
// La función tiene acceso completo a la variable externa. Puede modificarlo también.
function ejemplo2 () {
  nombre = 'Pedro'
  const mensaje = `Hola ${nombre}`
  console.log(mensaje)
}

ejemplo2()

// Las variables globales son visibles desde cualquier función (a menos que se les superpongan variables locales con el mismo nombre).
// Ejemplo declarando una variable local con el mismo nombre que la externa, La exterior se ignora:
function ejemplo3 () {
  const nombre = 'Luis'
  const mensaje = `Hola ${nombre}`
  console.log(mensaje)
}

ejemplo3()

// ** Es una buena práctica reducir el uso de variables globales.

/* D) Parámetros */
// Parámetros son valores que se pasan a una función cuando se invoca.

// Por ejemplo:
// a y b son parámetros, a = 2 y b = 3
function suma (a, b) { // parametros (es un término para el momento de la declaración)
  console.log(a + b)
}

// Cuando la función se llama, los valores dados se copian en variables locales a y b. Y la función las utiliza.

// Cuando un valor es pasado como un parámetro de función, también se denomina argumento.
suma(2, 3) // argumentos (es el término para el momento en que se llama)

// Para poner los términos claros:
//  - Un parámetro es una variable listada dentro de los paréntesis en la declaración de función.
//  - Un argumento es el valor que es pasado a la función cuando esta es llamada.
// Declaramos funciones listando sus parámetros, luego las llamamos pasándoles argumentos.

/* E) Valores predeterminados */
// En una función, si no se pasa un valor para el parámetro, recibe el valor de undefined (indefinido).
// Un parámetro puede tener un valor “predeterminado” o “default”, que se usa si el argumento fue omitido en la declaración de función usando =:

// Ejemplo:
function imprimirMensaje (mensaje = 'Hola mundo') {
  console.log(mensaje)
}

imprimirMensaje()
// imprimirMensaje('Hola Pedro')
// En el ejemplo es solo un string, pero puede ser una expresión más compleja, la cual solo es evaluada y asignada si el parámetro falta.

/* Parámetros predeterminados alternativos */

// a) Alternativa 1:
// A veces tiene sentido asignar valores predeterminados no en la declaración de función sino en un estadio posterior.
// Podemos verificar si un parámetro es pasado durante la ejecución de la función comparándolo con undefined:
function alternativa1 (mensaje) {
  if (mensaje === undefined) {
    mensaje = 'Hola mundo'
  }
  console.log(mensaje)
}

alternativa1()

// b) Alternativa 2:
// Podemos usar el operador ||:
function alternativa2 (mensaje) {
  mensaje = mensaje || 'Hola mundo'
  console.log(mensaje)
}

alternativa2()

// c) Alternativa 3:
// Usando el operador nullish coalescing ??, que es mejor cuando el valor de 0 debe ser considerado “normal” en lugar de falso:
function alternativa3 (contador) {
  contador = contador ?? 'No es un número'
  console.log(contador)
}

alternativa3(0)
// alternativa3(null)
// alternativa3(undefined)

/* F) La directiva return */
// Una función puede devolver un valor al código de llamada como resultado.

// Ejemplo:
function sumar (a, b) {
  return a + b
}

// La directiva return puede estar en cualquier lugar de la función. Cuando la ejecución lo alcanza, la función se detiene y el valor es retornado a la función llamante.

const resultado = sumar(2, 3)
console.log(resultado)

// Puede haber muchos casos de return en una sola función. Por ejemplo:
function operacionAritmetica (operacion, a, b) {
  if (operacion === 'suma') {
    return a + b
  } else if (operacion === 'resta') {
    return a - b
  } else if (operacion === 'multiplicacion') {
    return a * b
  } else if (operacion === 'division') {
    return a / b
  } else {
    return 'Operación no válida'
  }
}

console.log(operacionAritmetica('suma', 2, 3))
console.log(operacionAritmetica('resta', 10, 3))
console.log(operacionAritmetica('multiplicacion', 2, 3))
console.log(operacionAritmetica('division', 25, 5))
console.log(operacionAritmetica('cantar', 2, 10))

// Es posible utilizar return sin ningún valor. Eso hace que la función salga o termine inmediatamente.
function imprimirNumero (numero) {
  if (typeof numero !== 'number') return 'No es un número'
  return numero // No agregue una nueva línea entre return y el valor, eso no funciona se convierte en un return vacío. Deberíamos poner el valor en la misma línea.
}

// const mostrar = imprimirNumero(2)
const mostrar = imprimirNumero('24')
console.log(mostrar)

// ** Importante una función con un return vacío, o sin return, devuelve undefined

/* G) Funciones anónimas */
// Una función anónima es una función que no tiene nombre.
// Es una función que se declara y se ejecuta en el mismo momento.
// Ejemplo:
const saludo = 'Hola mundo';
(function () {
  console.log(saludo)
})()

/* Algunos comentarios */
// Las funciones deben ser cortas y hacer exactamente una cosa.
function mostrarPrimos (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2) continue
    console.log(i)
  }
}

mostrarPrimos(10)

// Un ejemplo más complejo:
function paresImpares (tipo, n) {
  if (tipo === 'pares') {
    for (let i = 1; i <= n; i++) {
      if (i % 2) continue
      console.log(i)
    }
  } else if (tipo === 'impares') {
    for (let i = 1; i <= n; i++) {
      if (!(i % 2)) continue
      console.log(i)
    }
  } else {
    console.log('Tipo no válido')
  }
}

paresImpares('pares', 10)
paresImpares('impares', 10)

// Si una función es grande, tal vez valga la pena dividir la función en algunas funciones más pequeñas. A veces, seguir esta regla puede no ser tan fácil, pero definitivamente es algo bueno.

function simpleParesImpares (tipo, n) {
  if (tipo === 'pares') {
    pares(n)
  } else if (tipo === 'impares') {
    impares(n)
  } else {
    console.log('Tipo no válido')
  }
}

function pares (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2) continue
    console.log(i)
  }
}

function impares (n) {
  for (let i = 1; i <= n; i++) {
    if (!(i % 2)) continue
    console.log(i)
  }
}

simpleParesImpares('pares', 10)
simpleParesImpares('impares', 10)

// Nomenclatura de funciones:
//  - Un nombre debe describir claramente lo que hace la función. Cuando vemos una llamada a la función en el código, un buen nombre nos da al instante una comprensión de lo que hace y devuelve.
//  - Una función es una acción, por lo que los nombres de las funciones suelen ser verbales.
//  - Existen muchos prefijos de funciones bien conocidos como create…, show…, get…, check… y así. Úsalos para insinuar lo que hace una función.

/* H) Expresiones de función */

// Una función puede ser una expresión.
// La sintaxis que usamos antes se llama Declaración de Función

// Existe otra sintaxis para crear una función que se llama una Expresión de Función.
// Esto nos permite crear una nueva función en el medio de cualquier expresión

// Por ejemplo:
// Aquí podemos ver una variable obtenerSaludo obteniendo un valor "la nueva función" creada como function(nombre) { ... }.
const obtenerSaludo = function (nombre) {
  // Como la creación de una función ocurre en el contexto de una expresión de asignación (el lado derecho de =), esto es una Expresión de función.
  return 'Hola ' + nombre
}
// No hay un nombre después de la palabra clave function. Omitir el nombre está permitido en las expresiones de función.

const respuesta = obtenerSaludo('Juan')
console.log(respuesta)

// No importa cómo es creada la función, una función es un valor.
// Por lo que podemos asignarla a una variable.
function nuevaFuncion () {
  return 'Hola mundo'
}

// Podemos copiar una función a otra variable:
const fn = nuevaFuncion

// Ahora la función puede ser llamada de ambas maneras:
console.log(nuevaFuncion())
console.log(fn())

// También podríamos haber usado una expresión de función para declarar nuevaFuncion en la primera línea. Todo funcionaría igual.

/* Expresión de Función vs Declaración de Función */
// las principales diferencias entre Declaración y Expresión de Funciones.

/*
  El concepto de hoisting
  Al ejecutar un fragmento de código, el motor de JavaScript crea el contexto de ejecución global.
  El contexto tiene 2 fases: creación y ejecución.
  Durante la fase de creación, el motor de JavaScript mueve las declaraciones de variable y función a la parte superior de su contexto (scope).
  En JavaScript  el hoisting funciona solamente con las declaraciones

  Más información: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/hoisting
*/

//  - Declaración de Función: una función, declarada como una declaración separada, en el flujo de código principal.
//  - Las Declaraciones de Funciones se procesan antes de ejecutar el bloque de código. Son visibles en todas partes del bloque.
/* sintaxis:
    function nombreFuncion () {
      // código
    }
*/
// Otra característica especial de las Declaraciones de Funciones es su alcance de bloque.

// En modo estricto, cuando una Declaración de Función se encuentra dentro de un bloque de código, es visible en todas partes dentro de ese bloque. Pero no fuera de él.
// Ejemplo si utilizamos la Declaración de Funciones, no funcionará como se esperaba:
if (true) {
  function mensajePersonalizado () {
    console.log('Hola')
  }
} else {
  function mensajePersonalizado () {
    console.log('Adiós')
  }
}
// Esto se debe a que una Declaración de Función sólo es visible dentro del bloque de código en el que reside.

mensajePersonalizado() // Este ejemplo solo funcionará si estamos en modo estricto.

//  - Expresión de Función: una función, creada dentro de una expresión o dentro de otra construcción de sintaxis.
//  - Las Expresiones de Función se crean cuando el flujo de ejecución las alcanza.
/* sintaxis:
    Aquí, la función es creada en el lado derecho de la “expresión de asignación” =:
    const nombreFuncion = function () {
      // código
    }
*/
// Este código funciona según lo previsto:
let mostrarMensajePersonalizado

if (true) {
  mostrarMensajePersonalizado = function () {
    console.log('Hola')
  }
} else {
  mostrarMensajePersonalizado = function () {
    console.log('Adiós')
  }
}

mostrarMensajePersonalizado()

// En la mayoría de los casos, cuando necesitamos declarar una función, es preferible una Declaración de Función, ya que es visible antes de la declaración misma. Eso nos da más flexibilidad en la organización del código, y generalmente es más legible.
// Por lo tanto, deberíamos usar una Expresión de Función solo cuando una Declaración de Función no sea adecuada para la tarea.

/* I) Funciones Flecha */

// Hay otra sintaxis muy simple y concisa para crear funciones, que a menudo es mejor que las Expresiones de funciones.
// Se llama “funciones de flecha”, porque se ve así: (parametros) => código

// Veamos un ejemplo concreto:
const sum = (a, b) => a + b

console.log(sum(1, 2))
console.log(sum(5, 10))

// Si solo tenemos un argumento, se pueden omitir paréntesis alrededor de los parámetros, lo que lo hace aún más corto.
const saludoNuevo = nombre => 'Hola ' + nombre

console.log(saludoNuevo('Juan'))

// Si no hay parámetros, los paréntesis estarán vacíos (pero deben estar presentes)
const helloWorld = () => 'Hola mundo'

console.log(helloWorld())

// Las funciones de flecha se pueden usar de la misma manera que las expresiones de función.
// Por ejemplo, para crear dinámicamente una función:
const edad = 18

const validarEdad = edad >= 18 ? () => 'Es mayor de edad' : () => 'Es menor de edad'

console.log(validarEdad())

// A veces necesitamos algo un poco más complejo, como múltiples expresiones o declaraciones. También es posible: en ese caso debemos encerrarlos entre llaves y luego usar un return normal dentro de ellas.
const validarEdad2 = edad => {
  if (edad >= 18) {
    return 'Es mayor de edad'
  } else {
    return 'Es menor de edad'
  }
}

console.log(validarEdad2(18))

// Las funciones de flecha son útiles para líneas simples. Vienen en dos variantes:
//  - Sin llaves: (...args) => expression – el lado derecho es una expresión: la función lo evalúa y devuelve el resultado.
//  - Con llaves: (...args) => { body } – los paréntesis nos permiten escribir varias declaraciones dentro de la función, pero necesitamos un return explícito para devolver algo.

// Ejemplo de una función anónima auto-invocada con una función de flecha:
const otroTexto = 'Terminamos con las funciones de flecha';

(() => {
  console.log(otroTexto)
})()

// Recuerda usar ; (punto y coma) cuando la siguiente línea de código empieza con (), [], {} o “”.
