//sort  => turoial : https://www.youtube.com/watch?v=MWD-iKzR2c8
//ordena los elementos d eun array

//si no pasamos ninguna funcion, se ordenará en base a su valor unicode [Numeros en orden, Strings en mayusculas oden alfabetico, strings minusculas orden alfabetico]

console.log([3,5,4,2,1].sort())//[1,2,3,4,5]
console.log(["b", "c","a","d"].sort())//["a","b","c","d"]
console.log(["a", "b", "C", "D"].sort())//["C","D","a","b"]
console.log(["a",23,"Z",1].sort())//[1,23,"Z","a"]

//Para hacer un orden personalizado s epuede pasa runa funcion con dos parametros para definir esa comparación
//ordenando por id de usuarios:
const usuarios = [
    {
        name: "Peter",
        sex:"male",
        id:10986934
    },
    {
        name: "Charles",
        sex:"male",
        id:10986935
    },
    {
        name: "Jenny",
        sex:"female",
        id:10986933
    }
]

usuarios.sort((a,b)=> a.id - b.id);
console.log(usuarios)
/* [
    { name: 'Jenny', sex: 'female', id: 10986933 },
    { name: 'Peter', sex: 'male', id: 10986934 },
    { name: 'Charles', sex: 'male', id: 10986935 }
] */

//Ordenando array por numero de letras:
const paises = ["China", "Luxemburgo",  "Estados unidos", "España", "Laos"]
paises.sort((a,b)=> a.length - b.length)
console.log(paises)// [ 'Laos', 'China', 'España', 'Luxemburgo', 'Estados unidos' ]