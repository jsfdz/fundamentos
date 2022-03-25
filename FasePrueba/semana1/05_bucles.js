/* Bucles: while y for */
// Usualmente necesitamos repetir acciones.
// Por ejemplo, mostrar los elementos de una lista uno tras otro o simplemente ejecutar el mismo código para cada número del 1 al 10.
// Los Bucles son una forma de repetir el mismo código varias veces.

/* A) El bucle “while” (mientras) */

/*
Sintaxis:
while (condición) {
  código
  llamado "cuerpo del bucle"
}
*/

// Mientras la condición sea verdadera, el código del cuerpo del bucle será ejecutado.
// Por ejemplo, mostrar los números del 1 al 10:
let num = 1

// Cualquier expresión o variable puede usarse como condición del bucle, no solo las comparaciones: El while evaluará y transformará la condición a un booleano.
while (num <= 10) {
  // Cada ejecución del cuerpo del bucle se llama iteración.
  console.log('Iteración', num)
  num++
}
// Si faltara num++ en el ejemplo de arriba, el bucle sería repetido (en teoría) infinitamente.
console.log(num)

// Ejemplo de while con -- (decremento):
let reversa = 10

// una manera más corta de escribir while (reversa != 0) es while (reversa):
// falsy: undefined, null, 0, false, NaN
while (reversa) {
  console.log(reversa)
  reversa--
}

/* B) El bucle “do…while” (hacer mientras) */

// El bucle “do…while” es una variante del bucle “while”
// Que se ejecuta al menos una vez.

/*
Sintaxis:
do {
  código
  llamado "cuerpo del bucle"
} while (condición)
*/

// Ejemplo: Mostrar los números del 1 al 10:
let num2 = 1

// El bucle primero ejecuta el cuerpo, luego comprueba la condición, y, mientras sea un valor verdadero, la ejecuta una y otra vez.
do {
  console.log(num2)
  num2++
} while (num2 <= 10)
// Esta sintaxis solo debe ser usada cuando quieres que el cuerpo del bucle sea ejecutado al menos una vez sin importar que la condición sea verdadera.

console.log(num2)

// Ejemplo de do…while con -- (decremento):
let reversa2 = 10

do {
  console.log(reversa2)
  reversa2--
} while (reversa2)
console.log(reversa2)

/* C) El bucle “for” (para) */
// El bucle for es más complejo, pero también el más usado.

/*
Sintaxis:
for (inicialización; condición; operación) {
  cuerpo del bucle
}
*/

// Aprendamos el significado de cada parte con un ejemplo.
// Ejemplo: Mostrar los números del 1 al 10:
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

// Vamos a examinar la declaración for parte por parte:
// 1. "let i = 0" Inicialización: Se ejecuta una vez al principio del bucle.
// 2. "i <= 10" Condición: Comprobada antes de cada iteración del bucle. Si es falsa, el bucle finaliza..
// 3. "console.log(i)" Código: Se ejecuta una y otra vez mientras la condición sea verdadera.
// 4. "i++" Operación: Se ejecuta después del cuerpo al final de cada iteración del bucle.

// El algoritmo general del bucle funciona de esta forma:
// Se ejecuta comenzar
// --> si Condición se cumple --> se ejecuta el cuerpo del bucle seguido de la operación
// --> si Condición se cumple --> se ejecuta el cuerpo del bucle seguido de la operación
// --> si Condición se cumple --> se ejecuta el cuerpo del bucle seguido de la operación
// ...

// Si eres nuevo en bucles, esto te podría ayudar a entender cómo se ejecuta el for paso por paso.
// Ejemplo con un if:
// se ejecuta comenzar
let i = 0
// si Condición se cumple --> se ejecuta el cuerpo del bucle seguido de la operación
if (i < 3) { console.log(i); i++ }
// si Condición se cumple --> se ejecuta el cuerpo del bucle seguido de la operación
if (i < 3) { console.log(i); i++ }
// si Condición se cumple --> se ejecuta el cuerpo del bucle seguido de la operación
if (i < 3) { console.log(i); i++ }
// ...finaliza, porque ahora i == 3
console.log(i)

// Esto es lo que sucede exactamente en nuestro caso:
// for (let i = 0; i < 3; i++) {
// i = 0
// i < 3 --> true
// i++ --> i = 1
// i < 3 --> true
// i++ --> i = 2
// i < 3 --> false
// termina el bucle.
// }

// Ejemplo for con -- (decremento):
for (let i = 10; i; i--) {
  console.log(i)
}

/* Rompiendo el bucle for con break */
// Normalmente, se sale de un bucle cuando la condición se vuelve falsa.
// Pero podemos forzar una salida en cualquier momento usando la directiva especial break.
// Ejemplo:
for (let i = 1; i < 10; i++) {
  console.log(i)
  if (i == 5) {
    break
  }
}
// En este ejemplo, el bucle se ejecuta hasta el 5, pero no se ejecuta el 6.

// Ejemplo con while:
let idx = 10
while (idx) {
  console.log(idx)
  if (idx == 5) {
    break
  }
  idx--
}

/* Continuar a la siguiente iteración usando la directiva continue */
// La directiva continue es una “versión más ligera” de break. No detiene el bucle completo. En su lugar, detiene la iteración actual y fuerza al bucle a comenzar una nueva (si la condición lo permite).

// Ejemplo: mostrar solo valores impares:
for (let i = 1; i < 10; i++) {
  if (i % 2 == 0) {
    continue
  }
  console.log(i)
}
// Para los valores pares de i, la directiva continue deja de ejecutar el cuerpo y pasa el control a la siguiente iteración de for (con el siguiente número). Así que el console.log(i) solo es llamado para valores impares.

/* for anidados */
// Ejemplo:
for (let i = 1; i <= 3; i++) {
  console.log('i:', i)
  for (let j = 1; j <= 3; j++) {
    console.log('i:', i, 'j:', j)
  }
}

// Resultado:
// i: 1
// i: 1 j: 1
// i: 1 j: 2
// i: 1 j: 3
// i: 2
// i: 2 j: 1
// i: 2 j: 2
// i: 2 j: 3
// i: 3
// i: 3 j: 1
// i: 3 j: 2
// i: 3 j: 3
// fin

/* Etiquetas para break/continue */
// Podemos usar etiquetas para forzar una salida de bucle anidado.
// Ejemplo:
// Una etiqueta es un identificador con un “:” antes de un bucle:
etiqueta: for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    if (j == 5) {
      break etiqueta
    }
    console.log('i:', i, 'j:', j)
  }
}

// Ejemplo sin etiqueta:
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    if (j == 5) {
      break
    }
    console.log('i:', i, 'j:', j)
  }
}
// El break ordinario solo nos sacaría del bucle interno, pero eso no es suficiente.
// La directiva continue también puede usar usada con una etiqueta. En este caso, la ejecución del código salta a la siguiente iteración del bucle etiquetado.

// Cubrimos 3 tipos de bucles:
//  - while – La condición es comprobada antes de cada iteración.
//  - do..while – La condición es comprobada después de cada iteración.
//  - for (...) – La condición es comprobada antes de cada iteración, con ajustes adicionales disponibles.
