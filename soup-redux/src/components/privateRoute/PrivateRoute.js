/*import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
export default PrivateRoute;
*/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, errorStatusCode, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token') && errorStatusCode !== 403) {
          return <Component {...props} />;
        } else {
          // redirect to login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const mapStateToProps = ({ errorStatusCode }) => ({
  errorStatusCode
});

export default connect(
  mapStateToProps,
  {}
)(PrivateRoute);
