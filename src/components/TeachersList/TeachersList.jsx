import css from './TeachersList.module.css';
import TeachersListItem from 'components/TeachersListItem/TeachersListItem';

const TeachersList = ({ teachers }) => {
  return (
    <>
      <ul className={css.teachersList}>
        {teachers.map(teacher => (
          <TeachersListItem teacher={teacher} key={teacher.id} />
        ))}
      </ul>
    </>
  );
};
export default TeachersList;
