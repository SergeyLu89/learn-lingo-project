// import css from './FavoritesPage.module.css';
import { useSelector } from 'react-redux';
import { selectFavoritesTeachers } from '../../redux/favoritesTeachers/favoritesTeachersSelectors';
import TeachersList from 'components/TeachersList/TeachersList';

const FavoritePage = () => {
  const faviriteTeachers = useSelector(selectFavoritesTeachers);
  return (
    <section>
      <h2>FAVORITE PAGE</h2>
      <TeachersList teachers={faviriteTeachers} />
    </section>
  );
};
export default FavoritePage;
