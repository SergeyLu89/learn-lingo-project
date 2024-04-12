import css from './Header.module.css';
import Navigation from 'components/Header/Navigation/Navigation';
import AuthNavigatin from 'components/Header/AuthNavigation/AuthNavigatin';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <section className={css.header}>
      <Logo />
      <Navigation />
      <AuthNavigatin />
    </section>
  );
};
export default Header;
