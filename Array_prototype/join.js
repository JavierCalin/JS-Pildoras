// join
// Devuelve un string con todos los elementos concatenados por un separador que definimos tambien como string y pasado pos parametro.
// Si dejamos el método sin parámetro el separador será una coma
// Si pasamos como parametro un sting vacio el string no tendrá separacion
// Si paramos como parametro un espacio se separara con espacios

const arr = ["Mi","numero","favorito","es","el",10]

console.log(arr.join())     // espect: [Mi,numero,favorito,es,el,10]
console.log(arr.join(''))   // espect: [Minumerofavoritoesel10]
console.log(arr.join(' '))  // espect: [Mi numero favorito es el 10]
console.log(arr.join('-'))  // espect: [Mi-numero-favorito-es-el-10]