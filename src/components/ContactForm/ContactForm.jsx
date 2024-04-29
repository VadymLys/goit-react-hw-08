import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const nameId = useId();
  const numberId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .trim("Don't use whitespaces")
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    number: Yup.string()
      .trim("Don't use whitespaces")
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.containerBook}>
        <div>
          <label htmlFor={nameId}>name</label>
          <Field type="text" name="name" id={nameId} className={css.field} />
          <ErrorMessage
            name="name"
            component="span"
            id={`${nameId} error`}
            className={css.error}
          />
        </div>
        <div>
          <label htmlFor={numberId}>number</label>
          <Field type="tel" name="number" id={numberId} className={css.field} />
          <ErrorMessage
            name="number"
            component="span"
            id={`${numberId} error`}
            className={css.error}
          />
        </div>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
