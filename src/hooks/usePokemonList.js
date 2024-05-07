import axios from "axios"
import { useEffect, useState } from "react"

function usePokemonList()
{
    const[pokemonListState , setPokemonListState] = useState({

        pokemonList:[],
        isLoading:true,
        pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
        nexturl:"",
        prevurl:"",
    
    })

// console.log("The value of type is" , pokemonListState.type)

    async function fetchdata(){
        //  const response = await axios.get(`https://pokeapi.co/api/v2/type/${pokemonListState.type}`)
    //   console.log("The value of response is???????????" , response)
    console.log("The value of type is" , pokemonListState.type)
// console.log("pokemonliststate data========",pokemonListState.type)

        
        setPokemonListState((state)=>({
            ...state, 
            isLoading:true
        })
        )
        
        const response = await axios.get(pokemonListState.pokedexUrl) 

    
// console.log("response data is" , response)
        const pokemonResults = response.data.results  
        console.log("print the response", response.data,response.data.next)
    console.log("response is --" , response.data.pokemon)

    
        setPokemonListState((state)=>({
            ...state,
            nexturl:response.data.next ,
             prevurl:response.data.previous }))


        const pokemonResultPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url))
    
    // console.log('pokemonResultPromise' , pokemonResultPromise)
    
        const pokemonData = await axios.all(pokemonResultPromise)
    
        console.log('Data--', pokemonData)
    
        let res = (pokemonData.map((pokeData)=>{
            const pokemon = pokeData.data
            return({
    
                id:pokemon.id,
                name:pokemon.name , 
                image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types: pokemon.types 
    
            })
          }))
    
        // console.log(res)
    
        setPokemonListState((state)=>({ 
            ...state, 
            pokemonList:res , 
            isLoading: false}))
    
}


useEffect(()=>{
    fetchdata()
},[pokemonListState.pokedexUrl])

    
    return{pokemonListState , setPokemonListState}
    
}

export default usePokemonList