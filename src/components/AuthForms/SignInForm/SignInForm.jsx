import css from './SignInForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};
const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(16).required(),
});

const SignInForm = () => {
  const onFormSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <>
      <h2>Log In</h2>
      <p>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onFormSubmit}
      >
        <Form autoComplete="off" className={css.signInForm}>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="span" />

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="span" />

          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};
export default SignInForm;
