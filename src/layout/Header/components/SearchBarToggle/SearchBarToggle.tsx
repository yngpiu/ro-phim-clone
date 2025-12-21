import classNames from 'classnames/bind';

import styles from './SearchBarToggle.module.scss';

const cx = classNames.bind(styles);

type SearchBarToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const SearchBarToggle = ({ isOpen, onToggle }: SearchBarToggleProps) => {
  return (
    <div className={cx('search-toggle')}>
      <button
        type="button"
        className={cx('search-toggle__button', {
          'search-toggle__button--active': isOpen,
        })}
        onClick={onToggle}
        aria-label={isOpen ? 'Close search' : 'Open search'}
      >
        <span className={cx('search-toggle__lens')} />
      </button>
    </div>
  );
};

export default SearchBarToggle;
