//IndexOF
// Devuelve el index del primer elemento que coincida con el parametr y -1 si no está presente en el array
//se puede determinar el index desd ele que se empieza a contar con el segundo parametro

const arr = ["sopa","pure","carne","pescado","postre","carne"]

console.log(arr.indexOf('carne'))//2
console.log(arr.indexOf('carne', 3))//5
console.log(arr.indexOf('pasteles'))//-1