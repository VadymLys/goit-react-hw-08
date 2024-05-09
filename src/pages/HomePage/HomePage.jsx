import { NavLink } from "react-router-dom";
import { DocumentTitle } from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={css.container}>
        <DocumentTitle>Home</DocumentTitle>
        <h1 className={css.title}> Task manager welcome page </h1>
        <p className={css.link}>
          Do you want to{" "}
          <NavLink to="/register" className={css.span}>
            Register
          </NavLink>{" "}
          or{" "}
          <NavLink to="/login" className={css.span}>
            Log In
          </NavLink>{" "}
          ?
        </p>
      </div>
    </>
  );
}
