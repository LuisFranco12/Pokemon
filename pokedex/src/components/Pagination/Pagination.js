const Pagination = ({ pokemonPerPage, totalPokemon, paginate }) => {
    const pageNumbers = []

    for(let i= 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
        pageNumbers.push(i)
    }
    return ( 
        <nav>
            {
            pageNumbers.map(number => (
                <button onClick={() => paginate(number)} key={number}>
                    {number}
                </button>
            ))
            }
        </nav>
     );
}
 
export default Pagination;