//Consultar el Pokemon
const consultarPokemon = (id,number)=>{
    //Para realizar una peticion a una API
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //Manejo de promesas con fetch. Then y Catch son formas de fetch

    //Obtiene una respuesta del sevidor y lo convierte en formato JSON
        .then(response=>{
            return response.json()
            
        })
        //Obtener la respuesta-info
        .then(data=>{
            console.log(data)
            pintarPokemon(data,number)
        })
        //Captura de errores
        .catch(error=>{
            console.log(error)
        })
}
consultarPokemon(1)

const btnSeleccionar =()=>{
    let primerPokemon =Math.round(Math.random()*150)
    let segundoPokemon =Math.round(Math.random()*150)

    consultarPokemon(primerPokemon,1)
    consultarPokemon(segundoPokemon,2)
}
btnSeleccionar()

const lista = document.getElementById("listarpokemon")
//Pintar el Pokemon
const pintarPokemon=(data,id)=>{
    let item = lista.querySelector(`#pok-${id}`)
    //data.sprites.front_default , mediante ello le decimos que vamos a todos los datos a la clave sprite y en sprite a la clave front_default
    item.getElementsByTagName("img")[0].setAttribute("src",data.sprites.front_default)
    //Para presentar el nombre en el elemento p
    item.getElementsByTagName("p")[0].innerHTML=data.name 

}