//reduceRight
// el mismo metodo que recude pero iniciando desde el final del array:

const arr = [[1,2],[3,4],[5,6]]

console.log(arr.reduce((acc,val)=>acc.concat(val)))//[1,2,3,4,5,6]
console.log(arr.reduceRight((acc,val)=>acc.concat(val)))//[5,6,3,4,1,2]
