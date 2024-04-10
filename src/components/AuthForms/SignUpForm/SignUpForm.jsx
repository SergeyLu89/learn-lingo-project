import css from './SignUpForm.module.css';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setUser } from '../../../redux/user/userReudcer';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
});

const SignUpForm = ({ closeFnc }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  // const onFormSubmit = ({ name, email, password }, { resetForm }) => {
  //   const auth = getAuth();

  // createUserWithEmailAndPassword(auth, email, password)
  //   .then(({ user }) => {
  //     console.log(user);
  //     dispath(
  //       setUser({
  //         name: user.displayName,
  //         email: user.email,
  //         token: user.accessToken,
  //         id: user.uid,
  //       }),
  //       []
  //     );
  //   })
  const onFormSubmit = ({ name, email, password }, { resetForm }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(user, {
          displayName: name,
        });
        console.log(user);
        return user;
      })
      .then(user => {
        dispatch(
          setUser({
            // name: user.displayName,
            name: name,
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
    alert('Register Succes');
    navigate('/home');
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
