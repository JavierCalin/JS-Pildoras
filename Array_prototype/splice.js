//splice
//cambia el contenido de un array eliminando elementos y/o agregando nuevos
//splice (donde empieza a elminar , numero de elementos a eliminar, elementos a incluir)
const arr = ['Lunes', 'Martes', 'Jueves', 'Viernes', 'Febrero', 'Domingo']

const eliminado = arr.splice(4,1,'Sabado')//['Lunes', 'Martes', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

console.log(arr)//['Lunes', 'Martes', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
console.log(eliminado)//[Febrero]

arr.splice(2,0,'Miercoles')
console.log(arr)//['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']