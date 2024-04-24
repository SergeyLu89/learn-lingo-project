import css from './EmptyPage.module.css';
import * as heroImage from '../../assets/images/heroImage/index';

const EmptyPage = () => {
  return (
    <div className={css.emptyImageBox}>
      <img
        srcSet={`${heroImage.heroImgPng} 1x, ${heroImage.heroImgPng2x} 2x`}
        src={heroImage.heroImgPng}
        alt="girl with macbook"
      />
      <p className={css.favoriteDescr}>
        You don't have any favorite teachers yet
      </p>
    </div>
  );
};

export default EmptyPage;
