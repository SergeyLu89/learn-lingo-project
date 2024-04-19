import css from './TeachersPage.module.css';
import { useEffect, useState } from 'react';
import {
  getDatabase,
  ref,
  onValue,
  query,
  orderByKey,
  startAfter,
  endAt,
} from 'firebase/database';
import TeachersList from 'components/TeachersList/TeachersList';

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [lastKey, setLastKey] = useState('');

  const db = getDatabase();

  // const fetchInitialData = () => {
  //   const dbRef = query(ref(db, 'teachers'), orderByKey(), endAt('4'));

  //   fetchData(dbRef);
  // };

  const dbRef = query(ref(db, 'teachers'), orderByKey(), endAt('3'));

  const fetchData = ref => {
    try {
      onValue(
        ref,
        snapshot => {
          if (snapshot.exists()) {
            const fetchedTeachers = [];
            snapshot.forEach(childSnapshot => {
              const childKey = childSnapshot.key;
              const childData = childSnapshot.val();
              fetchedTeachers.push({ id: childKey, ...childData });

              setLastKey(childKey);
            });
            setTeachers(prevTeachers => [...prevTeachers, ...fetchedTeachers]);
          } else {
            console.log('No data available');
          }
        },
        { onlyOnce: true }
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData(dbRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMore = () => {
    const newDbRef = query(
      ref(db, 'teachers'),
      orderByKey(),
      startAfter(lastKey),
      endAt(String(Number(lastKey) + 4))
    );
    fetchData(newDbRef);
  };

  return (
    <section className={css.teachersPageSection}>
      <TeachersList teachers={teachers} />
      <button
        type="button"
        onClick={handleLoadMore}
        className={css.LoadMoreBtn}
      >
        Load more
      </button>
    </section>
  );
};

export default TeachersPage;
