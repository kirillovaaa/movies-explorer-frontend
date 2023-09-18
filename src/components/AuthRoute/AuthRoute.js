import { Navigate } from "react-router-dom";

const AuthRoute = ({ element: Component, isLoggedIn }) => {
  if (isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }
  return Component;
};

export default AuthRoute;
