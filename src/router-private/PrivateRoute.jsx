import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import SignUp from "layouts/SignUp";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        if (localStorage.getItem("jwtToken")) {           
            if (props.location.pathname === '/login') {
                return <Redirect from="/login" to="/admin/dashboard" />
            }

            return <Component {...props} />
        }

        if (props.location.pathname === '/login') {
            return <Component {...props} />
        }
        
        return <Redirect to="/login" />
    }
    } />
);
export default PrivateRoute;