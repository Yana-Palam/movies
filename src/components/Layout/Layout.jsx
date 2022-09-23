import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Suspense } from 'react';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
