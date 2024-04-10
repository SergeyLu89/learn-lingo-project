import css from './SignInForm.module.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setUser } from '../../../redux/user/userReudcer';

const initialValues = {
  email: '',
  password: '',
};
const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(16).required(),
});

const SignInForm = ({ closeFnc }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFormSubmit = ({ email, password }, { resetForm }) => {
    console.log('email: ', email);
    console.log('password: ', password);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log('user: ', user);
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          }),
          []
        );
      })
      .catch(console.error);
    resetForm();
    closeFnc();
    alert('Hello');
    navigate('/home');
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
