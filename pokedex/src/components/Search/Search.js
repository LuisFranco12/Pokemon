import { useState } from "react"
import { FetchPokemonName } from "../../api/FetchPokemonName"
import { SearchContainer } from "./Search.styled"
export function Search({setPokemonList, oldList, setLoading, setCurrentPage}) {
    const [input, setInput] = useState('')

    function handleChange(e) {
        setInput(e.target.value)
    }

    async function search(e) {
        e.preventDefault()
        if(input === '') return

        const newList = []

        setLoading(true)
        const fetchedPokemon = await FetchPokemonName(input.toLowerCase())
        setLoading(false)

        newList.push(fetchedPokemon)
        
        setPokemonList(newList)
        setCurrentPage(1)
        setInput("")
    }

    function handleKeyDown(e) {
        if(e.key === 'Enter') {
            search(e)
        }
    }

    function showAll() {
        setPokemonList(oldList)
    }


   return(
    <SearchContainer>
        <div className="input-container">
            <button className="show-all-button" onClick={(showAll)}>Show All</button>
            <input onKeyDown={handleKeyDown} onChange={handleChange} placeholder="Search Pokemon" type="text" value={input}/>
            <button className="search-button" onClick={search}>Search</button>
        </div>
    </SearchContainer>
    )
}