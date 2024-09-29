import css from "../Contact/Contact.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import MaterialButton from "../MaterialComponents/MaterialButton/MaterialButton";
import toast, { Toaster } from "react-hot-toast";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact._id));
    toast.success("You're deleted your contact");
  };

  return (
    <div className={css.contactContainer}>
      <div>
        <p className={css.userdata}>
          <FaUserLarge />
          {contact.name}
        </p>
        <p className={css.userdata}>
          <FaPhoneAlt />
          {contact.phoneNumber}
        </p>
      </div>
      <MaterialButton
        className={css.btn}
        type="button"
        onClick={handleDeleteContact}
      >
        Delete
      </MaterialButton>
      <Toaster position="top-right" />
    </div>
  );
};

export default Contact;
