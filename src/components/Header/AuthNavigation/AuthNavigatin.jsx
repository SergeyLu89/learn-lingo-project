import css from './AuthNavigatin.module.css';
import sprite from '../../../assets/sprite.svg';
import { removeUser } from '../../../redux/user/userReudcer';
import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import Modal from 'components/Modal/Modal';
import SignInForm from 'components/AuthForms/SignInForm/SignInForm';
import SignUpForm from 'components/AuthForms/SignUpForm/SignUpForm';

const AuthNavigatin = () => {
  const dispatch = useDispatch();
  const isAuth = useAuth();
  const auth = getAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [onLogInClick, setOnLogInClick] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isAuth ? (
        <button
          className={css.logBtn}
          onClick={() => {
            signOut(auth);
            dispatch(removeUser());
          }}
        >
          <svg width="20" height="20" aria-label="log-in icon">
            <use href={sprite + '#icon-log-out'}></use>
          </svg>
          Log out
        </button>
      ) : (
        <div className={css.authNavBtnBox}>
          <button
            className={css.logBtn}
            type="butoon"
            onClick={() => {
              openModal();
              setOnLogInClick(true);
            }}
          >
            <svg width="20" height="20" aria-label="log-in icon">
              <use href={sprite + '#icon-log-in'}></use>
            </svg>
            Log in
          </button>
          <button type="butoon" onClick={openModal} className={css.registerBtn}>
            Registration
          </button>
        </div>
      )}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          closeFnc={() => {
            closeModal();
            setOnLogInClick(false);
          }}
        >
          {onLogInClick ? (
            <SignInForm closeFnc={closeModal} />
          ) : (
            <SignUpForm closeFnc={closeModal} />
          )}
        </Modal>
      )}
    </>
  );
};
export default AuthNavigatin;
