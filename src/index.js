import React from 'react';
/*
The most common use-case for using the low-level <Router> is to synchronize
a custom history with a state management lib like Redux or Mobx.
Note that this is not required to use state management libs alongside React Router,
it’s only for deep integration.
*/
import { Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Semantic UI https://react.semantic-ui.com/usage
import 'semantic-ui-css/semantic.min.css'

import PrivateRoute from './components/common/PrivateRoute';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import { loadUser } from './actions/auth';
import App from './components/App';
import TodoDelete from './components/todos/TodoDelete';
import TodoEdit from './components/todos/TodoEdit';
import Header from './components/layout/Header';

import store from './store';
import history from './history';

import * as serviceWorker from './serviceWorker';


class MainApp extends React.Component {

    componentDidMount() {
    	store.dispatch(loadUser());
  	}

    render() {
        return (
            <React.StrictMode>
				<Provider store={store}>
					<Router history={history}>
						<Header />
			    		<Switch>
				            <PrivateRoute exact path='/' component={App} />
				            <Route exact path='/delete/:id' component={TodoDelete} />
				            <Route exact path='/edit/:id' component={TodoEdit} />
				            <Route exact path='/login' component={LoginForm} />
				            <Route exact path='/register' component={RegisterForm} />
				         </Switch>
			    	</Router>
				</Provider>
	  		</React.StrictMode>
        );
    }
};


ReactDOM.render(<MainApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();