import css from './TeachersListItem.module.css';
import { nanoid } from 'nanoid';
const TeachersListItem = ({ teacher }) => {
  return (
    <>
      <li key={nanoid()} className={css.teachersListItem}></li>
    </>
  );
};
export default TeachersListItem;
