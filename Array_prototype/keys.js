//keys
// Devuelve un Objeto [Array iterator] que conteien los keys del array
// un iterador puede hacer uso del metodo next para pasar al siguiente elemento 

const arr = [1,2,3,4,5]
const ObjetoIteratorArray = arr.keys()

console.log(ObjetoIteratorArray)// Objet [AArray Iterator]

for(let key of ObjetoIteratorArray){
    console.log(key)
}/* 0
    1
    2
    3
    4*/