import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PokeFavStates } from './state';

const getters: GetterTree<PokeFavStates, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
