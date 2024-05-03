import { DocumentTitle } from "../../components/DocumentTitle";
import css from "../HomePage/HomePage.module.css";
export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div style={css.container}>
        <h1 style={css.title}>Task manager welcome page </h1>
      </div>
    </>
  );
}
