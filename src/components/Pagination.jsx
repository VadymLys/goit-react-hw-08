import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectPagination } from "../redux/contacts/selectors";
import MaterialButton from "./MaterialComponents/MaterialButton/MaterialButton";

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
      console.log("Fetching contacts for page:", newPage, perPage);
      dispatch(fetchContacts({ page: newPage, perPage }));
    }
  };

  console.log("Pagination state:", {
    page,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  });

  return (
    <div>
      <MaterialButton
        onClick={() => handleChangePage(page - 1)}
        disabled={!hasPreviousPage}
      >
        Previous
      </MaterialButton>
      <span>{`Page ${page} of ${totalPages}`}</span>
      <MaterialButton
        onClick={() => handleChangePage(page + 1)}
        disabled={!hasNextPage}
      >
        Next
      </MaterialButton>
      <span>
        {`Showing ${perPage} items per page out of ${totalItems} total`}
      </span>
    </div>
  );
};

export default Pagination;
