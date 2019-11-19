//reduce
// devuelve un valor producto de la aplicacion de una funcion concreta a cada valo y añadiendola a un aculumador. 
//La funcion recive un acumulador y un valor actual.

var arr = [ 24 ,3 ,5 ,87 ,10 ,32 ]

//modo largo:
function reducer(acc, val){
    return acc = acc + val
}
const arrReduced = arr.reduce(reducer)
console.log(`modo largo  = ${arrReduced}`)// 24+3+5+87+10+32  = 161 => 161

//modo corto
const shortreducer = arr.reduce((acc,val)=>acc+=val) 
console.log(`modo corto = ${shortreducer}`)// 24+3+5+87+10+32  = 161 => 161


//Si se agrega un parametro despues de la funcion podemos indicar el valor inicial del acumulador, si no se agega ese parametro, el vlaor inicial es el primer elemento del array
const shortreducerwithval = arr.reduce((acc,val)=>acc+=val, 2) 
console.log(`agregando valor al aculumador inicial = ${shortreducerwithval}`)// 24+3+5+87+10+32  = 161 => 162

//otro ejemplo : Solo suma valores mayores de 20 los menores los resta
const ejemplodiferente = arr.reduce((acc,val)=> val>=20 ? acc+=val : acc-=val )
console.log(`ejemplo diferente restando o sumando segun valor ${ejemplodiferente}`)// 24-3-5+87-10+32 = 125 => 125 

//otro ejemplo : Busca el valor mayor

const verboseMode = arr.reduce(function(valorAcumulado,valorActual){
    if(valorActual>valorAcumulado){
        return valorActual
    }else{
        return valorAcumulado
    }
})
console.log(`busca mayor numero, Verbose Mode : ${verboseMode}`)//87

const nonVerboseMode = arr.reduce((acc,val)=>val > acc ? val : acc)
console.log(`busca mayor numero, Verbose Mode : ${nonVerboseMode}`)//87