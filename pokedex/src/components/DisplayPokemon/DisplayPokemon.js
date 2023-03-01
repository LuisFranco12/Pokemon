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
                        <div className="pokemon-cell" key={pokemon.name}>
                                <img 
                                    src={pokemon.sprites.other.home.front_default} 
                                    alt={pokemon.name}
                                />
                            <h3>{pokemon.name}</h3>
                        </div>
                    ))
                }
            </DisplayPokemonContainer>
            <Pagination pokemonPerPage={pokemonPerPage} totalPokemon={totalPokemon} paginate={paginate}/>
        </>
     );
}
 
export default DisplayPokemon;