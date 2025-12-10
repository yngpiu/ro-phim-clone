import classNames from 'classnames/bind';
import { Outlet, useNavigation } from 'react-router-dom';

import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import { ScrollProvider } from '@/contexts/ScrollContext';
import Footer from '@/layout/Footer/Footer';
import Header from '@/layout/Header/Header';

import styles from './RootLayout.module.scss';

const cx = classNames.bind(styles);

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <ScrollProvider>
      <Header />
      <main className={cx('main')}>
        {navigation.state === 'loading' ? <LoadingScreen /> : <Outlet />}
      </main>
      <Footer />
    </ScrollProvider>
  );
};
export default RootLayout;
