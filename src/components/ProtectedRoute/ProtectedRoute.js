import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }
  return Component;
};

export default ProtectedRoute;
