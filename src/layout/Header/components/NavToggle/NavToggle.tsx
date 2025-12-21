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
      type="button"
      className={cx('menu-toggle', {
        'menu-toggle--active': isOpen,
      })}
      onClick={onToggle}
      aria-label="Toggle navigation"
    >
      <span className={cx('menu-toggle__bar')} />
      <span className={cx('menu-toggle__bar')} />
      <span className={cx('menu-toggle__bar')} />
    </button>
  );
};

export default NavToggle;
