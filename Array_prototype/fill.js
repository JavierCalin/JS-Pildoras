//Fill
//Cambia los elementos indicados de un array por la propiedad indicada:
//array.fill(value, start, end) : value: valor a  rellenar , start: desde el elemento, end: hasta el elemento

console.log([1, 2, 3, 4, 5].fill("Hola", 0, 2))//expect : ["Hola","Hola","Hola",4,5] (un tramo)
console.log([1, 2, 3, 4, 5].fill("Hola", 1));// expect : [1,"Hola","Hola","Hola","Hola"] (desde posicion x)
console.log([1, 2, 3, 4, 5].fill("Hola")); // expect : ["Hola","Hola","Hola","Hola","Hola"] (todos los elementos)

