import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Container from 'components/Container/Container';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
