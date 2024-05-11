import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import MaterialButton from "../MaterialComponents/MaterialButton/MaterialButton";

const RegisterForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .trim("Don't use whitespaces")
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    email: Yup.string()
      .email()
      .trim("Don't use whitespaces")
      .min(3, "Must be at least 3 characters")
      .max(30, "Must be 20 characters or less")
      .required("Required"),
    password: Yup.string()
      .trim("Don't use whitespaces")
      .min(3, "Must be at least 3 characters")
      .max(30, "Must be 15 characters or less")
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
        <Field
          type="text"
          name="name"
          id={nameId}
          className={css.field}
          placeholder="Name"
        />
        <ErrorMessage name="name" component="span" id={`${nameId} error`} />

        <Field
          type="email"
          name="email"
          id={emailId}
          className={css.field}
          placeholder="Email"
        />
        <ErrorMessage name="email" component="span" id={`${emailId} error`} />

        <Field
          type="password"
          name="password"
          id={passwordId}
          className={css.field}
          placeholder="Password"
        />
        <ErrorMessage
          name="password"
          component="span"
          id={`${passwordId} error`}
        />

        <MaterialButton type="submit">Register</MaterialButton>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
