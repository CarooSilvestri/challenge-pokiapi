export interface PokeFavStates {
  pokefavs: Array<String>;
}

function state(): PokeFavStates {
  return {
    pokefavs: []
  }
}

export default state;
