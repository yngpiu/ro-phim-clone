import classNames from 'classnames/bind';
import { useContext } from 'react';

import NavToggle from '@/components/layout/Header/components/NavToggle/NavToggle';
import { ScrollContext } from '@/contexts/ScrollContext';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const { isAtTop } = useContext(ScrollContext);
  return (
    <header className={cx('header', { 'header--scrolled': !isAtTop })}>
      <div className={cx('header__container')}>
        <NavToggle />
      </div>
    </header>
  );
};
export default Header;
