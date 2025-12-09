import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { ScrollProvider } from '@/contexts/ScrollContext';

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
