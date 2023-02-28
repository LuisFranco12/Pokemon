import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState(null)
  const [loading, setLoading] = useState(false)
  const [currentPage] = useState(1)
  const [pokemonPerPage, setPokemonPerPage] = useState(12)
  const [input, setInput] = useState('')
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
