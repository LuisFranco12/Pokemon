import { useEffect, useState } from "react";

const PokemonStats = ({item, bgcolor, progress, height}) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {

        const Childdiv = {
            width: `${progress}%`,
            height: '100%',
            borderRadius: 40,
            maxWidth: '100%',
            transition: '2s ease'
          }

          setStyle(Childdiv)

    },100)

    const Parentdiv = {
        height: height,
        width: '50%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
      }


    return ( 
        <div className="stats-cell">
            <div className="text">{item.stat.name}</div>
            <div>{item.base_stat}</div>
            
            <div style={Parentdiv}>
                <div className="progress-complete" style={style}>
                </div>
            </div>
        </div>
    );
}
 
export default PokemonStats;