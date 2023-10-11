import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PokeFavStates } from './state';

const actions: ActionTree<PokeFavStates, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
