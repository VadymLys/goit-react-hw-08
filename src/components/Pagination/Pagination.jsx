import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectPagination } from "../../redux/contacts/selectors";
import MaterialButton from "../MaterialComponents/MaterialButton/MaterialButton";
import css from "./Pagination.module.css";
const Pagination = () => {
  const dispatch = useDispatch();

  const {
    page,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    perPage,
    totalItems,
  } = useSelector(selectPagination);

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(fetchContacts({ page: newPage, perPage }));
    }
  };

  return (
    <div>
      <MaterialButton
        onClick={() => handleChangePage(page - 1)}
        disabled={!hasPreviousPage}
      >
        Previous
      </MaterialButton>
      <span className={css.spanCount}>{`Page ${page} of ${totalPages}`}</span>
      <MaterialButton
        onClick={() => handleChangePage(page + 1)}
        disabled={!hasNextPage}
      >
        Next
      </MaterialButton>
      <span className={css.spanCount}>
        {`Showing ${perPage} items per page out of ${totalItems} total`}
      </span>
    </div>
  );
};

export default Pagination;
