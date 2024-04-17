// import css from './TeachersPage.module.css';
// import { getDatabase, ref, child, get } from 'firebase/database';
// import TeachersList from 'components/TeachersList/TeachersList';
// import { useEffect, useState } from 'react';

// const TeachersPage = () => {
//   const [teachers, setTeachers] = useState([]);

//   const dbRef = ref(getDatabase());
//   useEffect(() => {
//     get(child(dbRef, `teachers/`))
//       .then(snapshot => {
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           setTeachers(data);
//         } else {
//           console.log('No data available');
//         }
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, [dbRef]);

//   return (
//     <section className={css.teachersPageSection}>
//       <TeachersList teachers={teachers} />
//       <button type="button">Load more</button>
//     </section>
//   );
// };
// export default TeachersPage;

import css from './TeachersPage.module.css';
import {
  getDatabase,
  ref,
  onValue,
  query,
  orderByKey,
  startAfter,
  endAt,
  startAt,
} from 'firebase/database';
import TeachersList from 'components/TeachersList/TeachersList';
import { useEffect, useState } from 'react';

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [lastKey, setLastKey] = useState('0');

  const db = getDatabase();

  const dbRef = query(
    ref(db, 'teachers'),
    orderByKey(),
    startAt(lastKey),
    endAt(lastKey + 3)
  );
  const newDbRef = query(
    ref(db, 'teachers'),
    orderByKey(),
    startAfter(lastKey),
    endAt(lastKey + 4)
  );

  const fechData = ref => {
    onValue(ref, snapshot => {
      console.log('СТАРТУЮ ИЗ: ', lastKey);

      if (snapshot.exists()) {
        const fetchedTeachers = [];
        let lastKey = null;
        snapshot.forEach(childSnapshot => {
          const childKey = childSnapshot.key;
          // console.log('childKey: ', childKey);
          const childData = childSnapshot.val();
          // console.log('childData: ', childData);
          fetchedTeachers.push(childData);
          // lastKey = Number(childKey);
          lastKey = childKey;
        });
        console.log('fetchedTeachers: ', fetchedTeachers);
        setTeachers([...teachers, ...fetchedTeachers]);

        setLastKey(lastKey);
      } else {
        console.log('No data available');
      }
    });
  };
  useEffect(() => {
    fechData(dbRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMore = () => {
    fechData(newDbRef);
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
