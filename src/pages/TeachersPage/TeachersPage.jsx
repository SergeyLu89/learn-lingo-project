import css from './TeachersPage.module.css';
import { useEffect, useState, useCallback } from 'react';
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
  const db = getDatabase();
  const [teachers, setTeachers] = useState([]);
  const [lastKey, setLastKey] = useState('');

  const memoizedFetchData = useCallback(async dbRef => {
    try {
      const snapshot = await onValue(dbRef, snapshot => {
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
      });

      return () => snapshot.unsubscribe();
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    const fetchInitialData = async () => {
      const dbRef = query(ref(db, 'teachers'), orderByKey(), endAt('3'));
      await memoizedFetchData(dbRef);
    };

    fetchInitialData();
    return () => onValue.unsubscribe();
  }, [memoizedFetchData, db]);

  const handleLoadMore = () => {
    const newDbRef = query(
      ref(db, 'teachers'),
      orderByKey(),
      startAfter(lastKey),
      endAt(String(Number(lastKey) + 4))
    );
    memoizedFetchData(newDbRef);
  };

  return (
    <section className={css.teachersPageSection}>
      <TeachersList teachers={teachers} />
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </section>
  );
};

export default TeachersPage;
