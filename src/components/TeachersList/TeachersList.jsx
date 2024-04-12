// import css from './TeachersList.module.css';
import TeachersListItem from 'components/TeachersListItem/TeachersListItem';
// import { nanoid } from 'nanoid';

const TeachersList = ({ teachers }) => {
  console.log('teachers LIST: ', teachers);

  return (
    <>
      <ul>
        {teachers.map(teacher => (
          <TeachersListItem teacher={teacher} />
        ))}
      </ul>
    </>
  );
};
export default TeachersList;
