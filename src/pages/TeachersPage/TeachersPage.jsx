import css from './TeachersPage.module.css';
import { getDatabase, ref, child, get } from 'firebase/database';
import TeachersList from 'components/TeachersList/TeachersList';
import { useEffect, useState } from 'react';

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);

  const dbRef = ref(getDatabase());
  useEffect(() => {
    get(child(dbRef, `teachers/`))
      .then(snapshot => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setTeachers(data);
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [dbRef]);

  return (
    <section className={css.teachersPageSection}>
      <TeachersList teachers={teachers} />
    </section>
  );
};
export default TeachersPage;
