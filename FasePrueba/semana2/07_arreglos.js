/* Arreglos en javascript (arrays) */

// Los objetos te permiten almacenar colecciones de datos a través de nombres. Eso está bien.
// Pero a menudo necesitamos una colección ordenada, donde tenemos un 1ro, un 2do, un 3er elemento y así sucesivamente.
// Por ejemplo, necesitamos almacenar una lista de algo: usuarios, elementos HTML, etc.
// Existe una estructura llamada Array (llamada en español arreglo o matriz/vector) para almacenar colecciones de datos ordenadas, donde cada elemento tiene un índice.

// A) Declaración de un arreglo
// Podemos agregar elementos iniciales entre los corchetes:

const frutas = ['manzana', 'pera', 'uva', 'fresa']
// índices:         0         1      2       3
// Los elementos del array están numerados comenzando desde cero.

// B) Acceder a un elemento del arreglo
// Podemos obtener un elemento por su número entre corchetes:
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])

// C) Reemplazar un elemento del arreglo
// Podemos reemplazar un elemento:
frutas[0] = 'naranja'
console.log(frutas)

// D) Agregar un elemento
// Agregar uno nuevo al array:
frutas[4] = 'mandarina'
console.log(frutas)

// E) La propiedad length
// La propiedad length automáticamente se actualiza cuando se modifica el array.
// Es el total de elementos del array (su longitud), pero para ser precisos, no es el total de elementos sino el mayor índice más uno.
console.log(frutas.length)
// Otra cosa interesante acerca de la propiedad length es que se puede sobrescribir.
// Si la incrementamos manualmente, nada interesante ocurre. Pero si la decrementamos, el array se trunca. El proceso es irreversible, aquí el ejemplo:
frutas.length = 3
console.log(frutas)
console.log(frutas.length)

// Entonces la forma más simple de limpiar un array es:
frutas.length = 0
console.log(frutas)

// Un array puede almacenar elementos de cualquier tipo.
// Por ejemplo:
const vector = ['cadena', 123, true, null, undefined, {}, []]

console.log(vector[1])

// F) Arrays multidimensionales
// Los arrays pueden tener items que a su vez sean arrays.
// Podemos usarlos como arrays multidimensionales:
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(matriz[1][1])

// G) Métodos de Arrays

// Algunos conceptos básicos de los arrays:

// Cola (FIFO)
// Una cola es uno de los usos más comunes de un array.
// Una colección ordenada de elementos que soportan dos operaciones:
//  - push inserta un elemento al final.
//  - shift obtiene el elemento del principio, avanzando la cola, y así el segundo elemento se vuelve primero.
// Los arrays soportan ambas operaciones.
// Para las colas, esto es llamado principio FIFO (First-In-First-Out primera en entrar, primera en salir).

// Pila (LIFO)
// Hay otro caso de uso para los arrays – la estructura de datos llamada pila.
// Ella soporta dos operaciones:
//  - push agrega un elemento al final.
//  - pop toma un elemento desde el final.
// Entonces los elementos nuevos son agregados o tomados siempre desde el “final”.
// Para las pilas, esto es llamado principio LIFO (Last-In-First-Out, última en entrar primera en salir).

// Los arrays en JavaScript pueden trabajar como colas o pilas. Ellos permiten agregar/quitar elementos al/del principio o al/del final.

const nombres = ['Juan', 'Pedro', 'María', 'José']

// Métodos que trabajan sobre el final del array:
// pop - Extrae el último elemento del array y lo devuelve:
const ultimo = nombres.pop()
console.log(ultimo)
console.log(nombres)

// push - Agrega el elemento al final del array:
nombres.push('Ana')
console.log(nombres)

// Este método es igual a:
nombres[nombres.length] = 'Pablo'
console.log(nombres)

// Métodos que trabajan con el principio del array:
// shift - Extrae el primer elemento del array y lo devuelve:
const primero = nombres.shift()
console.log(primero)
console.log(nombres)

// unshift - Agrega el elemento al principio del array:
nombres.unshift('Luis')
console.log(nombres)

// Los métodos push y unshift pueden agregar múltiples elementos de una vez:
nombres.push('Juan', 'José')
console.log(nombres)

// Algunos métodos más:

// a) splice - Funciona como una navaja suiza para arrays. Puede hacer todo: insertar, remover y remplazar elementos.
// su sintaxis es: array.splice(posición, número de elementos a remover, elemento a insertar, ...)
nombres.splice(1, 2)
// Esto remueve los elementos del índice 1 (incluido) hasta el índice 2
console.log(nombres)

nombres.splice(0, 1, 'Pedro', 'María')
// Esto remueve el primer elemento, y agrega los dos elementos que se pasa como argumento.
console.log(nombres)

nombres.splice(3, 0, 'Carlos', 'Isabel')
// Esto inserta los elementos en el índice 3 (incluido), sin remover ninguno.
console.log(nombres)

// Los índices negativos están permitidos
nombres.splice(-1, 0, 'Luis')
console.log(nombres)

// b) slice - Es mucho más simple que arr.splice.
// su sintaxis es: array.slice(posición inicial, posición final)
// slice devuelve una copia del array desde la posición inicial hasta la posición final (no incluida).
const nuevoArreglo = nombres.slice(1, 3)
// Esto devuelve un array con los elementos del índice 1 (incluido) hasta el índice 3 (no incluido).
console.log(nuevoArreglo)

const copiaNombres = nombres.slice()
// Esto devuelve una copia del array completo.
console.log(copiaNombres)

// Los índices negativos también están permitidos, en cuyo caso se asume la posición desde el final del array.
const nuevoVector = copiaNombres.slice(-1)
// Esto devuelve un array con el último elemento del array original.
console.log(nuevoVector)

// c) concat - Es un método que crea un nuevo array que incluye los valores de otros arrays y elementos adicionales.
// su sintaxis es: array.concat(array1, array2, ...)
const matriz1 = [1, 2, 3]
const matriz2 = [4, 5, 6]
const unaSolaMatriz = matriz1.concat(matriz2)
// Esto devuelve un array con los elementos de ambos arrays.
console.log(unaSolaMatriz)

// Este acepta cualquier número de argumentos, tanto arrays como valores.
const nuevosElementos = unaSolaMatriz.concat(7, 8, 9)
// Esto devuelve un array con los elementos de ambos arrays y los nuevos elementos.
console.log(nuevosElementos)

// Buscar dentro de un array
// Ahora vamos a ver métodos que buscan elementos dentro de un array.

// Los métodos arr.indexOf, arr.lastIndexOf y arr.includes tienen la misma sintaxis y hacen básicamente lo mismo que sus contrapartes de strings, pero operan sobre elementos en lugar de caracteres

const colores = ['rojo', 'verde', 'azul', 'amarillo', 'verde', 'rojo', 'rojo', 'verde']

// a) indexOf - Devuelve la posición del elemento en el array, o -1 si no lo encuentra.
// su sintaxis es: array.indexOf(elemento, posición inicial)
// Tener en cuenta que el método usa comparación estricta (===).

// si no se pasa una posición inicial, se empieza desde el principio.
const posicionRojo = colores.indexOf('rojo')
// retorna la posición del primer elemento que encuentre.
console.log(posicionRojo)

const posicionVerde = colores.indexOf('verde', 2)
// retorna la posición del primer elemento que encuentre, empezando desde la posición 2.
console.log(posicionVerde)

// b) lastIndexOf - Devuelve la posición del último elemento en el array, o -1 si no lo encuentra.
// su sintaxis es: array.lastIndexOf(elemento, posición inicial)
// es exactamente igual que el método indexOf, pero busca de derecha a izquierda.

const posicionRojoUltimo = colores.lastIndexOf('rojo')
// retorna la posición del último elemento que encuentre.
console.log(posicionRojoUltimo)

const posicionVerdeUltimo = colores.lastIndexOf('verde', -2)
// retorna la posición del último elemento que encuentre, empezando desde la posición -2.
console.log(posicionVerdeUltimo)

// c) includes - Devuelve true si el elemento está en el array, o false si no lo está.
// su sintaxis es: array.includes(elemento, posición inicial)

// Si queremos comprobar si un elemento está incluido y no necesitamos saber su ubicación exacta, es preferible usar arr.includes.
const estaRojo = colores.includes('rojo')
// retorna true si el elemento está incluido en el array.
console.log(estaRojo)

const estaNegro = colores.includes('negro')
// retorna false si el elemento no está incluido en el array
console.log(estaNegro)

// Otros métodos útiles:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// reverse - El método arr.reverse revierte el orden de los elementos en arr.
// su sintaxis es: array.reverse()
const numerosInvertidos = numeros.reverse()
// devuelve el array después de revertir el orden
console.log(numerosInvertidos)

// en realidad no devuelve nada, sino que modifica el array original.
console.log(numeros)

// split - El método arr.split separa un string en elementos según el delimitante (separador) dado y los devuelve como un array.
// su sintaxis es: array.split(separador, número de elementos)
const materias = 'Matemáticas, Física, Química, Lengua'
const materiaSeparada = materias.split(',')
// devuelve un array con los elementos separados por la coma.
console.log(materiaSeparada)

// Ejemplo con espacios en blanco:
const frase = 'El punto de salida hacia todo logro es el deseo'
const fraseSeparada = frase.split(' ')
// devuelve un array con los elementos separados por espacios en blanco.
console.log(fraseSeparada)

// El método split tiene un segundo argumento numérico opcional: un límite en la extensión del array. Si se provee este argumento, entonces el resto de los elementos son ignorados:
const palabras = frase.split(' ', 2)
// devuelve un array con los elementos separados por espacios en blanco, pero solo hasta el elemento 2.
console.log(palabras)
// Sin embargo en la práctica rara vez se utiliza.

// join - El método arr.join hace lo opuesto a split. Crea una string de arr elementos unidos con glue (pegamento) entre ellos.
// su sintaxis es: array.join(pegamento)
const fraseUnida = fraseSeparada.join(' ')
// devuelve un string con los elementos unidos y separados por espacios en blanco.
console.log(fraseUnida)

// Estos métodos son los más utilizados y cubren el 99% de los casos. Pero existen algunos más: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array

// Adicional:
// Array.isArray(arr) comprueba si arr es un array.

// H) Desestructuración de Arrays
// Podemos desestructurar un array en variables:
const [x, y, z] = [1, 2, 3]
console.log(x, y, z)

// Ejemplo usando el método split:
const [primerNombre, primerApellido] = 'Juan Perez'.split(' ')
// primero se separa el string en un array, y luego se desestructura el array en las variables que se le indiquen.

console.log(primerNombre)
console.log(primerApellido)

// Es sólo una manera más simple de escribir:
const nombreSeparado = 'Juan Perez'.split(' ')
console.log(nombreSeparado[0])
console.log(nombreSeparado[1])

// Ignorar elementos utilizando comas
// Los elementos no deseados de un array también pueden ser descartados por medio de una coma extra:
const [, , tercerElemento] = [1, 2, 3, 4, 5]
console.log(tercerElemento)
// Obtendría el tercer elemento, que es el 3 y el resto de los elementos del array se omiten (debido a que no hay variables para ellos).

// El resto ‘…’
// si queremos también obtener todo lo que sigue, podemos agregarle un parámetro que obtiene “el resto” usando puntos suspensivos “…”`:
const [primerElemento, ...resto] = [1, 2, 3, 4, 5]
console.log(primerElemento)
// El valor de rest es un array de los elementos restantes.
console.log(resto)
console.log(resto[0])
console.log(resto[1])
console.log(resto[2])
console.log(resto[3])
console.log(resto.length)

// * Podemos usar cualquier otro nombre de variable en lugar de rest, sólo hay que asegurar que tenga tres puntos que lo antecedan y que esté último en la asignación desestructurante.

// Valores predeterminados
// Ejemplo sin valores predeterminados:
const [visitante, local] = ['USA']
console.log(visitante)
console.log(local)

// Ejemplo con valores predeterminados:
const [raza = 'Perro', color = 'Blanco'] = ['Chihuahua']
console.log(raza)
console.log(color)

/* ** Truco para intercambiar variables ** */
// Podemos hacerlo de la siguiente manera:
let usuario = 'Luis'
let administrador = 'Gonzalo'; // recuerda usar punto y coma cuando la siguiente linea comience con [corchetes], {llaves} o (paréntesis).

[usuario, administrador] = [administrador, usuario]
// Aquí creamos un array temporal de dos variables e inmediatamente lo desestructuramos con el orden cambiado.

console.log(usuario)
console.log(administrador)

// Bucles
// Una de las formas más viejas de iterar los items de un array es el bucle for sobre sus índices:
const usuarios = [{ nombre: 'Juan', edad: 20 }, { nombre: 'Pedro', edad: 30 }]

for (let i = 0; i < usuarios.length; i++) {
  console.log(usuarios[i])
}

// Pero para los arrays también hay otra forma de bucle,for..of:
const iconos = ['🍌', '🍏', '🍓', '🍇']

// itera sobre los elementos del array
for (const icono of iconos) {
  console.log(icono)
}

// for..of no da acceso al número del elemento en curso, solamente a su valor, pero en la mayoría de los casos eso es suficiente. Y es más corto.
