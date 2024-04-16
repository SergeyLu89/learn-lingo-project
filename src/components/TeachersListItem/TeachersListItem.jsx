import css from './TeachersListItem.module.css';
import sprite from '../../assets/sprite.svg';
import { defaultAvatar } from 'helpers/defaultImg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesTeachers } from '../../redux/favoritesTeachers/favoritesTeachersSelectors';
import { selectUserIsLoggedIn } from '../../redux/user/userSelectors';
import {
  addFavoriteTeacher,
  removeFavoriteTeacher,
} from '../../redux/favoritesTeachers/favoritesTeachersReducer';

const TeachersListItem = ({ teacher }) => {
  const dispatch = useDispatch();
  const favoritesTeachers = useSelector(selectFavoritesTeachers);
  const isLogin = useSelector(selectUserIsLoggedIn);

  const isFavorite = favoritesTeachers?.some(
    favoriteteacher => favoriteteacher.id === teacher.id
  );

  const onFavoriteToggle = () => {
    console.log('favoritesTeachers: ', favoritesTeachers);
    dispatch(
      isFavorite ? removeFavoriteTeacher(teacher) : addFavoriteTeacher(teacher)
    );
  };
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
        {/* <button
          type="button"
          className={css.favoriteBtn}
          onClick={onFavoriteToggle}
        >
          <svg
            width="26"
            height="26"
            aria-label="heart icon"
            fill={isFavorite ? '#FFC531' : 'transparent'}
            stroke={isFavorite ? '#FFC531' : '#121417'}
          >
            <use href={sprite + '#icon-heart'}></use>
          </svg>
        </button> */}
        <div className={css.avatarBox}>
          <img
            src={avatar_url ? avatar_url : defaultAvatar}
            alt={`${name} ${surname}`}
            className={css.avatarImg}
          />
          <svg
            width="12"
            height="12"
            aria-label="online status icon"
            className={css.onlineStatusIcon}
          >
            <use href={sprite + '#icon-online'}></use>
          </svg>
        </div>
        <div className={css.descriptionBox}>
          <div>
            <div>
              <p>Languages</p>
              <h3>
                {name} {surname}
              </h3>
            </div>
            <div className={css.lessonsInfoBox}>
              <ul className={css.lessonsInfoList}>
                <li className={css.lessonsInfoListItem}>
                  <svg
                    width="16"
                    height="16"
                    aria-label="book icon"
                    fill="transparent"
                    stroke="#121417"
                  >
                    <use href={sprite + '#icon-book'}></use>
                  </svg>
                  Lessons online
                </li>
                <li>Lessons done: {lessons_done}</li>
                <li className={css.lessonsInfoListItem}>
                  <svg width="16" height="16" aria-label="star icon">
                    <use href={sprite + '#icon-star'}></use>
                  </svg>
                  Rating: {rating}
                </li>
                <li>
                  Price / 1 hour:{' '}
                  <span className={css.lessonsInfoListItemAccent}>
                    {price_per_hour}$
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className={css.favoriteBtn}
                onClick={() => {
                  isLogin
                    ? onFavoriteToggle()
                    : alert('Оnly authorized users can add cards to favorites');
                }}
              >
                <svg
                  width="26"
                  height="26"
                  aria-label="heart icon"
                  fill={isFavorite ? '#FFC531' : 'transparent'}
                  stroke={isFavorite ? '#FFC531' : '#121417'}
                >
                  <use href={sprite + '#icon-heart'}></use>
                </svg>
              </button>
            </div>
          </div>
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
        </div>
      </li>
    </>
  );
};
export default TeachersListItem;
