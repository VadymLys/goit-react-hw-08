import Button from "@mui/material/Button";

export default function MaterialButton({ children }) {
  return (
    <>
      <Button variant="contained">{children}</Button>;
    </>
  );
}
