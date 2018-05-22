import { Map, fromJS } from 'immutable';
import {
  UPDATE_JOINED,
  UPDATE_STATE,
} from './actions';

const initialState = Map({
  joined: false,
});

const reducer = (state = initialState, action) => {
  const data = action.payload;

  switch (action.type) {
    case UPDATE_STATE:
      return state.mergeDeep(fromJS(data));

    case UPDATE_JOINED:
      return state.set('joined', data);

    default:
      return state;
  }
};

export default reducer;
