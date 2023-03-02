import { useState } from "react";

const PokemonStats = ({item, progress, height}) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {

        const Childdiv = {
            width: `${progress}%`,
            height: '100%',
            borderRadius: '40px',
            maxWidth: '100%',
            transition: '2s ease'
          }

          setStyle(Childdiv)

    },100)

    // const Parentdiv = {
    //     height: '10px',
    //     width: '50%',
    //     backgroundColor: 'whitesmoke',
    //     borderRadius: '40px',
    //   }


    return ( 
        <div className="stats-cell">
            <div className="text">{item.stat.name.toUpperCase()}</div>
            <div>{item.base_stat}</div>
            
            <div className="progress-bar">
                <div className="progress-complete" style={style}>
                </div>
            </div>
        </div>
    );
}
 
export default PokemonStats;