import css from './Header.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import SignInForm from 'components/AuthForms/SignInForm/SignInForm';
import SignUpForm from 'components/AuthForms/SignUpForm/SignUpForm';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onLogInClick, setOnLogInClick] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <nav className={css.header}>
      <NavLink to="/">LOGO</NavLink>
      <NavLink
        className={({ isActive }) =>
          ` ${isActive ? css.active : css.headerNavLink}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          ` ${isActive ? css.active : css.headerNavLink}`
        }
        to="/teachers"
      >
        Teachers
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          ` ${isActive ? css.active : css.headerNavLink}`
        }
        to="/favorites"
      >
        Favorites
      </NavLink>
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
      {isOpen && (
        <Modal
          isOpen={isOpen}
          closeFnc={() => {
            closeModal();
            setOnLogInClick(false);
          }}
        >
          {onLogInClick ? <SignInForm /> : <SignUpForm />}
        </Modal>
      )}
    </nav>
  );
};
export default Header;
