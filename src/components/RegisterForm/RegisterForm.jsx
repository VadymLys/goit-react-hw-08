import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";

const RegisterForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const FeedbackSchema = Yup.object.shape({
    name: Yup.string()
      .trim("Don't use whitespaces")
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    email: Yup.string()
      .email()
      .trim("Don't use whitespaces")
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be 20 characters or less")
      .required("Required"),
    password: Yup.string()
      .trim("Don't use whitespaces")
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
  });

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label htmlFor={nameId} className={css.label}>
          Name
        </label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="span" id={`${nameId} error`} />

        <label htmlFor={emailId} className={css.label}>
          Email
        </label>
        <Field type="email" name="email" id={emailId} />
        <ErrorMessage name="email" component="span" id={`${emailId} error`} />

        <label htmlFor={passwordId} className={css.label}>
          Password
        </label>
        <Field type="password" name="password" id={passwordId} />
        <ErrorMessage
          name="password"
          component="span"
          id={`${passwordId} error`}
        />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
