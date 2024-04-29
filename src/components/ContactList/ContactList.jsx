import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { selectVisibleContacts } from "../../redux/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
