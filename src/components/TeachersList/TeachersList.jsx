import css from './TeachersList.module.css';
import TeachersListItem from 'components/TeachersListItem/TeachersListItem';
import { nanoid } from 'nanoid';

const TeachersList = ({ teachers }) => {
  return (
    <>
      <ul className={css.teachersList}>
        {teachers.map(teacher => (
          <TeachersListItem teacher={teacher} key={nanoid()} />
        ))}
      </ul>
    </>
  );
};
export default TeachersList;
