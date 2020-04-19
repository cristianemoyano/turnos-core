import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'

import App from './components/App';
import TodoDelete from './components/todos/TodoDelete';
import TodoEdit from './components/todos/TodoEdit';
import Header from './components/layout/Header'; // added

import store from './store';
import history from './history';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
		<Provider store={store}>
			<Router history={history}>
				<Header />
	    		<Switch>
		            <Route exact path='/' component={App} />
		            <Route exact path='/delete/:id' component={TodoDelete} />
		            <Route exact path='/edit/:id' component={TodoEdit} />
		         </Switch>
	    	</Router>
		</Provider>
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();