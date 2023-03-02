import { useLocation } from "react-router-dom";
import { PokemonPageContainer } from "./PokemonPage.styled";
import PokemonStats from "./PokemonStats";

// check over this page when you can

const PokemonPage = () => {
    const { state } = useLocation()

    return ( 
        <PokemonPageContainer>
            <div className="pokemon-page">
                <div className="left-side">
                    <div className="img-container">
                        <img src={state.sprites.other.home.front_default} alt={PokemonPage.name}/>
                    </div>

                    <div className="bottom-container">
                        <h1>STATS</h1>
                        <div className="stats-container">
                            {
                                state.stats.map(item => (
                                    <PokemonStats item={item} progress={item.base_stat} height={10}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </PokemonPageContainer>
     );
}
 
export default PokemonPage;