import axios from 'axios';

export async function getDataFromPokeApi() {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        return response.data.results
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
}

export async function getOnePokeData(pokemon: string) {
  try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemon);
      return response.data
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}