import { MutationTree } from 'vuex';
import { PokeFavStates } from './state';

const mutation: MutationTree<PokeFavStates> = {
  setPokemonNameMutation (state: PokeFavStates, name ) {
    state.pokefavs.push(name);
  }
};

export default mutation;