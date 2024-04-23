import css from './SignInForm.module.css';
import sprite from '../../../assets/sprite.svg';
import toast from 'react-hot-toast';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setUser } from '../../../redux/user/userReudcer';
import { useState } from 'react';

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
  const [showPassword, setShowPassword] = useState(false);

  const onFormSubmit = ({ email, password }, { resetForm }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        dispatch(setUser(user));
      })
      .catch(console.error);
    resetForm();
    closeFnc();
    toast('Welcome');
    navigate('/home');
  };
  return (
    <div className={css.loginWrapper}>
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
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default SignInForm;
