import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const PrivateRoutes = ({ component, redirectTo = '/home' }) => {
  const isAuth = useAuth();
  return isAuth ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoutes;
