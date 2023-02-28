import { FetchPokemonList } from "./api/FetchPokemonList"
function App() {
  const [pokemonList, setPokemonList] = useState(null)
  const [loading, setLoading] = useState(false)
  const [currentPage] = useState(1)
  const [pokemonPerPage, setPokemonPerPage] = useState(12)
  const [input, setInput] = useState('')

  useEffect(() => {
    setLoading(true)
    FetchPokemonList(setPokemonList, 1, 151)
    setLoading(false)
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
