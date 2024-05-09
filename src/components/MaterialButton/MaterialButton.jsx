import Button from "@mui/material/Button";

export default function MaterialButton({ children, onClick, type }) {
  return (
    <>
      <Button variant="contained" onClick={onClick} type={type}>
        {children}
      </Button>
    </>
  );
}
