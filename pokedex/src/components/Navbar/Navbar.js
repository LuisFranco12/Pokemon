import { Link } from "react-router-dom";
import { Container } from "./Navbar.styled";
const Navbar = ({setPokemonList, oldList, setCurrentPage}) => {

    function showAll() {
        setPokemonList(oldList)
        setCurrentPage(1)
    }

    return ( 
        <Container>
                <ul className="parent-ul">
                    <Link onClick={showAll} to="/">Pokedex</Link>
                    <div className="right-list-items">
                        <Link to="/about">About</Link>
                        <li><a href="https://pokeapi.co/">Resource</a></li>
                    </div>
                </ul>
        </Container>
     );
}
 
export default Navbar;