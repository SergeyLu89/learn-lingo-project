import css from './EmptyPage.module.css';
import heroImg from '../../assets/images/heroImage.png';

const EmptyPage = () => {
  return (
    <div className={css.emptyImageBox}>
      <img className={css.emptyImg} src={heroImg} alt="girl with macbook" />
      <p className={css.favoriteDescr}>
        You don't have any favorite teachers yet
      </p>
    </div>
  );
};

export default EmptyPage;
