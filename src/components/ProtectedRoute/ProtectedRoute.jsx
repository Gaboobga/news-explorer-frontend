import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, isLoggedIn, onLoginClick, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component {...props} {...rest} isLoggedIn={isLoggedIn} />;
        }
        onLoginClick();
        return <Redirect to="/" />;
      }}
    />
  );
}

export default ProtectedRoute;