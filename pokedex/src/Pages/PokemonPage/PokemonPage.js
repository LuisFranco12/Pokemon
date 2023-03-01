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

                        <div className="left-info">
                            <div className="height">
                                <div>Height</div>
                                <div>{ (state.height / 3.048).toFixed(2) } Feet</div>
                            </div>
                            <div className="weight">Weight</div>
                            <div>{ (state.weight / 4.536).toFixed(1) } pounds</div>
                        </div>

                        <div className="right-info">
                            <div className="types-container">
                                <div>Type(s)</div>
                                <div className="types">
                                    {
                                        state.types.map(item => (
                                            <div>{item.type.name}</div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="abilities-container">
                                <div>Abilities</div>
                                <div className="abilities">
                                    {
                                        state.abilities.map(item => (
                                            <div>{item.ability.name}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </PokemonPageContainer>
     );
}
 
export default PokemonPage;