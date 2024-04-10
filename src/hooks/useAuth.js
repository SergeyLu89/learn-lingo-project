import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from '../redux/user/userSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return isLoggedIn;
};
