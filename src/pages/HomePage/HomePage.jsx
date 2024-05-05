import { DocumentTitle } from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={css.container}>
        <DocumentTitle>Home</DocumentTitle>
        <h1 className={css.title}> Task manager welcome page </h1>
      </div>
    </>
  );
}
