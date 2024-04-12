// import css from './AuthNavigatin.module.css';
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
          onClick={() => {
            signOut(auth);
            dispatch(removeUser());
          }}
        >
          Log out
        </button>
      ) : (
        <div>
          <button
            type="butoon"
            onClick={() => {
              openModal();
              setOnLogInClick(true);
            }}
          >
            Log in
          </button>
          <button type="butoon" onClick={openModal}>
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
