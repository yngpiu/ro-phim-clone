import classNames from 'classnames/bind';
import { useContext } from 'react';

import { NavMenuContext } from '@/contexts/NavMenuContext';

import styles from './NavToggle.module.scss';

const cx = classNames.bind(styles);

const NavToggle = () => {
  const { isOpenNavMenu, openNavMenu, closeNavMenu } =
    useContext(NavMenuContext);
  return (
    <button
      className={cx('nav-toggle', { 'nav-toggle--close': isOpenNavMenu })}
      onClick={() => (isOpenNavMenu ? closeNavMenu() : openNavMenu())}
    >
      <div className={cx('nav-toggle__line')}></div>
      <div className={cx('nav-toggle__line')}></div>
      <div className={cx('nav-toggle__line')}></div>
    </button>
  );
};
export default NavToggle;
