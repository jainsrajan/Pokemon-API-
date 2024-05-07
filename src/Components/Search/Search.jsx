import './Search.css'
import useDebounce from '../../hooks/useDebounce'

function Search({updateSearchTerm})
{

    const debouncecallback = useDebounce((e)=> updateSearchTerm(e.target.value))
  
return (
<div className='search-wrapper'>

<input
id='pokemon-name-search'
type = 'text'
placeholder = "Pokemon-name...."
onChange = {debouncecallback}

/>


</div>


)
}

export default Search