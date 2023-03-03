import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { DisplayPokemonContainer } from "./DisplayPokemon.style";
const DisplayPokemon = ({ pokemonList, loading, pokemonPerPage, totalPokemon, paginate }) => {

    if(loading) {
        return <div>Loading...</div>
    }
    return ( 
        <>
            <DisplayPokemonContainer>
                {
                    pokemonList.map(pokemon => (
                        <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name} state={{...pokemon}}>
                            <div className="pokemon-cell" key={pokemon.name}>
                                <img 
                                    src={pokemon.sprites.other.home.front_default} 
                                    alt={pokemon.name}
                                />
                                <h3>{pokemon.name.toUpperCase()}</h3>
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