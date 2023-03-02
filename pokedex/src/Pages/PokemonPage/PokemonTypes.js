const PokemonTypes = ({item}) => {

    let typeColor;

    switch(item.type.name) {
        case 'bug':
            typeColor = {backgroundColor: "#A6B91A"};

            break;
        case 'dragon':
            typeColor = {backgroundColor: "#6F35FC"};
            break;

        case 'electric':
            typeColor = {backgroundColor: "#F7D02C"};
            break;

        case 'fighting': 
            typeColor = {backgroundColor: "#C22E28"};
            break;
        
        case 'fire':
            typeColor = {backgroundColor: "#EE8130"};
            break;

        case 'flying':
            typeColor = {backgroundColor: "#A98FF3"};
        break;

        case 'ghost':
            typeColor = {backgroundColor: "#735797"};
        break;

        case 'grass':
            typeColor = {backgroundColor: "#7AC74C"};
        break;

        case 'ground':
            typeColor = {backgroundColor: "#E2BF65"};
        break;

        case 'ice':
            typeColor = {backgroundColor: "#96D9D6"};
        break;

        case 'normal':
            typeColor = {backgroundColor: "#A8A77A"};
        break;

        case 'poison':
            typeColor = {backgroundColor: "#A33EA1"};
        break;

        case 'psychic':
            typeColor = {backgroundColor: "#F95587"};
        break;

        case 'rock':
            typeColor = {backgroundColor: "#B6A136"};
        break;

        case 'water':
            typeColor = {backgroundColor: "#6390F0"};
        break;

        default: 
            return;
    }


    return ( 
        <div style={typeColor} className="type">
            {item.type.name}
        </div>
     );
}
 
export default PokemonTypes;