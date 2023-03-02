import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { DisplayPokemonContainer } from "./DisplayPokemon.style";
const DisplayPokemon = ({ pokemonList, loading, pokemonPerPage, totalPokemon, paginate, input, setInput}) => {

    function handleChange(e) {
        setInput(e.target.value)
    }

    if(loading) {
        return <div>Loading...</div>
    }
    return ( 
        <>
            <input onChange={handleChange} type="text" value={input}/>
            <button>Search</button>
            <DisplayPokemonContainer>
                {
                    pokemonList.filter(pokemon => pokemon.name.includes(input)).map(pokemon => (
                        <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name} state={{...pokemon}}>
                            <div className="pokemon-cell" key={pokemon.name}>
                                <img 
                                    src={pokemon.sprites.other.home.front_default} 
                                    alt={pokemon.name}
                                />
                                <h3>{pokemon.name}</h3>
                            </div>
                        </Link>
                    ))
                }
            </DisplayPokemonContainer>
            <Pagination pokemonPerPage={pokemonPerPage} totalPokemon={totalPokemon} paginate={paginate}/>
        </>
     );
}
 
export default DisplayPokemon;