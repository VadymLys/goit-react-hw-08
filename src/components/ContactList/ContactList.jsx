import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Pagination from "../Pagination/Pagination";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <li key={contact.id || contact.name}>
            <Contact id={contact.id} contact={contact} />
          </li>
        ))}
      </ul>
      <div className={css.pagination}>
        <Pagination />
      </div>
    </>
  );
};

export default ContactList;
