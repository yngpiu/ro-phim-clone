import classNames from 'classnames/bind';
import { useContext } from 'react';

import { ScrollContext } from '@/contexts/ScrollContext';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const { isAtTop } = useContext(ScrollContext);
  return (
    <header className={cx('header', { 'header--scrolled': !isAtTop })}>
      Header
    </header>
  );
};
export default Header;
