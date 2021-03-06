import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import { Register } from './accounts/Register';
import { Login } from './accounts/Login';
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser, login } from '../actions/auth';


// Alert OPtions 
const alertOprions = {
    timeout: 3000,
    position: 'top center'
};

class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }
    
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} 
                 {...alertOprions} >
                     <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch> 
                                    <PrivateRoute exact path="/" component={Dashboard} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" render={(props) => <Login {...props} login={login()} />} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        	)
    }
}

ReactDOM.render( <App/>, document.getElementById('app'));