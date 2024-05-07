import { useState } from 'react'
import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'
import CustomRoutes from './Routes/Customroutes'
import { Link } from 'react-router-dom'



function App() {

  return (
    <div className='outer-pokedex'>

    <h1 id='pokedex-heading'>

    <Link to='/'> Pokedex </Link>

    </h1>
    
     
      <CustomRoutes/>

    </div>
  )
}

export default App
