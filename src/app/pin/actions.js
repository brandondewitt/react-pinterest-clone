import * as Pin from 'pin/resource';
import * as ActionTypes from 'pin/actionTypes';

export function find() {
  return {
    types: [ActionTypes.SEND_REQUEST, ActionTypes.RECEIVE_ALL, ActionTypes.SEND_REQUEST_FAILURE],
    callAPI: Pin.find.bind(Pin)
  };
}

export function findById(id) {
  return {
    types: [ActionTypes.SEND_REQUEST, ActionTypes.RECEIVE_ONE, ActionTypes.SEND_REQUEST_FAILURE],
    callAPI: Pin.findById.bind(Pin, id)
  };
}

export function create(pin) {
  return dispatch => {
    return Pin
      .create(pin)
      .catch(response => console.warn(response));
  };
}

export function update(pin) {
  return dispatch => {
    return Pin
      .update(pin)
      .catch(response => console.warn(response));
  };
}

export function destroy(id) {
  return dispatch => {
    return Pin
      .destroy(id)
      .catch(response => console.warn(response));
  };
}
