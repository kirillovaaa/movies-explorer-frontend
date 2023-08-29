import { Navigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import "./ProtectedRoute.css";

const ProtectedRoute = ({ element: Component, isLoggedIn, isAppLoading }) => {
  if (isAppLoading) {
    return (
      <div className="preloader-wrapper">
        <Preloader />
      </div>
    );
  }
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace={true} />;
  }
  return Component;
};

export default ProtectedRoute;
