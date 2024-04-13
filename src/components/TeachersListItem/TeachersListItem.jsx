import css from './TeachersListItem.module.css';
import sprite from '../../assets/sprite.svg';
import { defaultAvatar } from 'helpers/defaultImg';
import { useDispatch } from 'react-redux';

const TeachersListItem = ({ teacher }) => {
  const dispatch = useDispatch();

  // const onFavoriteToggle = () => {
  //   dispatch(
  //     isFavorite ? removeFavoriteAdvert(advert) : addFavoriteAdvert(advert)
  //   );
  // };
  const {
    avatar_url,
    conditions,
    experience,
    languages,
    lesson_info,
    lessons_done,
    levels,
    name,
    price_per_hour,
    rating,
    reviews,
    surname,
  } = teacher;
  return (
    <>
      <li className={css.teachersListItem}>
        <button
          type="button"
          className={css.favoriteBtn}
          // onClick={onFavoriteToggle}
        >
          {/* <FavoriteSvg
            fill={isFavorite ? 'rgba(52, 112, 255, 1)' : 'transparent'}
            stroke={isFavorite ? 'rgba(52, 112, 255, 1)' : 'white'}
          /> */}
          <svg>
            <use href={sprite + '#icon-heart'}></use>
          </svg>
        </button>

        <img
          src={avatar_url ? avatar_url : defaultAvatar}
          alt={`${name} ${surname}`}
          className={css.listItemImg}
        />
        <div>
          <div>
            <p>Languages</p>
            <ul>
              <li>Lessons online</li>
              <li>Lessons done: {lessons_done}</li>
              <li>Rating: {rating}</li>
              <li>
                Price / 1 hour: <span>{price_per_hour}$</span>
              </li>
            </ul>
          </div>
        </div>
        <h3>
          {name} {surname}
        </h3>
        <ul>
          <li>
            <span>Speaks:</span>
            {languages.join(', ')}
          </li>
          <li>
            <span>Lesson Info:</span>
            {lesson_info}
          </li>
          <li>
            <span>Conditions:</span>
            {conditions}
          </li>
        </ul>
        <button type="button">Read more</button>
        <div>
          <p>{experience}</p>
          <ul>
            {reviews?.map((rewiew, index) => (
              <li key={index}>
                <img src="" alt="" />
                <p>{rewiew.reviewer_name}</p>
                <p>{rewiew.reviewer_rating}</p>
                <p>{rewiew.comment}</p>
              </li>
            ))}
          </ul>
        </div>
        <ul>
          {levels?.map((level, index) => (
            <li key={index}>{level}</li>
          ))}
        </ul>
        <button type="button">Book trial lesson</button>
      </li>
    </>
  );
};
export default TeachersListItem;
