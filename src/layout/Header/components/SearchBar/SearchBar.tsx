import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './SearchBar.module.scss';

type SearchBarProps = {
  isOpen: boolean;
};

const cx = classNames.bind(styles);

const SearchBar = ({ isOpen }: SearchBarProps) => {
  return (
    <div
      className={cx('search-panel', {
        'search-panel--active': isOpen,
      })}
    >
      <input
        type="text"
        placeholder="Tìm kiếm phim..."
        className={cx('search-panel__field')}
      />

      <button
        type="button"
        className={cx('search-panel__submit')}
        aria-label="Search"
      >
        <FontAwesomeIcon icon={faSearch} className={cx('search-panel__icon')} />
      </button>
    </div>
  );
};

export default SearchBar;
