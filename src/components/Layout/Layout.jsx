import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import css from "../Layout/Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={css.styles}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
