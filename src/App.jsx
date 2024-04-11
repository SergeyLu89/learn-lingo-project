import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setUser } from './redux/user/userReudcer';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage/TeachersPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log('user: ', user);
        dispatch(setUser(user));
      } else {
        dispatch(setUser(undefined));
      }
    });
  }, [auth, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
