import { Link } from "react-router-dom";
import { Container } from "./Navbar.styled";
const Navbar = () => {
    return ( 
        <Container>
                <ul className="parent-ul">
                    <Link to="/">Pokedex</Link>
                    <div className="right-list-items">
                        <Link to="/about">About</Link>
                        <li><a href="https://pokeapi.co/">Resource</a></li>
                    </div>
                </ul>
        </Container>
     );
}
 
export default Navbar;