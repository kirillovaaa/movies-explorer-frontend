import { Navigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import "../ProtectedRoute/ProtectedRoute.css";

const AuthRoute = ({ element: Component, isLoggedIn, isAppLoading }) => {
  if (isAppLoading) {
    return (
      <div className="preloader-wrapper">
        <Preloader />
      </div>
    );
  }

  if (isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }
  return Component;
};

export default AuthRoute;
