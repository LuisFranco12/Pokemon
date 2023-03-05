import { PaginationContainer } from "../Pagination/Pagination.style"
const Pagination = ({ pokemonPerPage, totalPokemon, paginate}) => {
    const pageNumbers = []
    const numberOfPages = Math.ceil(totalPokemon / pokemonPerPage)
    for(let i= 1; i <= numberOfPages; i++) {
        pageNumbers.push(i)
    }
    return ( 
        <PaginationContainer>
            <nav>
                {
                pageNumbers.map(number => (
                    <button onClick={() => paginate(number)} key={number}>
                        {number}
                    </button>
                ))
                }
            </nav>
        </PaginationContainer>
     );
}
 
export default Pagination;