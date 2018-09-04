import reducer from '../../utils/reducer';
import {types} from './actions.js';

const initState = {};

export default reducer(initState, {

  [types.FILL]: (state, action) => {
    return {...state, [action.payload.id]: action.payload.title};
  },
  
  [types.CHANGE]: (state, action) => {
    return {...state, [action.payload.id]: action.payload.title};
  },

  [types.CLOSE]: (state, action) => {
    if (state.name) {
      return {
        ...state,
        show: false,
        result: action.payload.result,
        resolve: null
      };
    } else {
      return state;
    }
  }
});
