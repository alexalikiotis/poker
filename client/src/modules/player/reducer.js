import { Map, List, fromJS } from 'immutable';
import {
  UPDATE_STATE,
} from './actions';

const initialState = Map({
  hand: List([]),
  selected: List([]),
});

const reducer = (state = initialState, action) => {
  const data = action.payload;

  switch (action.type) {
    case UPDATE_STATE:
      return state.mergeDeep(fromJS(data));

    default:
      return state;
  }
};

export default reducer;
