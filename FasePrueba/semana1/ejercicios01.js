/* Ejercicios con variables */

/*
1. Declarar dos variables: nombre y usuario
2. Asignar tu nombre a la variable nombre
3. Copia el valor de nombre a la variable usuario
4. sin usar la consola responde ¿Qué valor tiene la variable usuario?
/*

/*
¿Cómo nombrarías a dicha variable? * en ingles
1. Crea una variable con el nombre de nuestro planeta.
2. Crea una variable para almacenar el nombre del usuario actual de un sitio web.
*/

/* ========================================================================================= */

/* Ejercicios tipo de datos */

// Colocar el resultado después de cada //
const nombre = 'JS'

console.log(`Hola ${1}`) // ?
console.log(`Hola ${'nombre'}`) // ?
console.log(`Hola ${nombre}`) // ?

console.log('a' / 2) // ?
console.log(3 + '2') // ?

console.log(typeof '25') // ?
console.log(typeof null) // ?

// Métodos para strings

// (1) Dada una frase y una palabra, indicar si la palabra se encuentra en la frase debería devolver true si se encuentra, false en caso contrario.
const frase = 'Transforma tus heridas en sabiduría'
const palabra = 'sabiduría'

// (2) Obtener la longitud de la última palabra de una frase

// (3) Reemplazar la última palabra de la frase por la palabra Academlo

// (4) Obtener la última palabra de la frase

// (5) Verificar si el siguiente email termina en @academlo.com, si es así devolver true, si no false.
const correoElectronico = 'fernando@academlo.com'

// (6) Obtener el nombre de la persona de un correo electrónico
const correo = 'david@gmail.com'

// (7) Invertir el orden de las palabras de una frase

/* ========================================================================================= */

/* Ejercicios con Operadores */
// sufijo y prefijo
// ¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?

let a = 1; let b = 1

const c = ++a // ?
const d = b++ // ?

// ¿Cuáles son los valores de ‘x’ y ‘y’ después del código a continuación?

let x = 2

const y = 1 + (x *= 2)

x // ?
y // ?

// Cuáles son los resultados de las siguientes operaciones?
const diez = '10'
const ocho = '8'
const seis = '6'

2 + 3 + ocho // ?
seis + 5 + 1 // ?
diez + 2 + ocho // ?
ocho + diez + seis // ?

// Comparaciones

// ¿Cuál será el resultado de las siguientes expresiones?

// 5 > 4 // ?
// "apple" > "pineapple" // ?
// "2" > "12" // ?
// undefined == null // ?
// undefined === null
// null == "\n0\n" // ?
// null === +"\n0\n" // ?

/* ========================================================================================= */
/* Ejercicios con condicionales */

const temperatura = 16

// Reescribe el 'if' como '?'
let resultado
if (temperatura < 20) {
  resultado = 'Hace frio'
} else {
  resultado = 'Hace calor'
}

const login = 'Empleado'

// Reescriba el 'if..else' con '?'
let mensaje

if (login == 'Empleado') {
  mensaje = 'Hola'
} else if (login == 'Director') {
  mensaje = 'Felicidades'
} else if (login == '') {
  mensaje = 'Sin sesión'
} else {
  mensaje = ''
}

const navegador = 'Chrome'
// Reescribe el "switch" en un "if"
switch (navegador) {
  case 'Edge':
    console.log('¡Tienes Edge!')
    break

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    console.log('Esta bien, soportamos estos navegadores también')
    break

  default:
    console.log('¡Esperamos que esta página se vea bien!')
}

/* ========================================================================================= */
/* Ejercicios con bucles */
// Ejercicio con while
// Escribe un bucle 'while' que imprima los números del 20 al 80 en orden ascendente, incluyendo el 80.

// Ejercicio con do while
// Escribe un bucle 'do..while' que imprima los números del 50 al 0 en orden descendente, incluyendo el 0.

// Ejercicio con for
// Escribe un bucle 'for' que imprima los números pares del 0 al 40
