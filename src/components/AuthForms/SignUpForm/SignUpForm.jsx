import css from './SignUpForm.module.css';
import sprite from '../../../assets/sprite.svg';
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
import { useState } from 'react';

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
  const [showPassword, setShowPassword] = useState(false);

  const onFormSubmit = ({ name, email, password }, { resetForm }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;

        console.log('user: ', user);

        updateProfile(user, {
          displayName: name,
        });
        dispatch(setUser(user));
      })
      .catch(console.error);
    resetForm();
    closeFnc();
    // alert('Register Succes');
    navigate('/home');
  };
  return (
    <div className={css.registrationWrapper}>
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
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className={css.formInput}
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.inputError}
          />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={css.formInput}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.inputError}
          />
          <div className={css.passwordInputWrapper}>
            <Field
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className={`${css.formInput} ${css.formInputPass}`}
            />
            {showPassword ? (
              <svg
                width="20"
                height="20"
                aria-label="eye icon"
                fill="transparent"
                stroke="#121417"
                className={css.inputIcon}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <use href={sprite + '#icon-eye-on'}></use>
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                aria-label="eye icon"
                fill="transparent"
                stroke="#121417"
                className={css.inputIcon}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <use href={sprite + '#icon-eye-off'}></use>
              </svg>
            )}
          </div>
          <ErrorMessage
            name="password"
            component="span"
            className={css.inputError}
          />

          <button type="submit" className={css.formBtn}>
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default SignUpForm;
