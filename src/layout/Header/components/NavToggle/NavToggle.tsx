import classNames from 'classnames/bind';

import styles from './NavToggle.module.scss';

const cx = classNames.bind(styles);

interface NavToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const NavToggle = ({ isOpen, onToggle }: NavToggleProps) => {
  return (
    <button
      className={cx('nav-toggle', { 'nav-toggle--close': isOpen })}
      onClick={onToggle}
    >
      <div className={cx('nav-toggle__line')}></div>
      <div className={cx('nav-toggle__line')}></div>
      <div className={cx('nav-toggle__line')}></div>
    </button>
  );
};
export default NavToggle;
