/* Condicionales en javascript */

// Algunas veces, necesitamos ejecutar diferentes acciones basadas en diferentes condiciones.
// Para esto podemos usar la sentencia if.

/* A) Sentencia if */
// La sentencia if(...) evalúa la condición en los paréntesis, y si el resultado es true ejecuta un bloque de código.
// Por ejemplo:
const añoActual = new Date().getFullYear()

// Para mas información sobre el Objeto Date, visita la siguiente página: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date

if (añoActual === 2022) {
  console.log(`Correcto el año actual es: ${añoActual}`)
}

// La sentencia if (…) evalúa la expresión dentro de sus paréntesis y convierte el resultado en booleano.
// Recordemos las reglas de conversión:
//  - El número 0, un string vacío "", null, undefined, y NaN se convierte en false. Por esto son llamados valores “falso”.
//  - El resto de los valores se convierten en true, entonces los llamaremos valores “verdadero”.

// Podemos pasar una expresión como condición, por ejemplo:
if (añoActual > 2021) {
  console.log(`${añoActual} es mayor que 2021`)
}

// o podemos almacenar la operación en una variable y pasarla como condición:
const operacion = añoActual < 2023

if (operacion) {
  console.log(`${añoActual} es menor que 2023`)
}

/* B) La cláusula “else” */
// La sentencia if quizás contenga un bloque “else” opcional. Este se ejecutará cuando la condición sea falsa.
if (añoActual === 2021) {
  console.log(`${añoActual} es igual a 2021`)
} else {
  console.log(`${añoActual} es diferente a 2021`)
}

/* C) La cláusula “else if” (muchas condiciones) */
// Algunas veces, queremos probar variantes de una condición. La clausula else if nos permite hacer esto.
if (añoActual === 2021) {
  console.log(`${añoActual} es igual a 2021`)
} else if (añoActual === 2022) {
  console.log(`${añoActual} es igual a 2022`)
} else {
  console.log(`${añoActual} es diferente a 2021 y 2022`)
}

// JavaScript primero revisa si añoActual === 2021. Si esto es falso, continúa a la siguiente condición añoActual === 2022. En este caso entra el bloque del else if porque añoActual === 2022, si esta también hubiera dado falso, mostrará la última, es decir, el bloque del else.
// Podría haber más bloques else if. Y el último else es opcional.

/* D) Operador ternario ? */
// A veces necesitamos asignar una variable dependiendo de alguna condición.
const isTrue = true
let resultado

if (isTrue) {
  resultado = 'Si'
} else {
  resultado = 'No'
}
console.log(resultado)

// El operador ternario es una forma de escribir una condición en una sola línea.
const resultadoCorto = (isTrue) ? 'Si' : 'No'
console.log(resultadoCorto)

// El operador está representado por un signo de interrogación de cierre ?. A veces es llamado “ternario” porque el operador tiene tres operandos. Es el único operador de JavaScript que tiene esta cantidad de ellos.

// La Sintaxis es: (condición) ? expresión1 : expresión2
// se evalúa la condición y si es true, se ejecuta la expresión1, si no, se ejecuta la expresión2.

const mostrarMensaje = (añoActual < 2023) ? 'Es menor' : 'Es mayor'
// Técnicamente, podemos omitir el paréntesis alrededor de añoActual < 2023. El operador de signo de interrogación tiene una precedencia baja, por lo que se ejecuta después de la comparación <.

console.log(mostrarMensaje)

// En el ejemplo de arriba, podrías evitar utilizar el operador de signo de interrogación porque esta comparación devuelve directamente true/false: const mostrarMensaje = (añoActual < 2023)

// Múltiples ‘?’ (else if)
// Una secuencia de operadores de signos de interrogación ? puede devolver un valor que depende de más de una condición.
// Por ejemplo:
// const mostrarMensaje2 = (añoActual < 2023) ? 'Es menor' :
//                         (añoActual === 2023) ? 'Es igual' :
//                         'Es mayor'

// console.log(mostrarMensaje2)

// Un ejmeplo más complejo:
// const edad = 120

// const tuEres = edad <= 3 ? 'Es un bebé' :
//                edad <= 12 ? 'Es un niño' :
//                edad <= 18 ? 'Es un adolescente' :
//                edad <= 65 ? 'Es un adulto' :
//                edad <= 100 ? 'Es un adulto mayor' :
//                'Esa edad es inusual'

// console.log(tuEres)

// Puede ser difícil al principio comprender lo que está sucediendo. Pero después de una mirada más cercana, podemos ver que es solo una secuencia ordinaria de condiciones.

// A veces el signo de interrogación cerrado ? se utiliza para reemplazar if, cuando no asignamos el resultado de una variable. En vez de esto, ejecutamos diferentes códigos dependiendo de la condición. No se recomienda el uso del operador de signo de interrogación de esta forma.
// El propósito del operador de signo de interrogación ? es para devolver un valor u otro dependiendo de su condición. Por favor utilízala para exactamente esto. Utiliza la sentencia if cuando necesites ejecutar código en ramas distintas.

/* E) La sentencia "switch" */
// La sentencia switch es una forma de evaluar una condición y ejecutar una secuencia de instrucciones dependiendo de la condición.
// Provee una mejor manera de comparar un valor con múltiples variantes.
// Ejemplo:
const dia = 'Martes'
let diaActual

switch (dia) {
  case 'Lunes':
    diaActual = 'Es Lunes'
    break
  case 'Martes':
    diaActual = 'Es Martes'
    break
  case 'Miércoles':
    diaActual = 'Es Miércoles'
    break
  case 'Jueves':
    diaActual = 'Es Jueves'
    break
  case 'Viernes':
    diaActual = 'Es Viernes'
    break
  case 'Sábado':
    diaActual = 'Es Sábado'
    break
  case 'Domingo':
    diaActual = 'Es Domingo'
    break
  default:
    diaActual = 'No es un día de la semana'
}

console.log(diaActual)

// Aquí el switch inicia comparando día con la primera variante case que es 'Lunes'. La comparación falla.
// Luego 'Martes'. La comparación es exitosa, por tanto la ejecución empieza desde case 'Martes' hasta el break más cercano.

// Si no existe break entonces la ejecución continúa con el próximo case sin ninguna revisión, a esto sele conoce como Agrupamiento de “case”.

/* Agrupamiento de “case” */
// La habilidad para “agrupar” cases es un efecto secundario de como trabaja switch/case sin break.
// Ejemplo agrupamiento de cases:
const cuantasPatasTieneLaAraña = 10
let respuesta

switch (cuantasPatasTieneLaAraña) {
  case 2:
    respuesta = 'Son muy poquitas patas'
    break
  case 6:
  case 8:
    respuesta = 'Es una araña de 6 u 8 patas'
    break
  case 10:
    respuesta = 'Es una araña mutante'
    break
  default:
    respuesta = 'No es una araña'
}

console.log(respuesta)

// Vamos a enfatizar que la comparación de igualdad es siempre estricta. Los valores deben ser del mismo tipo para coincidir.
