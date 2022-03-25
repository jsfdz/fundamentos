/* Operadores en JavaScript */

// A) Operadores básicos, matemáticas
// Conocemos varios operadores matemáticos porque nos los enseñaron en la escuela. Son cosas como la suma +, multiplicación *, resta -, etcétera.

// Antes de nada, veamos unos términos como: “unario”, “binario”, “operando”, “operador”, “operación” y "expresión".

// operando es un número o una variable.
// operador es un signo de operación (suma, resta, multiplicación, división, etcétera).
// unario: operador operando
// binario: operando operador operando
// operación es una combinación de un operando y un operador.
// expresión es una operación que se puede evaluar.

// Un operando – es a lo que se aplican los operadores.
console.log(5 * 2) // hay dos operandos: el operando izquierdo es 5 y el operando derecho es 2.

// Un operador es unario si tiene un solo operando. Por ejemplo, la negación unaria - invierte el signo de un número:
console.log(-5)

// Un operador es binario si tiene dos operandos. El mismo negativo también existe en forma binaria:
console.log(5 - 5)

// Formalmente, estamos hablando de dos operadores distintos: la negación unaria (un operando: revierte el símbolo) y la resta binaria (dos operandos: resta).

/* Matemáticas */
// Están soportadas las siguientes operaciones:

// Suma +
console.log(5 + 5)
// Resta -
console.log(5 - 5)
// Multiplicación *
console.log(5 * 5)
// División /
console.log(5 / 5)

// Los primeros cuatro son conocidos mientras que % y ** deben ser explicados más ampliamente.

// Resto %
// El operador resto %, a pesar de su apariencia, no está relacionado con porcentajes.
console.log(5 % 5)
// El resultado de a % b es el resto de la división entera de a por b.

// Exponenciación ** (potencia)
// El operador exponenciación a ** b eleva a a la potencia de b.
// En matemáticas de la escuela, lo escribimos como x².
console.log(2 ** 2)

// que seria lo mismo que:
console.log(2 * 2) // 4 (2 ** 2)
console.log(2 * 2 * 2) // 8 (2 ** 3)
console.log(2 * 2 * 2 * 2) // 16 (2 ** 4)

/* Concatenación de cadenas con el binario + */
// Ahora veamos características especiales de JavaScript que van más allá de las aritméticas escolares.

// Normalmente el operador + suma números.
console.log(2 + 3)

// Pero si se aplica el + binario a una cadena, los une (concatena):
console.log('Hola' + ' ' + 'Mundo')

// Tenga presente que si uno de los operandos es una cadena, el otro es convertido a una cadena también.
console.log('Hola' + 5)
console.log(5 + 'Hola')
// no importa si el primer operando es una cadena o el segundo.

// Ejemplos mas complejos:
console.log(2 + 2 + '1') // esto nos da '41' y no '221'
//  los operadores trabajan uno después de otro:
// 1) el primer + suma dos números entonces devuelve 4
// 2) luego el siguiente + le agrega la cadena 1
// así que se evalúa como 4 + '1' = 41.

console.log('1' + 2 + 2) // esto nos da '122' y no '14'
// 1) el primer operando es una cadena
// el compilador trata los otros dos operandos como cadenas también.
// 2) el 2 es concatenado a '1'
// entonces es como '1' + 2 = "12" y "12" + 2 = "122".

// El binario + es el único operador que soporta cadenas en esa forma. Otros operadores matemáticos trabajan solamente con números y siempre convierten sus operandos a números.

/* Conversión numérica, unario + */
// La suma + existe en dos formas: la forma binaria que utilizamos arriba y la forma unaria.

// El unario suma o, en otras palabras, el operador suma + aplicado a un solo valor, no hace nada a los números. Pero si el operando no es un número, el unario suma lo convierte en un número.

// Aquí está el ejemplo de la conversión unaria:
console.log(+true)
console.log(+'')
// Realmente hace lo mismo que Number(...), pero es más corto.

// La necesidad de convertir cadenas en números surge con mucha frecuencia. Por ejemplo, si estamos obteniendo valores de campos de formulario HTML, generalmente son cadenas.

const inputUno = '1'
const inputDos = '2'

// El operador binario suma los agregaría como cadenas:
console.log(inputUno + inputDos)

// Si queremos tratarlos como números, necesitamos convertirlos y luego sumarlos.
// El operador unario suma los convierte a números:
console.log(+inputUno + +inputDos)

// no hay nada especial: primero se aplican los signos más unarios que convierten las cadenas en números, y luego el signo más binario los suma.
// y eso se debe a su mayor precedencia.

// Si una expresión tiene más de un operador, el orden de ejecución se define por su precedencia o, en otras palabras, el orden de prioridad predeterminado de los operadores.

// Desde la escuela, todos sabemos que la multiplicación en la expresión 1 + 2 * 2 debe calcularse antes de la suma. Eso es exactamente la precedencia. Se dice que la multiplicación tiene una mayor precedencia que la suma.

// Los paréntesis anulan cualquier precedencia, por lo que si no estamos satisfechos con el orden predeterminado, podemos usarlos para cambiarlo. Por ejemplo:
console.log((1 + 2) * 2)

// Hay muchos operadores en JavaScript. Cada operador tiene un número de precedencia correspondiente. El que tiene el número más grande se ejecuta primero. Si la precedencia es la misma, el orden de ejecución es de izquierda a derecha.

// Más información sobre precedencia en: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operator_Precedence

/* Asignación */
// Tengamos en cuenta que una asignación = también es un operador. Está listado en la tabla de precedencia con la prioridad muy baja de 2.

const x = 2 * 2 + 1
console.log(x)

// Es por eso que, cuando asignamos una variable, como x = 2 * 2 + 1, los cálculos se realizan primero y luego se evalúa el =, almacenando el resultado en x.

//  una asignación como parte de una expresión más compleja:
let a = 1
const b = 2

const c = 3 - (a = b + 1)

console.log(c)
console.log(a)

// el resultado de la expresión (a = b + 1) es el valor asignado a a (es decir, 3). Luego se usa para evaluaciones adicionales.

// Otra característica interesante es la habilidad para encadenar asignaciones:
let d, e, f

d = e = f = 2 + 2

console.log(d)
console.log(e)
console.log(f)

// Las asignaciones encadenadas evalúan de derecha a izquierda. Primero, se evalúa la expresión más a la derecha 2 + 2 y luego se asigna a las variables de la izquierda: c, b y a. Al final, todas las variables comparten un solo valor.

// con el propósito de la legibilidad es mejor separa tal código en unas pocas líneas:
f = 2 + 2
e = f
d = e

/* Modificar en el lugar */
// A menudo necesitamos aplicar un operador a una variable y guardar el nuevo resultado en esa misma variable.
let n = 2
n = n + 5
n = n * 2

console.log(n)

// Esta notación puede ser acortada utilizando los operadores += y *=:
let num = 2
num += 5 // ahora n = 7 (lo mismo que n = n + 5)
num *= 2 // ahora n = 14 (lo mismo que n = n * 2)

console.log(num)

// Los operadores cortos “modifica y asigna” existen para todos los operadores aritméticos: /=, -=, etcétera.
// Tales operadores tienen la misma precedencia que la asignación normal, por lo tanto se ejecutan después de otros cálculos.

// Incremento/decremento

// Aumentar o disminuir un número en uno es una de las operaciones numéricas más comunes.
// Entonces, hay operadores especiales para ello:

// Incremento ++ incrementa una variable por 1:
let incremento = 0
incremento++
console.log(incremento)
// Decremento -- decrementa una variable por 1:
let decremento = 0
decremento--
console.log(decremento)

// Importante - Incremento/decremento sólo puede ser aplicado a variables. Intentar utilizarlo en un valor como 5++ dará un error.

// Los operadores ++ y -- pueden ser colocados antes o después de una variable.
//  - Cuando el operador va después de la variable, está en “forma de sufijo”: incremento++.
//  - La “forma de prefijo” es cuando el operador va antes de la variable: ++incremento.

// Ambas sentencias hacen la misma cosa: aumentar por 1.
// ¿Existe alguna diferencia? Sí, pero solamente la podemos ver si utilizamos el valor devuelto de ++/--.

// todos los operadores devuelven un valor. Incremento/decremento no es una excepción. La forma prefijo devuelve el nuevo valor mientras que la forma sufijo devuelve el valor anterior (antes del incremento/decremento).

// Ejemplo:
let aumento = 1

// Prefijo
const prefijo = ++aumento
console.log(prefijo)
// la forma prefijo ++aumento incrementa aumento y devuelve el nuevo valor (después de incrementar). Por lo tanto, muestra 2.

// Sufijo
const sufijo = aumento++
console.log(sufijo)
// la forma sufijo aumento++ también incrementa aumento pero devuelve el antiguo valor (antes de incrementar). Por lo tanto, muestra 1.

// En otras palabras:
// Si no se usa el resultado del incremento/decremento, no hay diferencia en la forma de usar:
console.log(aumento)

// Si queremos aumentar un valor y usar inmediatamente el resultado del operador, necesitamos la forma de prefijo:
console.log(++aumento)

// Si queremos incrementar un valor pero usamos su valor anterior, necesitamos la forma sufijo:
console.log(aumento++)

// También pueden ser usados dentro de expresiones. Su precedencia es más alta que la mayoría de los otros operadores aritméticos.
console.log(2 * ++aumento)

/* El operador coma */
// es uno de los operadores más raros e inusuales. A veces, es utilizado para escribir código más corto, entonces tenemos que saberlo para poder entender qué está pasando.

// nos permite evaluar varias expresiones, dividiéndolas con una coma ,. Cada una de ellas es evaluada pero sólo el resultado de la última es devuelto.

const expresiones = (1 + 2, 3 + 4)
console.log(expresiones)
// se evalúa la primera expresión 1 + 2 y se desecha su resultado. Luego, se evalúa 3 + 4 y se devuelve como resultado.
// Tenga en cuenta que el operador coma tiene una precedencia muy baja, inferior a =, por lo que los paréntesis son importantes en el ejemplo anterior.

// B) operadores de comparación

// Conocemos muchos operadores de comparación de las matemáticas:
// En Javascript se escriben así:
// Mayor/menor que: a > b, a < b.
// Mayor/menor o igual que: a >= b, a <= b.
// Igual: a == b (ten en cuenta que el doble signo == significa comparación, mientras que un solo símbolo a = b significaría una asignación).
// Distinto. En matemáticas la notación es ≠, pero en JavaScript se escribe como una asignación con un signo de exclamación delante: a != b.

// Como todos los demás operadores, una comparación retorna un valor. En este caso, el valor es un booleano.

// true – significa “sí”, “correcto” o “verdad”.
// false – significa “no”, “equivocado” o " no verdad".
// Por ejemplo:
// console.log(1 > 2)
// console.log(1 < 2)
// console.log(1 >= 2)
// console.log(1 <= 2)
// console.log(1 == 2)
// console.log(1 != 2)

// El resultado de una comparación puede asignarse a una variable, igual que cualquier valor:
const resultado = 1 > 2
console.log(resultado)

/* Comparación de cadenas */
// Para ver si una cadena es “mayor” que otra, JavaScript utiliza el llamado orden “de diccionario” o “lexicográfico”.
// En otras palabras, las cadenas se comparan letra por letra.

console.log('a' > 'z')
// En este caso, la letra “a” es menor que la letra “z”, por lo que el resultado es false.

console.log('a' > 'Z')
// En este caso, la letra “a” es mayor que la letra “Z”, por lo que el resultado es true.

console.log('Tierra' > 'Tierna')
// En este caso, la cadena “Tierra” es mayor que la cadena “Tierna”, por lo que el resultado es true.

// El algoritmo para comparar dos cadenas es simple:
//  - Compare el primer carácter de ambas cadenas.
//  - Si el primer carácter de la primera cadena es mayor o menor que el de la otra cadena o viceversa. Hemos terminado.
//  - De lo contrario, si los primeros caracteres de ambas cadenas son los mismos, compare los segundos caracteres de la misma manera.
//  - Repita hasta el final de cada cadena.
//  - Si ambas cadenas tienen la misma longitud, entonces son iguales. De lo contrario, la cadena más larga es mayor.

// entonces la comparacion de cadenas entre "tierra" y "tierna" necesitan más pasos, se comparan carácter por carácter:
// T es igual que T.
// i es igual que i.
// e es igual que e.
// r es igual que r.
// r es mayor que n. Detente aquí. La primera cadena es mayor.

// No es un diccionario real, sino un orden Unicode
// Por ejemplo, las mayúsculas importan. Una letra mayúscula "A" no es igual a la minúscula "a". ¿Cuál es mayor? La "a" minúscula. ¿Por qué? Porque el carácter en minúsculas tiene un mayor índice en la tabla de codificación interna que utiliza JavaScript (Unicode).

// Para entender qué pasa, les dejo unos enlaces:

// Más información sobre el orden de diccionario en: https://es.wikipedia.org/wiki/Orden_de_diccionario
// Más información sobre UTF-16 (codificación internacional) en: https://es.wikipedia.org/wiki/UTF-16
// Más información sobre Unicode en: https://es.wikipedia.org/wiki/Unicode
// Más información sobre formas de normalización Unicode en: https://es.wikipedia.org/wiki/Normalizaci%C3%B3n_Unicode

/* Comparación de diferentes tipos */

// Al comparar valores de diferentes tipos, JavaScript convierte los valores a números.
console.log('2' > 1) // la cadena '2' se convierte en el número 2
console.log('01' == 1) // la cadena '01' se convierte en el número 1

// Para valores booleanos, true se convierte en 1 y false en 0.
// Por ejemplo:

console.log(true == 1)
console.log(false == 0)

// Algo Gracioso:
const cero = 0
const zero = '0'

console.log(Boolean(cero)) // el valor de cero es 0, por lo que el resultado es false
console.log(Boolean(zero)) // el valor de zero es '0', por lo que el resultado es true, siendo una cadena que no esta vacía.

console.log(cero == zero) // el resultado es true, porque ambos valores son 0, el strnig '0' se convierte en el número 0.

/* Igualdad estricta */

// Una comparación regular de igualdad == tiene un problema. No puede diferenciar 0 de `falso’:
console.log(0 == false)
// Lo mismo sucede con una cadena vacía:
console.log('' == false)

// Esto sucede porque los operandos de diferentes tipos son convertidos a números por el operador de igualdad ==. Una cadena vacía, al igual que false, se convierte en un cero.

// En JavaScript tenemos la comparación estricta de igualdad === que no tiene ese problema.
// Un operador de igualdad estricto === comprueba la igualdad sin conversión de tipo.
// En otras palabras, si 0 y false son de diferentes tipos, entonces 0 === false retorna inmediatamente false sin intentar convertirlos.
console.log(0 === false)
// ahora con una cadena vacía:
console.log('' === false)

// Una comparación estricta de igualdad === es más segura que una comparación regular de igualdad ==.
// Existe también un operador de “diferencia estricta” !== análogo a !=.

/* Comparación con nulos e indefinidos */

// Para un control de igualdad estricto ===
// Estos valores son diferentes, porque cada uno de ellos es de un tipo diferente.
console.log(undefined === null)

// Para una comparación no estricta ==
// Hay una regla especial son iguales entre sí (en el sentido de ==), pero no a ningún otro valor.
console.log(undefined == null)

// otras comparaciones < > <= >=
// null/undefined se convierten en números: null se convierte en 0, mientras que undefined se convierte en NaN.

/* Nulos */
// Resultado extraño: null vs 0

// Matemáticamente, eso es extraño. El último resultado afirma que "null es mayor o igual a cero", así que en una de las comparaciones anteriores debe ser true, pero ambas son falsas.
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
// las comparaciones > < >= <= convierten a null en un número, tratándolo como 0. Es por eso que null >= 0 es verdadero y null > 0 es falso.
// el control de igualdad == para undefined y null se define de tal manera que, sin ninguna conversión, son iguales entre sí y no son iguales a nada más retorna false. Es por eso que null == 0 es falso.

/* indefinidos */
// El valor undefined no debe compararse con otros valores:

console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)

// Obtenemos estos resultados porque:
// Las comparaciones < > <= >= retornan falso porque no definido se convierte en NaN y NaN es un valor numérico especial que retorna falso para todas las comparaciones.
// La comparación de igualdad retorna falso porque undefined sólo equivale a null y a ningún otro valor.

// C) Operadores Lógicos

// Hay cuatro operadores lógicos en JavaScript:

// || (O)
// && (Y)
// ! (NO)
// ?? (Fusión de nulos)

// Aunque sean llamados lógicos, pueden ser aplicados a valores de cualquier tipo, no solo booleanos.
// El resultado también puede ser de cualquier tipo.

/* || (OR) */
// El operador OR se representa con dos símbolos de linea vertical: a || b
// Hay cuatro combinaciones lógicas posibles:

console.log(true || true) // true (verdadero)
console.log(false || true) // true
console.log(true || false) // true
console.log(false || false) // false (falso)

// Como podemos ver, el resultado es siempre true excepto cuando ambos operandos son false.
// Si un operando no es un booleano, se lo convierte a booleano para la evaluación.
// Por ejemplo, el número 1 es tratado como true, el número 0 como false:
console.log(1 || 0) // 1

/* ==== OR "||" encuentra el primer valor verdadero ==== */

// Dado múltiples valores aplicados al operador OR: result = value1 || value2 || value3;
// El algoritmo extendido trabaja de la siguiente forma.
// El operador OR || realiza lo siguiente:
//  - Evalúa los operandos de izquierda a derecha.
//  - Para cada operando, convierte el valor a booleano. Si el resultado es true, se detiene y retorna el valor original de ese operando.
//  - Si todos los operandos han sido evaluados (todos eran false), retorna el ultimo operando.
// Un valor es retornado en su forma original, sin la conversión.

// *** OR "||" devuelve el primer valor verdadero o el último si ningún verdadero es encontrado.

console.log(1 || 0) // 1 es un valor verdadero
console.log(null || 1) // 1 es el primer valor verdadero
console.log(null || 0 || 1) // el primer valor verdadero
console.log(undefined || null || 0) // todos son valores falsos, retorna el último valor

// A) Obtener el primer valor verdadero de una lista de variables o expresiones.

// otro ejemplo, tenemos las variables nombre, apellido y nombreDeUsuario, todas opcionales (pueden ser undefined o tener valores falsos).
// Usemos OR || para elegir el que tiene los datos y mostrarlo (o anónimo si no hay nada configurado):
const nombre = ''
const apellido = ''
const nombreDeUsuario = 'jsfdz'

console.log(nombre || apellido || nombreDeUsuario || 'Anónimo') // Si todas las variables fueran falsas, aparecería "Anónimo".

// B) Evaluación del camino más corto.
// significa que || procesa sus argumentos hasta que se alcanza el primer valor verdadero, y luego el valor se devuelve inmediatamente, sin siquiera tocar el otro argumento.

console.log(true || 'no es mostrado') // se detiene la evaluación inmediatamente después de ver que es verdadera
console.log(false || 'se muestra el contenido del string') // se muestra el contenido del string

// las personas usan esta función para ejecutar comandos solo si la condición en la parte izquierda es falsa.

/* && (AND) */
// El operador AND es representado con dos ampersands &&: a && b
// AND retorna true si ambos operandos son valores verdaderos y false en cualquier otro caso.

console.log(true && true) // true
console.log(false && true) // false
console.log(true && false) // false
console.log(false && false) // false

// Por ejemplo:
const hora = 12
const minuto = 30

console.log(hora == 12 && minuto == 30)

// Al igual que con OR, cualquier valor es permitido como operando de AND:
console.log(null && true) // null
console.log(undefined && true) // undefined
console.log(1 && 0) // false

/* ==== AND “&&” encuentra el primer valor falso ==== */

// Dado múltiples valores aplicados al operador AND: result = value1 && value2 && value3;
// El operador AND && realiza lo siguiente:
//  - Evalúa los operandos de izquierda a derecha.
//  - Para cada operando, los convierte a un booleano. Si el resultado es false, se detiene y retorna el valor original de dicho operando.
//  - Si todos los operandos han sido evaluados (todos fueron valores verdaderos), retorna el último operando.
// Las reglas anteriores son similares a las de OR. La diferencia es que AND retorna el primer valor falso mientras que OR retorna el primer valor verdadero.

// *** AND retorna el primer valor falso o el último valor si ninguno fue encontrado.

// si el primer operando es un valor verdadero,
// AND retorna el segundo operando:
console.log(1 && 0) // 0
console.log(1 && 5) // 5

// si el primer operando es un valor falso,
// AND lo retorna. El segundo operando es ignorado
console.log(null && 5) // null
console.log(0 && 'cualquier valor') // 0

// puede ser usado para evaluar múltiples condiciones
// AND retorna siempre el primer valor falso:
console.log(1 && 2 && null && 3) // null

// Cuando todos los valores son verdaderos, el último valor es retornado:
console.log(1 && 2 && 3 && 4 && 5) // 5

/* Importante */
// La precedencia del operador AND && es mayor que la de OR ||.

console.log(1 && 2 || 3 && 4) // 2

// Así que el código 1 && 2 || 3 && 4 es básicamente el mismo que si la expresiones && estuvieran entre paréntesis: (1 && 2) || (3 && 4) y es equivalente a:
// 2 || 4 dando como resultado el primer operando verdadero: 2

// Recordemos:
// AND retorna el primer valor falso o el último valor si ninguno fue encontrado.
// OR retorna el primer valor verdadero o el último valor si ninguno fue encontrado.

/* ! (NOT) */
// El operador booleano NOT se representa con un signo de exclamación !: result = !value;

// El operador acepta un solo argumento y realiza lo siguiente:
//  - Convierte el operando al tipo booleano: true/false.
//  - Retorna el valor contrario.

console.log(!true) // false
console.log(!0) // true

// Un doble NOT !! es a veces usado para convertir un valor al tipo booleano:

console.log(!!'cadena de texto no vacía') // true
console.log(!!null) // false

// El primer NOT convierte el valor a booleano y retorna el inverso, y el segundo NOT lo invierte de nuevo.
// Al final, tenemos una simple conversión a booleano.

// *** La precedencia de NOT ! es la mayor de todos los operadores lógicos, así que siempre se ejecuta primero, antes que && o ||.

/* ?? (NULL-COALESCING) */
// El operador NULL-COALESCING se escribe con un doble signo de cierre de interrogación: result = value1 ?? value2
// Como este trata a null y a undefined de forma similar, usaremos un término particular para ello, diremos que una expresión es definida cuando no es null ni undefined.

// El resultado de a ?? b:
//  - si a está “definida”, será a,
//  - si a no está “definida”, será b.
// Es decir, ?? devuelve el primer argumento cuando este no es null ni undefined. En caso contrario, devuelve el segundo.
// Es solamente una sintaxis agradable para obtener el primer valor “definido” de entre dos.

// Un uso típico de ?? es brindar un valor predeterminado a una variable potencialmente indefinida.
// Por ejemplo, aquí mostramos usuario si está definido. Si no, usuario será “Anónimo”:
let usuario
console.log(usuario ?? 'Anónimo') // Anónimo

// Aquí el ejemplo de usuario con un nombre asignado:
usuario = 'Juan'
console.log(usuario ?? 'Anónimo') // Juan

// Veamos el mismo ejemplo que usamos antes con el OR, pero con un valor predeterminado null:
const primerNombre = null
const primerApellido = null
const nombreUsuario = 'jsfdz'

// Muestra el primer valor definido:
console.log(primerNombre ?? primerApellido ?? nombreUsuario ?? 'Anónimo') // jsfdz

// Con el operador OR, el primer valor definido es el primer valor que no es null:
console.log(primerNombre || primerApellido || nombreUsuario || 'Anónimo') // jsfdz

// Históricamente, el operador OR || estuvo primero. Existe desde el origen de JavaScript, así que los desarrolladores lo estuvieron usando para tal propósito durante mucho tiempo.
// Por otro lado, el operador “nullish coalescing” ?? fue una adición reciente, y la razón es que la gente no estaba del todo satisfecha con ||.
// La gran diferencia es que:
//  - || devuelve el primer valor verdadero.
//  - ?? devuelve el primer valor definido.

// El || no distingue entre false, 0, un string vacío "", y null/undefined. Todos son lo mismo: valores “falsos”. Si cualquiera de ellos es el primer argumento de ||, obtendremos el segundo argumento como resultado.
// Pero en la práctica podemos querer usar el valor predeterminado solamente cuando la variable es null/undefined, es decir cuando el valor realmente es desconocido o no fue establecido.

// Un ejemplo para dejar esto claro:
const altura = 0

// 1) verifica si altura es “falso”, y 0 lo es, así el resultado de || es el segundo argumento, 100.
console.log(altura || 100) // 100

// 2) verifica si altura es null/undefined, y no lo es, así el resultado es su valor real, 0.
console.log(altura ?? 100) // 0

// En la práctica, una altura cero es a menudo un valor válido que no debería ser reemplazado por un valor por defecto. En este caso ?? hace lo correcto.

// La precedencia del operador ?? es la misma de ||.
// Ambos operadores, || y ??, son evaluados antes que = y ?, pero después de la mayoría de las demás operaciones como + y *.
// Si necesitas usar ?? en una expresión compleja, considera añadir paréntesis:
const h = null
const w = null

const area = (h ?? 5) * (w ?? 5)
console.log(area) // 200
// si omitimos los paréntesis, entonces * tiene una mayor precedencia y se ejecutará primero y el resultado será probablemente no lo que queremos.

/* Importante */
// Por motivos de seguridad, JavaScript prohíbe el uso de ?? junto con los operadores && y ||, salvo que la precedencia sea explícitamente especificada con paréntesis.
// La limitación es debatible. Fue agregada a la especificación del lenguaje con propósito de evitar equivocaciones cuando la gente comenzara a reemplazar || por ??.

// const incorrecto = 1 && 2 ?? 3 // error de sintaxis

const correcto = (1 && 2) ?? 3
console.log(correcto)
// AND retorna el primer valor falso o el último valor si ninguno fue encontrado.

// Recuerda:
// El operador ?? tiene una precedencia muy baja, un poco más alta que ? y =.
// Está prohibido su uso con || y && sin paréntesis explícitos.
