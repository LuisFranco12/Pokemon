import Pagination from "../Pagination/Pagination";
const DisplayPokemon = ({ pokemonList, loading, pokemonPerPage, totalPokemon, paginate }) => {

    if(loading) {
        return <div>Loading...</div>
    }

    return ( 
        <>
            {
                pokemonList.map(pokemon => (
                    <div key={pokemon.name}>
                        <img 
                            src={pokemon.sprites.other.home.front_default} 
                            alt={pokemon.name}
                        />
                        <h3>{pokemon.name}</h3>
                    </div>
                ))
            }
            <Pagination pokemonPerPage={pokemonPerPage} totalPokemon={totalPokemon} paginate={paginate}/>
        </>
     );
}
 
export default DisplayPokemon;