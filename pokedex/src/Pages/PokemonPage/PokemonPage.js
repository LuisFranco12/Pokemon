import { useLocation } from "react-router-dom";
import { PokemonPageContainer } from "./PokemonPage.styled";
import PokemonPageStats from "./PokemonPageStats";

const PokemonPage = () => {
    const { state } = useLocation()
    return ( 
        <PokemonPageContainer>
            <div className="pokemon-page">
                <div className="left-side">
                    <img src={state.sprites.other.home.front_default} alt={PokemonPage.name}/>
                    <h1>STATS</h1>
                    {
                        state.stats.map(item => <PokemonPageStats item={item}/>)
                    }
                </div>
                <div className="right-side">
                    <p id="description"></p>
                    <div className="pokemon-info">
                        <div className="left-info"></div>
                        <div className="right-info"></div>
                    </div>
                    <div className="types">
                        <p>Type(s)</p>
                        <div className="types"></div>
                    </div>
                </div>
            </div>
        </PokemonPageContainer>
     );
}
 
export default PokemonPage;