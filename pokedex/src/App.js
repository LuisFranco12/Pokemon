import { useEffect, useState } from "react"
import { FetchPokemonList } from "./api/FetchPokemonList"
import DisplayPokemon from "./components/DisplayPokemon/DisplayPokemon"
import  GlobalStyles  from "./GlobalStyles"
function App() {
  const [pokemonList, setPokemonList] = useState(null)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonPerPage] = useState(12)
  const [input, setInput] = useState('')

  useEffect(() => {
    setLoading(true)
    FetchPokemonList(setPokemonList, 1, 151)
    setLoading(false)
  }, [])

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  if(pokemonList) {

    // display 12 pokemon at a time
    const indexofLastPokemon = currentPage * pokemonPerPage
    const indeOfFirstPokemon = indexofLastPokemon - pokemonPerPage
    const currentPokemon = pokemonList.slice(indeOfFirstPokemon, indexofLastPokemon)

    return (
      <>
        <DisplayPokemon 
          pokemonList={currentPokemon} 
          loading={loading}
          pokemonPerPage={pokemonPerPage}
          totalPokemon={pokemonList.length}
          paginate={paginate}
        />
      </>
    );
  }
}

export default App;
