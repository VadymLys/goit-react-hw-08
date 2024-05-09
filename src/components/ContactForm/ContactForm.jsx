import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import MaterialButton from "../MaterialButton/MaterialButton";

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
    toast.success("Yey, you add new contact");
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
          <Field
            type="text"
            name="name"
            id={nameId}
            className={css.field}
            placeholder="Name"
          />
          <ErrorMessage
            name="name"
            component="span"
            id={`${nameId} error`}
            className={css.error}
          />
        </div>
        <div>
          <Field
            type="tel"
            name="number"
            id={numberId}
            className={css.field}
            placeholder="Phone number"
          />
          <ErrorMessage
            name="number"
            component="span"
            id={`${numberId} error`}
            className={css.error}
          />
        </div>

        <MaterialButton type="submit" className={css.btn}>
          Add contact
        </MaterialButton>
        <Toaster position="top-right" />
      </Form>
    </Formik>
  );
};

export default ContactForm;
