import axios from "axios"
import { useEffect, useState } from "react"


function usePokemonDetails(id , pokemonName)
{

    // const {id} = useParams();

    // console.log(id);

    const[pokemon , setPokemon]= useState({})
    //    let pokemonListResponse = []
   try {
    
   } catch (error) {
    
   }
        async function downloadPokemon(){

            try {

                let response;

                if(pokemonName)
                {
    
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    
                }
                
                else{
                    response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                }
    
                const pokemonOfSametypes = await axios(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ' '}`)
                console.log("pokemon of same type", pokemonOfSametypes.data)
               
                setPokemon({
                    name:response.data.name,
                    image:response.data.sprites.other.dream_world.front_default,
                    weight:response.data.weight,
                    height:response.data.height,
                    types:response.data.types.map((t)=>t.type.name),
                    similarpokemon: pokemonOfSametypes.data.pokemon.slice(0,5)
                })
    
                // setPokemonListState({
                //     ...pokemonListState,
                //     type:response.data.types ? response.data.types[0].type.name : ' '})
                
            } catch (error) {
                console.log('Something went wrong')
            }
         
          }

    //    const{pokemonListState , setPokemonListState} =   useState({})

      useEffect(()=>{
   
                    downloadPokemon()
                    },[])
            

return[pokemon]
}

export default usePokemonDetails