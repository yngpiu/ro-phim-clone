import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './NavToggle.module.scss';

const cx = classNames.bind(styles);

const NavToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className={cx('nav-toggle', { 'nav-toggle--close': isOpen })}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={cx('nav-toggle__line')}></div>
      <div className={cx('nav-toggle__line')}></div>
      <div className={cx('nav-toggle__line')}></div>
    </button>
  );
};
export default NavToggle;
