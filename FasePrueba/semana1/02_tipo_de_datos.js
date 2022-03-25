/* Tipo de Datos “primitivos” en JavaScript */

/*
Un valor en JavaScript siempre pertenece a un tipo de dato determinado.
Hay ocho tipos de datos básicos en JavaScript.
  - undefined
  - null
  - boolean
  - number
  - string
  - object
  - symbol
  - function
Podemos almacenar un valor de cualquier tipo dentro de una variable.
Por ejemplo, una variable puede contener en un momento un string y luego almacenar un número:
*/

// let seis = "seis";
// seis = 6

// Los lenguajes de programación que permiten estas cosas, como JavaScript, se denominan “dinámicamente tipados”, lo que significa que allí hay tipos de datos, pero las variables no están atados rígidamente a ninguno de ellos.

// Datos “primitivos” - sus valores pueden contener una sola cosa (ya sea una cadena, un número o lo que sea).

// 1 number (números)
// El tipo number representa tanto números enteros como de punto flotante (números con decimales).

// A) enteros
// const numeroEntero = 10;
// console.log(numeroEntero);

// Hay muchas operaciones para números. Por ejemplo, multiplicación *, división /, suma +, resta -, y demás.
// console.log(10 * 5);
// console.log(10 / 5);
// console.log(10 + 5);
// console.log(10 - 5);
// console.log(10 % 5);

// B) flotantes
// const numeroFlotante = 10.5;
// console.log(numeroFlotante);

// C) Redondeo
// Una de las operaciones más usadas cuando se trabaja con números es el redondeo.
// El objeto Math nos permite trabajar con números con decimales.
// Hay varias funciones incorporadas para el redondeo:

// Math.floor
// Redondea hacia abajo: 3.1 se convierte en 3, y -1.1 se hace -2.
// console.log(Math.floor(3.1));
// console.log(Math.floor(-1.1));

// Math.ceil
// Redondea hacia arriba: 3.1 torna en 4, y -1.1 torna en -1.
// console.log(Math.ceil(3.1));
// console.log(Math.ceil(-1.1));

// Math.round
// Redondea hacia el entero más cercano: 3.1 redondea a 3, 3.6 redondea a 4, el caso medio 3.5 redondea a 4 también.
// console.log(Math.round(3.1));
// console.log(Math.round(3.6));
// console.log(Math.round(3.5));

// Math.trunc (no soportado en Internet Explorer)
// Remueve lo que haya tras el punto decimal sin redondear: 3.1 torna en 3, -1.1 torna en -1.
// console.log(Math.trunc(3.1));
// console.log(Math.trunc(-1.1));

// El objeto Math contiene una pequeña biblioteca de funciones matemáticas y constantes.
// Otras funciones matemáticas que podemos usar son:

// Math.random()
// Devuelve un número aleatorio entre 0 y 1 (no incluyendo 1)
// console.log(Math.random());

// Math.max(a, b, c...) / Math.min(a, b, c...)
// Devuelve el mayor/menor de entre una cantidad arbitraria de argumentos.
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.min(1, 2, 3, 4, 5));

// Math.pow(n, power)
// Devuelve n elevado a la potencia power dada
// console.log(Math.pow(2, 3));

// Más sobre el objeto Math en: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math

// D) parseInt y parseFloat

// a menudo tenemos valores en unidades como "100px" o "12pt" en CSS, también el símbolo de moneda que en varios países va después del monto, tenemos "19€" y queremos extraerle la parte numérica, para eso sirven parseInt y parseFloat.

// Estas “leen” el número desde un string hasta que dejan de poder hacerlo. Cuando se topa con un error devuelve el número que haya registrado hasta ese momento.

// El método parseInt() convierte una cadena de texto en un número entero.
// console.log(parseInt("10px"));
// console.log(parseInt("10.5")); // devuelve solo el número entero

// El método parseFloat() convierte una cadena de texto en un número de punto flotante.
// console.log(parseFloat("10.5px"));
// console.log(parseFloat("10.5.4")); // el seguno punto es ignorado

// Además de los números comunes, existen los llamados “valores numéricos especiales” que también pertenecen a este tipo de datos: Infinity, -Infinity y NaN.

// A) Infinity (valor infinito), representa el Infinito matemático ∞. Es un valor especial que es mayor que cualquier número.
// Podemos obtenerlo como resultado de la división por cero:
// console.log(1 / 0);
// B) -Infinity (valor negativo infinito), Es un valor especial que es menor que cualquier número.
// console.log(-1 / 0);
// C) NaN (not a number), representa un valor que no es un número o el resultado de una operación matemática incorrecta o indefinida
// console.log("no es un número" / 2 );

// 2 string (cadenas de texto)
// Un string en JavaScript es una cadena de caracteres y debe colocarse entre comillas.
// const nombre = 'Jesús';
// console.log(nombre);

// En JavaScript, hay 3 tipos de comillas.
/*
Comillas simples: 'Hola'.
Comillas dobles: "Hola".
Backticks (comillas invertidas): `Hola`.
*/

// A) comillas simples y dobles
// Las comillas dobles y simples son comillas “sencillas” (es decir, funcionan igual). No hay diferencia entre ellas en JavaScript.
// const nombre = 'Jesús';
// console.log(nombre);
// const apellido = "Fernández";
// console.log(apellido);

// B) Comillas invertidas (backticks)
// En ES6, se introdujo el concepto de Template Literals o template strings.
// son una forma de escribir cadenas de texto en JavaScript de “funcionalidad extendida”. Nos permiten incrustar variables y expresiones encerrándolas en ${...}.

// const nombre = 'Jesús';
// const apellido = "Fernández";
// const nombreCompleto = `${nombre} ${apellido}`;
// console.log(nombreCompleto);

// La expresión dentro de ${...} se evalúa y el resultado pasa a formar parte de la cadena. Podemos poner cualquier cosa ahí dentro: una variable como nombre, una expresión aritmética como 1 + 2, o algo más complejo.

// C) Caracteres especiales
// En JavaScript, hay una serie de caracteres especiales que se pueden usar en un string.

// Todos los caracteres especiales comienzan con una barra invertida \. También conocida como “carácter de escape”.

// /n salto de línea (new line)
// const listaDeFrutas = 'manzana\npera\nbanana'
// console.log(listaDeFrutas)

// estas dos líneas son iguales, pero escritas en forma diferente:
// const cadena = 'Hola\nmundo'
// const cadena2 = `Hola
// mundo`

// console.log(cadena === cadena2)

// escapar comillas simples
// console.log('Yo soy \'Erik\'')

// escapar comillas dobles
// console.log("Yo soy \"Erik\"")

// Como puedes ver, debimos anteponer un carácter de escape \ antes de cada comilla ya que de otra manera hubiera indicado el final del string.

// Una solución más elegante sería cambiar a comillas dobles o backticks:
// console.log(`Yo soy "Erik"`)

// el carácter de escape \ sirve para la correcta lectura del string por JavaScript, luego desaparece. El string que quedó en la memoria no incluye \.

// si necesitamos incluir un carácter de escape \ debemos duplicarlo como sigue \\
// console.log('este es el carácter de escape \\')

// D) Largo del string (length)
// La propiedad ‘length’ entrega el largo del string.

// console.log('Hola cómo estan'.length);
// length es una propiedad numérica, no una función. No hay necesidad de agregar un paréntesis después de ella.

// E) Accediendo caracteres
// los strings son indexados por caracteres, por lo que podemos acceder a cada uno de ellos a través de su índice.
/*
ejemplo:
      'H   o   l   a       c   ó   m   o        e    s   t   a   n'
       0   1   2   3   4   5   6   7   8   9   10   11  12  13  14
*/

// Para acceder a un carácter en la posición pos, se debe usar corchetes [pos] o llamar al método str.charAt(pos).

// const string = 'Hola como estan';

// Usando el método charAt(), podemos acceder a un carácter en la posición cero:
// console.log(string.charAt());
// Usando corchetes, podemos acceder a un carácter en la posición 5:
// console.log('Hola cómo estan'[5]);
// El último carácter se encuentra en la posición length - 1:
// console.log(string[string.length - 1]);

// Los corchetes son una forma moderna de acceder a los caracteres, la única diferencia entre ellos es que si no se encuentra un carácter, usando los corchetes devuelve undefined, y charAt devuelve un string vacío.

// F) Los strings son inmutables
// no pueden ser modificados en JavaScript. Es imposible modificar un carácter.

// let caracter = 'a';
// caracter[0] = 'b';
// console.log(caracter)

// Métodos para strings (métodos de cadenas de texto)

// A) Cambiando mayúsculas y minúsculas
// toUpperCase() - Convierte todo el string a mayúsculas.
// console.log('hola'.toUpperCase());
// toLowerCase() - Convierte todo el string a minúsculas.
// console.log('HOLA'.toLowerCase());

// B) Buscando una subcadena de caracteres
// indexOf(substr, pos) - Devuelve la posición del primer carácter que coincida con el parámetro. Si no se encuentra devuelve -1. El segundo parámetro es opcional y nos permite buscar desde la posición entregada.
// console.log('Hola como estan'.indexOf('o'));

// lastIndexOf(substr, pos) - Devuelve la posición del último carácter que coincida con el parámetro busca desde el final del string hasta el comienzo. Si no se encuentra devuelve -1.
// console.log('Hola como estan'.lastIndexOf('o'));

// includes(substr, pos) - El método más moderno devuelve true si el string contiene el parámetro, es la opción correcta si lo que necesitamos es encontrar el substr pero no necesitamos la posición..
// console.log('Hola como estan'.includes('o'));
// El segundo argumento opcional de str.includes es la posición desde donde comienza a buscar.

// Los métodos startsWith (comienza con) y endsWith (termina con) hacen exactamente lo que dicen:
// startsWith() - Devuelve true si el string empieza con el parámetro.
// console.log('Hola como estan'.startsWith('Hola'));

// endsWith() - Devuelve true si el string termina con el parámetro.
// console.log('Hola como estan'.endsWith('estan'));

// C) Obteniendo un substring

// slice(desde, hasta) - Retorna la parte del string desde comienzo hasta final pero sin incluir final.
// console.log('Hola como estan'.slice(0, 3));
// Si no existe segundo argumento, entonces slice va hasta el final del string:
// console.log('Hola como estan'.slice(0));
// También son posibles valores negativos para comienzo/final. Ellos indican que la posición es contada desde el final del string.
// console.log('Hola como estan'.slice(-5));

// substring(comienzo, fin) - Devuelve la parte del string entre comienzo y final.
// console.log('Hola como estan'.substring(0, 3));
// Si no existe segundo argumento, entonces substring va hasta el final del string:
// console.log('Hola como estan'.substring(0));
// Los argumentos negativos (al contrario de slice) no son soportados, son tratados como 0.
// console.log('Hola como estan'.substring(-5));
// Esto es casi lo mismo que slice, pero permite que comienzo sea mayor que final.
// console.log('Hola como estan'.substring(3, 0));
// ...pero no para slice:
// console.log('Hola como estan'.slice(3, 0));

// De estas dos variantes, slice es algo más flexible, permite argumentos negativos y es más corta. Entones, es suficiente con, de estos dos métodos, recordar únicamente slice.

// split() - devuelve un array, por lo que podemos usar los métodos de los arrays para trabajar con los substrings.
// console.log('Hola como estan'.split(' '));
// El primer argumento es opcional y es el separador. Si no se entrega, se usa el espacio en blanco.
// console.log('Hola como estan'.split());
// El segundo argumento es opcional y es el número de substrings que se quieren obtener. Si no se entrega, se obtienen todos los substrings.
// console.log('Hola como estan'.split(' ', 2));
// Si se pasa un string vacío, se obtienen todos los substrings.
// console.log('Hola como estan'.split(''));

// join() - Hace lo opuesto a split. Crea una string de substrings unidos con glue (pegamento) entre ellos.
// console.log(['Hola', 'como', 'estan'].join(' '));

// replace() - Reemplaza la primera ocurrencia del parámetro por el segundo parámetro.
// console.log('Hola como estan'.replace('Hola', 'Adios'));
// El método replace también puede ser usado para reemplazar todas las ocurrencias de un string.
// console.log('Hola como estan'.replace('Hola', 'Adios').replace('como', 'todo'));

// tirm() - Elimina los espacios en blanco al inicio y final del string.
// console.log(' Hola como estan '.trim());

// Más métodos para strings: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String

// 3 boolean (booleanos)
// Los booleanos son valores lógicos que pueden ser true o false.

// Este tipo se utiliza comúnmente para almacenar valores de sí/no: true significa “sí, correcto, verdadero”, y false significa “no, incorrecto, falso”.
// const esVerdad = true
// console.log(esVerdad)
// const esFalso = false
// console.log(esFalso)

// 4 null (nulo)
// El valor especial null no pertenece a ninguno de los tipos descritos anteriormente.
// Forma un tipo propio separado que contiene sólo el valor null:
// const nulo = null
// console.log(nulo)
// Es sólo un valor especial que representa “nada”, “vacío” o “valor desconocido”.

// 5 undefined (no definido)
// El valor especial undefined también se distingue. Hace un tipo propio, igual que null.
// Si una variable es declarada pero no asignada, entonces su valor es undefined:
// let indefinido
// console.log(indefinido)
// El significado de undefined es “valor no asignado”.

// El operador typeof devuelve el tipo de un valor:
// console.log(typeof 32)
// console.log(typeof 'Hola')
// console.log(typeof true)
// console.log(typeof null)
// console.log(typeof undefined)

/* Conversiones de Tipos */
// La mayoría de las veces, los operadores y funciones convierten automáticamente los valores que se les pasan al tipo correcto. Esto es llamado “conversión de tipo”.

// Para convertir un valor a un tipo dado, se usa el operador de conversión de tipo:

// ToString
// La conversión a string ocurre cuando necesitamos la representación en forma de texto de un valor.
// let valor = true
// valor = String(valor)
// console.log(typeof valor)

// ToNumber
// La conversión numérica ocurre automáticamente en funciones matemáticas y expresiones.
// console.log('25' / '5')

// Para convertir de forma explícita un valor a un número:
// let textoEntero = '25'
// console.log(typeof textoEntero)

// textoEntero = Number(textoEntero)
// console.log(typeof textoEntero)

// La conversión explícita es requerida usualmente cuando leemos un valor desde una fuente basada en texto, como lo son los campos de texto en los formularios, pero que esperamos que contengan un valor numérico.

// Esto nos da NaN (not a number) porque el valor no es un número.
// console.log('Hola' * '5')
// Al igual que
// console.log(Number('Esto es una cadena de texto'));

// console.log(Number("   123   "));
// console.log(Number("123z")); // error al leer un número en "z"
// console.log(Number(true));
// console.log(Number(false));

// Reglas de conversión numérica:

// Valor               || Se convierte en…
//  - undefined        || - NaN
//  - null             || - 0
//  - true and false   || - 1 y 0
//  - string           || - Se eliminan los espacios al inicio y final del texto. Si el string resultante es vacío, el resultado es 0, en caso contrario el número es “leído” del string. Un error devuelve NaN.

// Ten en cuenta que null y undefined se comportan de distinta manera aquí: null se convierte en 0 mientras que undefined se convierte en NaN.

// Adición ‘+’ concatena strings.
// Casi todas las operaciones matemáticas convierten valores a números.
// Una excepción notable es la suma +. Si uno de los valores sumados es un string, el otro valor es convertido a string.
// Luego, los concatena (une):
// console.log('25' + '5')
// Esto ocurre solo si al menos uno de los argumentos es un string, en caso contrario los valores son convertidos a número.
// console.log(3 + '5')
// console.log('3' + 5)

// ToBoolean
// La conversión a boolean es la más simple.

// Ocurre en operaciones lógicas pero también puede realizarse de forma explícita llamando a la función Boolean(value).
// Las reglas de conversión:

// Los valores que son intuitivamente “vacíos”, como 0, "", null, undefined, y NaN, se convierten en false y reciben el nombre de falsy.
// El resto se convierten en true y reciben el nombre de truthy.
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))

// console.log(Boolean(1))
// console.log(Boolean('Hola'))
// console.log(Boolean(' '))
// console.log(Boolean('0')) // Ten en cuenta: el string con un cero "0" es true.

// Las tres conversiones de tipo más usadas son a string, a número y a boolean.

// El operador typeof nos permite ver qué tipo está almacenado en una variable.
//  - Dos formas: typeof x o typeof(x).
//  - Devuelve una cadena con el nombre del tipo. Por ejemplo "string".
//  - Para null devuelve "object": esto es un error en el lenguaje, en realidad no es un objeto.

console.log(typeof undefined)
console.log(typeof 0)
console.log(typeof 10n)
console.log(typeof true)
console.log(typeof 'texto')
console.log(typeof Symbol('id'))

// El resultado de typeof null es "object". Esto está oficialmente reconocido como un error de comportamiento de typeof que proviene de los primeros días de JavaScript y se mantiene por compatibilidad. Definitivamente null no es un objeto. Es un valor especial con un tipo propio separado.
console.log(typeof null)
