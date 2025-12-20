import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';

import { ScrollProvider } from '@/contexts/ScrollContext';
import Footer from '@/layout/Footer/Footer';
import Header from '@/layout/Header/Header';

import styles from './RootLayout.module.scss';

const cx = classNames.bind(styles);

const RootLayout = () => {
  return (
    <ScrollProvider>
      <Header />
      <main className={cx('main')}>
        <Outlet />
      </main>
      <Footer />
    </ScrollProvider>
  );
};
export default RootLayout;
