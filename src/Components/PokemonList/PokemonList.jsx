
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon"
import usePokemonList from "../../hooks/usePokemonList"

function PokemonList()

{

    const {pokemonListState , setPokemonListState} = usePokemonList()

// const[pokemonList , setPokemonList] = useState([])
// const[isLoading , setIsLoading] = useState(true)
// const[pokedexUrl , setpokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')

// const[nexturl , setnextUrl] = useState('')
// const[prevurl , setprevUrl] = useState('')


// const[pokemonListState , setPokemonListState] = useState({

//     pokemonList:[],
//     isLoading:true,
//     pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
//     nexturl:"",
//     prevurl:"",
// })


// useEffect(()=>{
// async function fetchdata(){

//     setPokemonListState((state)=>({
//         ...state, 
//         isLoading:true
//     })
//      )
//     const response = await axios.get(pokemonListState.pokedexUrl) 

//     console.log('respnse', response)

//     setPokemonListState((state)=>({
//         ...state,
//         nexturl:response.data.next ,
//          prevurl:response.data.previous }))

//     const pokemonResults = response.data.results  


//     const pokemonResultPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url))


//     const pokemonData = await axios.all(pokemonResultPromise)

//     console.log('Data--',pokemonData)

//     let res = (pokemonData.map((pokeData)=>{
//         const pokemon = pokeData.data
//         return({

//             id:pokemon.id,
//             name:pokemon.name , 
//             image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
//             types: pokemon.types 

//         })
//       }))



//     setPokemonListState((state)=>({ 
//         ...state, 
//         pokemonList:res , 
//         isLoading: false}))
// }


// fetchdata() 


//      },[pokemonListState.pokedexUrl])


     return(
        
        <div className = "pokemon-list-wrapper">

<div className = "pokemon-wrapper">

{(pokemonListState.isLoading) ? 'Loading' : 
        
        (pokemonListState.pokemonList).map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)

        }

        <div className="controls">

            <button  disabled={pokemonListState.prevurl==null}  onClick={()=>
                {
                let pokedexprevurl = pokemonListState.prevurl
                console.log("pevurl", pokedexprevurl)
                setPokemonListState({
                    ...pokemonListState  ,
                     pokedexUrl:pokedexprevurl})}
                }>Prev</button>
            <button  disabled={pokemonListState.nexturl==null}  onClick={()=>{
                
              let pokedexnexturl = pokemonListState.nexturl
             setPokemonListState({
                ...pokemonListState ,
                 pokedexUrl:pokedexnexturl
                })}
             }>Next</button>
        </div>

</div>
        

        </div>
        
        
     )
}

export default PokemonList