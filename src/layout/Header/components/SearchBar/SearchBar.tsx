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
    <div className={cx('search-bar', { 'search-bar--open': isOpen })}>
      <input
        type="text"
        placeholder="Tìm kiếm phim..."
        className={cx('search-bar__input')}
      />
      <button className={cx('search-bar__button')}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};
export default SearchBar;
