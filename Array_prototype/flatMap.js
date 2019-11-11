//flatMap
//flatMap es un método que ejecuta un metodo map y luego un flat.
//Se utilizaría cuanod tu metodo map va a devolver arrays dentro del array generado pero no quieres obtener subarrays
//devuelve siempre un nuevo array resultante
//_FUENTE_ : https://dev.to/laurieontech/understanding-array-prototype-flatmap-56bm

const arr = [1,2,3]

//ejemplo de map
const resultadoMap = arr.map(e => e*2 )
console.log(resultadoMap) // espect : [2,4,6]

//ejemplo map de arrays
const resultadoMapArrays = arr.map(e => [e , e*2] )
console.log(resultadoMapArrays) // espect : [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ] ]

//ejemplo map de arrays + flat
const resultadoMapArraysMasFlat = arr.map(e => [e , e*2] ).flat()
console.log(resultadoMapArraysMasFlat) // espect : [ 1, 2, 2, 4, 3, 6 ]

//ejemplo flatMap
const resultadoFlatMap = arr.flatMap(e => [e , e*2] )
console.log(resultadoFlatMap) // espect : [ 1, 2, 2, 4, 3, 6 ]