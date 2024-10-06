import { useEffect } from "react";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { DocumentTitle } from "../../components/DocumentTitle";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts({ page: 2, perPage: 15 }));
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>Your Contacts</DocumentTitle>

      <div>{isLoading && "Request in progress.."}</div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
