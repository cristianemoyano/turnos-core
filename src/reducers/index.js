/*
Reducers:
specify how the application’s state changes in response to actions sent to the store.

This index.js is the parent reducer and to put together every child reducer
we'll use combineReducers().
*/
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todos from './todos';

export default combineReducers({
  form: formReducer,
  todos
});
