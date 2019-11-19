//Filter
//crea UN NUEVO ARRAY con los elementos que devuelvan true en una funcion definida

var palabras = ["hola", "¿", "Qué", "tal", "estas", "?"];

var filtrado = palabras.filter(palabra=> palabra.length<=3)

console.log(palabras)//["hola", "¿", "Qué", "tal", "estas", "?"]
console.log(filtrado)//[¿", "Qué", "tal", "?"]