// DOCuMENTATION: https://www.youtube.com/watch?v=USuhP9F56UE

async function consultaAPI(category){
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f69e45d9302e447fbb91fe3a68952ec7`
    try {
        const response = await fetch(url)
        const noticias = await response.json()
        return noticias.articles
    } catch (error) {
        throw new Error ('Error al leer la API')
    }
}

(async ()=>{
    const noticias = await consultaAPI('general')
    console.log(noticias)
})()





