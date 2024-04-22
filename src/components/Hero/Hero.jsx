import css from './Hero.module.css';
import heroImg from '../../assets/images/heroImage.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className={css.heroWrapper}>
        <div className={css.heroTextContentBox}>
          <h1 className={css.mainTitle}>
            Unlock your potential with the best <span>language</span> tutors
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button
            type="button"
            onClick={() => navigate('/teachers')}
            className={css.heroBtn}
          >
            Get started
          </button>
        </div>
        <img src={heroImg} alt="girl with macbook" />
      </div>
      <ul className={css.herolist}>
        <li className={css.herolistItem}>
          <h2>32,000 +</h2>
          <p>Experienced tutors</p>
        </li>
        <li className={css.herolistItem}>
          <h2>300,000 +</h2>
          <p>5-star tutor reviews</p>
        </li>
        <li className={css.herolistItem}>
          <h2>120 +</h2>
          <p>Subjects taught</p>
        </li>
        <li className={css.herolistItem}>
          <h2>200 +</h2>
          <p>Tutor nationalities</p>
        </li>
      </ul>
    </section>
  );
};
export default Hero;
