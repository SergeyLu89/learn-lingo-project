import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
        to="/catalog"
      >
        Catalog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          ` ${isActive ? css.active : css.headerNavLink}`
        }
        to="/favorites"
      >
        Favorites
      </NavLink>
      <button type="butoon">Log in</button>
      <button type="butoon">Registration</button>
    </nav>
  );
};
export default Header;
