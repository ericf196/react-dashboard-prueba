import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
//import rootReducer from './rootReducer';
//Reducer
import reducers from './reducers'

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";
import SignUp from "layouts/SignUp";



import "assets/css/material-dashboard-react.css?v=1.6.0";

import PrivateRoute from "./router-private/PrivateRoute"

const hist = createBrowserHistory();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

  ReactDOM.render(
    <Provider store={store} >
      <Router history={hist}>
        <Switch>           
          <PrivateRoute exact path="/login" component={SignUp} />   
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute path="/rtl" component={RTL} />                  
                                            
          <Redirect to="/login" />        
        </Switch>
      </Router>
    </Provider>,
    document.getElementById("root")
  );

