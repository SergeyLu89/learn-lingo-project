import css from './FavoritesPage.module.css';
import { useSelector } from 'react-redux';
import { selectFavoritesTeachers } from '../../redux/favoritesTeachers/favoritesTeachersSelectors';
import TeachersList from 'components/TeachersList/TeachersList';
import EmptyPage from 'components/EmptyPage/EmptyPage';

const FavoritePage = () => {
  const faviriteTeachers = useSelector(selectFavoritesTeachers);
  return (
    <section>
      <h2 className={css.favoriteTitile}>Favorites teachers</h2>
      {faviriteTeachers && faviriteTeachers.length === 0 ? (
        <EmptyPage />
      ) : (
        <TeachersList teachers={faviriteTeachers} />
      )}
    </section>
  );
};
export default FavoritePage;
