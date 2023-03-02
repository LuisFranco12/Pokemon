import { useLocation } from "react-router-dom";
import PokemonAbilities from "./PokemonAbilities";
import { PokemonPageContainer } from "./PokemonPage.styled";
import PokemonStats from "./PokemonStats";
import PokemonTypes from "./PokemonTypes";

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
                                    <PokemonStats item={item} progress={item.base_stat} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="height-weight-container">
                        <div className="height">
                            <div className="heading">Height</div>
                            <div> {(state.height / 3.048).toFixed(2)} Feet </div>
                        </div>
                        <div className="weight">
                            <div className="heading">Weight</div>
                            <div> {(state.weight / 4.536).toFixed(1)} pounds </div>
                        </div>
                    </div>

                    
                    <div className="type-ability-container"> 
                        <div className="types-container">
                            <div className="heading">Type</div>
                            <div className="types">
                                {
                                    state.types.map(item => <PokemonTypes item={item} />)
                                }
                            </div>
                        </div>

                        <div className="Ability-container">
                            <div className="heading">Abilities</div>
                            <div className="abilities">
                                {
                                    state.abilities.map(item => (
                                        <PokemonAbilities item={item} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PokemonPageContainer>
     );
}
 
export default PokemonPage;