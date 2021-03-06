export const UPDATE_JOINED = 'UPDATE_JOINED';
export const UPDATE_STATE = 'UPDATE_TABLE_STATE';
export const RESET = 'RESET_TABLE';

export const updateJoined = bool => ({
  type: UPDATE_JOINED,
  payload: bool,
});

export const updateState = state => ({
  type: UPDATE_STATE,
  payload: state,
});

export const resetState = () => ({
  type: RESET,
});
