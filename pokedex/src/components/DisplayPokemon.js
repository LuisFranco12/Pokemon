import { Link } from "react-router-dom"
export default function DisplayPokemon({pokemonList, loading, input, setInput, showMoreItems}) {

    function handleChange(e){
        setInput(e.target.value)
    }

    
    return (
        <>
            <input onChange={handleChange} value={input} type='text'/>
            <div className="pokemon-container">
            {
                pokemonList.filter(pokemon => pokemon.name.includes(input)).map(pokemon => (
                    <Link to={`/pokemon/${pokemon.name}`} state={{...pokemon}} >
                        <div className="pokemons" key={pokemon.name}>
                            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name}/>
                            <p>{pokemon.name}</p>
                        </div>
                    </Link>
                ))
            }
            </div>
            <button onClick={showMoreItems}>Load More</button>
        </>
    )
}