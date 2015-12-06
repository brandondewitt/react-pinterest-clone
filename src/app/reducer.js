import { createHistory } from 'history';
import {
  routerStateReducer,
  reduxReactRouter
} from 'redux-router';
import thunk from 'redux-thunk';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { devTools, persistState } from 'redux-devtools';

import apiMiddleware from 'redux/middleware/api';

import pin from 'pin/reducer';

let middleware = [thunk, apiMiddleware];

const reducer = combineReducers({
  router: routerStateReducer,
  pin,
  form: formReducer
});

export const store = compose(
  applyMiddleware(...middleware),
  reduxReactRouter({ createHistory }),
  devTools(),
)(createStore)(reducer);
