import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => {
    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem("token")) {
                    return <Component {...props} />;
                }
                return <Redirect to="/" />;
            }}
        />
    );
};

export default PrivateRoute;