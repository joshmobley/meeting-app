import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, user, ...rest }) => {
    
    return (
        <Route
      {...rest}
      render={props =>
        !user.email ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
    


export default PublicRoute;