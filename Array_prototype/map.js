//map
//devuelve un array nuevo con los resultados obtenidos de pasar cada elemento d eun array por una funcion

const arrnumber = [1,2,3,4,5]
const arrStrings = ['perro', 'gato', 'loro','caballo']

const newNubers = arrnumber.map(e=> e*2)
console.log(newNubers)//[ 2, 4, 6, 8, 10 ]

const newStrings = arrStrings.map(e=> `mi animail favorito es ${e}`)
console.log(newStrings)/*[
                            'mi animail favorito es perro',
                            'mi animail favorito es gato',
                            'mi animail favorito es loro',
                            'mi animail favorito es caballo'
                        ]*/