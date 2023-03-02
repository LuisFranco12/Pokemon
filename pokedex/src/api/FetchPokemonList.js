export async function FetchPokemonList(changeState, offset, limit) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  
    const response = await fetch(url);
    const data = await response.json();
    const promises = data.results.map(async (pokemon) => {
      const url = pokemon.url;
  
      let response = await fetch(url);
      let data = await response.json();
      return data;
    });
    const pokemonList = await Promise.all(promises);
    changeState(pokemonList);
  }