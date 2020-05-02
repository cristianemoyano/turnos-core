/*
The Store is an object to hold the state of our application.
In addition, we will use the recommended middleware Redux Thunk
to write async logic that interacts with the store.

Use of Redux DevTools is optional, but it is very useful because
it visualizes the state changes of Redux.
*/
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
