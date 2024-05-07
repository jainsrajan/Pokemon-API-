import { useParams } from "react-router-dom"
import './PokemonDetails.css'
import usePokemonList from "../../hooks/usePokemonList";
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails({pokemonName})

{

    const {id} = useParams();
    const[pokemon] = usePokemonDetails(id , pokemonName)

    // console.log(id);

    // const[pokemon , setPokemon] = useState({})
    //    let pokemonListResponse = []
   
    //     async function downloadPokemon(){

    //         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //         console.log(response.data)

    //         setPokemon({
    //             name:response.data.name,
    //             image:response.data.sprites.other.dream_world.front_default,
    //             weight:response.data.weight,
    //             height:response.data.height,
    //             types:response.data.types.map((t)=>t.type.name)
    //         })  
            
    //        return response
    //     }

        // console.log("pokemon-types",pokemon.types)

        // pokemonListResponse = usePokemonList(`https://pokeapi.co/api/v2/type/${pokemon.types ? pokemon.types[0] : "fire"}` , true)

//         useEffect(()=>{
// console.log("Print the list of the pokemon", pokemonListState)
//         downloadPokemon()
//         },[])



    return (

          <div className="pokemon-details-wrapper">
              <img id="pokemon-image"  src={pokemon.image} alt="image" />
            <div id="pokemon-name">name:{pokemon.name}</div>
             <div id="pokemon-height">Height:{pokemon.height}</div>
             <div id="pokemon-wight">Weight:{pokemon.weight}</div>
             <div> type:{pokemon.types}</div>

             <div className="pokemon-types">
               {pokemon.types
               && pokemon.types.map((t)=> <div key={t}>{t}</div>)} 
             </div>
{
    pokemon.types && pokemon.similarpokemon &&
    <div>

           More{pokemon.types[0]} types pokemons

           <ul>
            {pokemon.similarpokemon.map((p)=>
                <li key={p.pokemon.url}>

                    {p.pokemon.name}
                
                </li>

            )}
           </ul>

    </div>
}

          </div>  

    )

}

export default PokemonDetails