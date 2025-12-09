import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cx('search-bar')}>
      <button
        className={cx('search-bar__toggle', {
          'search-bar__toggle--close': isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close search' : 'Open search'}
      >
        <div className={cx('search-bar__icon')} />
      </button>
    </div>
  );
};

export default SearchBar;
