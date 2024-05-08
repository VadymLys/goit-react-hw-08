import TextField from "@mui/material/TextField";

const MaterialInput = ({ type, value, onChange, id }) => {
  return (
    <>
      <TextField
        variant="standard"
        type={type}
        value={value}
        onChange={onChange}
        id={id}
      />
    </>
  );
};

export default MaterialInput;
