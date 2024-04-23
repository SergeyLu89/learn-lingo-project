import css from './TeachersListItem.module.css';
import sprite from '../../assets/sprite.svg';
import { defaultAvatar } from 'assets/images/defaultImg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesTeachers } from '../../redux/favoritesTeachers/favoritesTeachersSelectors';
import { selectUserIsLoggedIn } from '../../redux/user/userSelectors';
import {
  addFavoriteTeacher,
  removeFavoriteTeacher,
} from '../../redux/favoritesTeachers/favoritesTeachersReducer';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import TrialLessonFormComponent from 'components/TrialLessonFormComponent/TrialLessonFormComponent';
import toast, { Toaster } from 'react-hot-toast';

const TeachersListItem = ({ teacher }) => {
  const dispatch = useDispatch();
  const favoritesTeachers = useSelector(selectFavoritesTeachers);
  const isLogin = useSelector(selectUserIsLoggedIn);
  const [isReadMore, setIsReadMore] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const isFavorite = favoritesTeachers?.some(
    favoriteteacher => favoriteteacher.id === teacher.id
  );

  const onFavoriteToggle = () => {
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
          <div className={css.languagesBox}>
            <div className={css.nameBox}>
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
                  <p>Lessons online</p>
                </li>
                <li className={css.lessonsInfoListItem}>
                  <p>Lessons done: {lessons_done}</p>
                </li>
                <li className={css.lessonsInfoListItem}>
                  <svg width="16" height="16" aria-label="star icon">
                    <use href={sprite + '#icon-star'}></use>
                  </svg>
                  <p>Rating: {rating}</p>
                </li>
                <li>
                  <p>
                    Price / 1 hour:{' '}
                    <span className={css.lessonsInfoListItemAccent}>
                      {price_per_hour}$
                    </span>
                  </p>
                </li>
              </ul>
              <button
                type="button"
                className={css.favoriteBtn}
                onClick={() => {
                  isLogin
                    ? onFavoriteToggle()
                    : toast(
                        'Only authorized users can add cards to favorites',
                        { duration: 3000 }
                      );
                }}
              >
                <svg
                  width="26"
                  height="26"
                  aria-label="heart icon"
                  fill={isFavorite ? '#f4c550' : 'transparent'}
                  stroke={isFavorite ? '#f4c550' : '#121417'}
                >
                  <use href={sprite + '#icon-heart'}></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className={css.languagesList}>
            <li>
              <p>
                <span>Speaks: </span>
                <span style={{ textDecoration: 'underline', color: '#121417' }}>
                  {languages.join(', ')}
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>Lesson Info: </span>
                {lesson_info}
              </p>
            </li>
            <li>
              <p>
                <span>Conditions: </span>
                {conditions.map(condition => {
                  return condition + ' ';
                })}
              </p>
            </li>
          </ul>
          {isReadMore ? (
            <button
              type="button"
              onClick={() => setIsReadMore(false)}
              className={css.readMoreBtn}
            >
              Read more
            </button>
          ) : (
            <div className={css.moreInfoBox}>
              <p className={css.moreInfoBoxDescr}>{experience}</p>
              <ul className={css.rewiewsList}>
                {reviews?.map((rewiew, index) => (
                  <li key={index}>
                    <div className={css.reviewerInfoBox}>
                      <img
                        src={defaultAvatar}
                        alt={`${rewiew.reviewer_name}`}
                        className={css.rewiewerAvatar}
                      />
                      <div>
                        <p className={css.rewiewerName}>
                          {rewiew.reviewer_name}
                        </p>
                        <div className={css.reviewerRatingBox}>
                          <svg width="16" height="16" aria-label="star icon">
                            <use href={sprite + '#icon-star'}></use>
                          </svg>
                          <p>{rewiew.reviewer_rating}.0</p>
                        </div>
                      </div>
                    </div>

                    <p>{rewiew.comment}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ul className={css.levelList}>
            {levels?.map((level, index) => (
              <li key={index} className={css.levelListItem}>
                <p>#{level}</p>
              </li>
            ))}
          </ul>
          {!isReadMore && (
            <button type="button" onClick={openModal} className={css.bookBtn}>
              Book trial lesson
            </button>
          )}
        </div>
      </li>
      {isOpen && (
        <Modal isOpen={isOpen} closeFnc={closeModal}>
          <TrialLessonFormComponent teacher={teacher} />
        </Modal>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
export default TeachersListItem;
