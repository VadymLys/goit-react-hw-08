import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import { useAuth } from "../../hooks/useAuth";
import { refreshUser } from "../../redux/auth/operations";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage";
import css from "../App/App.module.css";
import { Loader } from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn, token } = useAuth();

  useEffect(() => {
    console.log("Token in localStorage:", token);
    if (!isRefreshing && !isLoggedIn && token) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn, isRefreshing, token]);

  return (
    <div className={css.container}>
      <Layout>
        {isRefreshing ? (
          <b>
            <Loader />
          </b>
        ) : (
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              />

              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              />
            </Routes>
          </Suspense>
        )}
      </Layout>
    </div>
  );
};
export default App;
