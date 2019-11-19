//Every
//evalua todos los elementos d eun array sobre una funcion y si todos cumplen retorna true, si no false

const trueArr = [0,1,2,3,4,5,6,7,8,9]
const falseArr = [10]

const evalFunction = (e) =>  e < 10

console.log(trueArr.every(evalFunction))
//true
console.log(falseArr.every(evalFunction))
//false
