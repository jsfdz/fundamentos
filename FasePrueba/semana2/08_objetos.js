/* Objetos en javascript */

// Los objetos son usados para almacenar colecciones de varios datos y entidades más complejas asociados con un nombre clave.
// Podemos crear un objeto usando las llaves {…} con una lista opcional de propiedades, esa declaración se llama objeto literal.

// Una propiedad es un par “key:value”, donde key es un string (también llamado “nombre clave”), y value puede ser cualquier cosa.
// Nos referiremos a este par de conceptos como “clave:valor”.

// Objeto literal (valores declarados literalmente en el codigo)
// Su sintaxis es: {clave: valor, clave: valor, …}

const usuario = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 30
}

// Hay 3 formas de acceder a los valores de un objeto:
// 1. usando la notación de punto .
// 2. usando la notación de corchetes []
// 3. usando la destructuración de objetos

// Utilizando la notación de punto:
console.log(usuario.nombre)
console.log(usuario.apellido)
console.log(usuario.edad)

// Agregar una nueva propiedad al objeto:
usuario.pais = 'Colombia'
// El valor puede ser de cualquier tipo.
usuario.estado = true

console.log(usuario)

// Para remover una propiedad podemos usar el operador delete:
delete usuario.estado
console.log(usuario)

// Utilizando la notación de corchetes:
// También podemos nombrar propiedades con más de una palabra. Pero, de ser así, debemos colocar la clave entre comillas "...":
const persona = {
  'nombre completo': 'Juan Perez',
  edad: 30,
  pais: 'Colombia'
}

// La notación de punto no funciona para acceder a propiedades con claves de más de una palabra:
// console.log(persona.nombre_completo) // Error

console.log(persona['nombre completo'])
// El string dentro de los corchetes está entre comillas (cualquier tipo de comillas servirían).

// Podemos almacenar el valor en una variable y usarlo en la propiedad en lugar de una cadena literal de la siguiente manera:
const clave = 'nombre completo'
console.log(persona[clave])

// Podemos acceder a cualquier propiedad del objeto de la misma manera siempre y cuando la propiedad esté entre comillas.
// console.log(persona['edad'])
// console.log(persona['pais'])
