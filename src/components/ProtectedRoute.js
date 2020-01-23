//explained here https://tylermcginnis.com/react-router-protected-routes-authentication/

import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isVerifying ? (
        <div />
      ) : isAuthenticated ? (
        //Rendera <Component/>
        <Component {...props} />
      ) : (
        // Eller åk tillbaka till login
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
export default ProtectedRoute;

// useState: Persist value between renders, trigger re - render
// useRef: Persist value between renders, no re - render
// useEffect: Side effects that run after render
// useReducer: useState in reducer pattern
// useMemo: Memoize value between renders
// useCB: Persist ref equality between renders
