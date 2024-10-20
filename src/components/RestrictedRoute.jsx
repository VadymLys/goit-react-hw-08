import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Loader } from "./Loader/Loader";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  if (isRefreshing) {
    <b>
      <Loader />
    </b>;
  }

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
