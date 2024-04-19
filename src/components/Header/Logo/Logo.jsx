import css from './Logo.module.css';
import { Link } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';

const Logo = () => {
  return (
    <>
      <Link to="/" className={css.logo}>
        <svg width="28" height="28" aria-label="ukraine icon">
          <use href={sprite + '#icon-ukraine'}></use>
        </svg>
        LearnLingo
      </Link>
    </>
  );
};
export default Logo;
