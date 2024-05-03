import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector((state) => state.filters.name);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        name="search"
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
