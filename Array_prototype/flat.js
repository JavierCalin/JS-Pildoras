//flat
//devuelve un nuevo array con los valores de los subarrays concatenados
//pasandole un int o "Infinity" como propiedad podemos definir el nivel de subarrays que queremos incluir 

const arr = [1,2,3,[4,5,[6,7,[8,9]]]]

console.log(arr.flat())//[1,2,3,4,5,[6,7,[8,9]]]
console.log(arr.flat(2))//[1,2,3,4,5,6,7,[8,9]]
console.log(arr.flat(Infinity))//[1,2,3,4,5,6,7,8,9]