import css from './Container.module.css';

const Container = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
export default Container;
