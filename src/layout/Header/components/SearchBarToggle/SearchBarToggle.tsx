import classNames from 'classnames/bind';

import styles from './SearchBarToggle.module.scss';

const cx = classNames.bind(styles);

type SearchBarToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const SearchBarToggle = ({ isOpen, onToggle }: SearchBarToggleProps) => {
  return (
    <button
      className={cx('search-bar__toggle', {
        'search-bar__toggle--close': isOpen,
      })}
      onClick={onToggle}
      aria-label={isOpen ? 'Close search' : 'Open search'}
    >
      <div className={cx('search-bar__icon')} />
    </button>
  );
};

export default SearchBarToggle;
