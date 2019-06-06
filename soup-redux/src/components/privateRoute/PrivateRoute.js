import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={() => {
//         if (localStorage.getItem('token')) {
//           return <Component />;
//         } else {
//           return <Redirect to="/login" />;
//         }
//       }}
//     />
//   );
// };



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