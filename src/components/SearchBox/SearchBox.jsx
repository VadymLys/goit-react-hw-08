import { useDispatch, useSelector } from "react-redux";
import { changeNameFilter } from "../../redux/filters/slice";
import MaterialInput from "../MaterialComponents/MaterialInput/MaterialInput";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(changeNameFilter(evt.target.value.toLowerCase()));
  };
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <MaterialInput
        type="text"
        name="search"
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
