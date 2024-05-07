import Search from '../Search/Search'
import './Pokedex.css'
import PokemonList from '../PokemonList/PokemonList'
import { useState } from 'react'
import Pokemon from '../Pokemon/Pokemon'
import PokemonDetails from '../PokemonDetails/PokemonDetails'
import { useEffect } from 'react'
function Pokedex()
{
    const[searchTerm , setSearchTerm] = useState('')



return(
    <div className="pokedex-wrapper">

    <Search updateSearchTerm={setSearchTerm}/>
   

    {(!searchTerm) ? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
    

    </div>
)
}

export default Pokedex
