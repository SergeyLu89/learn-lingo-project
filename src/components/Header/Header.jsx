import css from './Header.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import SignInForm from 'components/AuthForms/SignInForm/SignInForm';
import SignUpForm from 'components/AuthForms/SignUpForm/SignUpForm';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/user/userReudcer';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useAuth();
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

      {isAuth ? (
        <button onClick={() => dispatch(removeUser())}>Log out</button>
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
    </nav>
  );
};
export default Header;
