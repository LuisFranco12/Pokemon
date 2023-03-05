import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { DisplayPokemonContainer } from "./DisplayPokemon.style";
import { Search } from "../Search/Search";
const DisplayPokemon = ({ pokemonList, setCurrentPage, setLoading, pokemonPerPage, totalPokemon, paginate, setPokemonList, oldList }) => {

    return ( 
        <>
            <DisplayPokemonContainer>
                <Search setPokemonList={setPokemonList} oldList={oldList} setLoading={setLoading} setCurrentPage={setCurrentPage}/>
                <div className="showpokemon">
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
                </div>
            </DisplayPokemonContainer>
            <Pagination pokemonPerPage={pokemonPerPage} totalPokemon={totalPokemon} paginate={paginate}/>
        </>
     );
}
 
export default DisplayPokemon;