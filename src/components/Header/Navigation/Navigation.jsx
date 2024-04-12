import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const Navigatin = () => {
  const isAuth = useAuth();
  console.log('isAuth: ', isAuth);

  return (
    <nav>
      <ul className={css.navLinkList}>
        <li className={css.navLinkItem}>
          <NavLink
            className={({ isActive }) =>
              ` ${isActive ? css.active : css.headerNavLink}`
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={css.navLinkItem}>
          <NavLink
            className={({ isActive }) =>
              ` ${isActive ? css.active : css.headerNavLink}`
            }
            to="/teachers"
          >
            Teachers
          </NavLink>
        </li>
        {isAuth && (
          <li className={css.navLinkItem}>
            <NavLink
              className={({ isActive }) =>
                ` ${isActive ? css.active : css.headerNavLink}`
              }
              to="/favorites"
            >
              Favorites
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigatin;
