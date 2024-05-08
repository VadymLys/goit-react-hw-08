import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "../RegisterForm/RegisterForm.module.css";
import MaterialButton from "../MaterialButton/MaterialButton";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .trim("Don't use whitespaces")
      .required("Required"),
    password: Yup.string().trim("Don't use whitespaces").required("Required"),
  });

  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <label htmlFor={emailId} className={css.label}>
          Email
        </label>
        <Field type="email" name="email" id={emailId}></Field>
        <ErrorMessage name="email" component="span" id={`${emailId} error`} />

        <label htmlFor={passwordId} className={css.label}>
          Password
        </label>
        <Field type="password" name="password" id={passwordId}></Field>
        <ErrorMessage
          name="password"
          component="span"
          id={`${passwordId} error`}
        />

        <MaterialButton type="submit">Log In</MaterialButton>
      </Form>
    </Formik>
  );
};
