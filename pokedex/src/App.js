import { useEffect, useState } from "react"
import { FetchPokemonList } from "./api/FetchPokemonList"
import { Routes, Route } from "react-router-dom"
import  GlobalStyles  from "./GlobalStyles"
import DisplayPokemon from "./components/DisplayPokemon/DisplayPokemon"
import Navbar from "./components/Navbar/Navbar"
import About from "./Pages/About/About"
import PokemonPage from "./Pages/PokemonPage/PokemonPage"
import Footer from "./components/Footer/Footer"
function App() {
  const [pokemonList, setPokemonList] = useState(null)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonPerPage] = useState(12)
  const [oldList, setOldList] = useState(null)
  useEffect(() => {
    setLoading(true)
    FetchPokemonList(setOldList, setPokemonList, 0, 151)
    setLoading(false)
  }, [])

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  if(pokemonList && oldList) {
    // display 12 pokemon at a time
    const indexofLastPokemon = currentPage * pokemonPerPage
    const indeOfFirstPokemon = indexofLastPokemon - pokemonPerPage
    const currentPokemon = pokemonList.slice(indeOfFirstPokemon, indexofLastPokemon)

    return (
      <>
      <GlobalStyles />
      <Navbar setPokemonList={setPokemonList} oldList={oldList} setCurrentPage={setCurrentPage}/>
      <Routes>
        <Route path="/" element={
          <DisplayPokemon 
            pokemonList={currentPokemon}
            setPokemonList={setPokemonList} 
            loading={loading}
            setLoading={setLoading}
            setCurrentPage={setCurrentPage}
            pokemonPerPage={pokemonPerPage}
            totalPokemon={pokemonList.length}
            paginate={paginate}
            oldList={oldList}
          />
        }/>
        <Route path="/pokemon/:name" element={<PokemonPage />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
      </>
    );
  }
}

export default App;
