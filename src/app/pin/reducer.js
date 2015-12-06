import * as ActionTypes from 'pin/actionTypes';
export const initialState = {
  loading: false,
  list: [],
  listItem: {}
};

export default function pin(state = initialState, action) { //jshint ignore:line
  switch (action.type) {
    case ActionTypes.SEND_REQUEST:
      return Object.assign({}, initialState, { loading: true  });
    case ActionTypes.RECEIVE_ALL:
      return Object.assign({}, state, {
        loading: false,
        list: action.response,
      });
    case ActionTypes.RECEIVE_ONE:
      return Object.assign({}, state, {
        loading: false,
        listItem: action.response
      });
    default:
      return state;
  }
}
