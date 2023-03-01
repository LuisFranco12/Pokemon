const PokemonPageStats = ({ item }) => {
    return ( 
        <div className="stats-container">
            <div className="show-stats">
                <div>{item.stat.name}</div>
                <div>{item.base_stat}</div>
                <div className="progress-bar"></div>
            </div>
        </div>
     );
}
 
export default PokemonPageStats;