import css from './SignUpForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(16).required(),
});

const SignUpForm = () => {
  const onFormSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <>
      <h2>Registration</h2>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onFormSubmit}
      >
        <Form autoComplete="off" className={css.signUpForm}>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="span" />

          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="span" />

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="span" />

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </>
  );
};
export default SignUpForm;
