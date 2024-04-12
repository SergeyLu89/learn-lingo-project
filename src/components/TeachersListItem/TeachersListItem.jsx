import css from './TeachersListItem.module.css';
const TeachersListItem = ({ teacher }) => {
  return (
    <>
      <li className={css.teachersListItem}>тут учитель</li>
    </>
  );
};
export default TeachersListItem;
