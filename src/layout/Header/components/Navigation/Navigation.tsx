import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import useOutsideClick from '@/hooks/useOutsideClick';
import Dropdown from '@/layout/Header/components/Dropdown/Dropdown';
import type { CountryAPI, GenreAPI } from '@/types/api.types';

import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

type NavigationProps = {
  genres: GenreAPI[];
  countries: CountryAPI[];
  isOpen: boolean;
};

const Navigation = ({ genres, countries, isOpen }: NavigationProps) => {
  const [selectedCategory, setSelectedCategory] = useState<
    'genre' | 'country' | null
  >(null);
  const dropdownRef = useOutsideClick<HTMLLIElement>({
    callback: () => setSelectedCategory(null),
    isOpen: selectedCategory !== null,
  });

  const handleSelectCategory = (category: 'genre' | 'country') => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <nav className={cx('navigation', { 'navigation--open': isOpen })}>
      <div className={cx('navigation__user')}>
        <Link to="/login">
          <FontAwesomeIcon icon={faUser} />
          Thành viên
        </Link>
      </div>
      <ul className={cx('navigation__list')}>
        <li className={cx('navigation__item')}>
          <Link to="/phim-le">Phim lẻ</Link>
        </li>
        <li className={cx('navigation__item')}>
          <Link to="/phim-bo">Phim bộ</Link>
        </li>
        <li
          className={cx(
            'navigation__item',
            'navigation__item--dropdown',
            selectedCategory === 'genre' && 'navigation__item--selected'
          )}
          ref={selectedCategory === 'genre' ? dropdownRef : undefined}
        >
          <span onClick={() => handleSelectCategory('genre')}>
            Thể loại <FontAwesomeIcon icon={faCaretDown} />
          </span>
          {selectedCategory === 'genre' && (
            <Dropdown data={genres} type="genre" />
          )}
        </li>
        <li
          className={cx(
            'navigation__item',
            'navigation__item--dropdown',
            selectedCategory === 'country' && 'navigation__item--selected'
          )}
          ref={selectedCategory === 'country' ? dropdownRef : undefined}
        >
          <span onClick={() => handleSelectCategory('country')}>
            Quốc gia <FontAwesomeIcon icon={faCaretDown} />
          </span>
          {selectedCategory === 'country' && (
            <Dropdown data={countries} type="country" />
          )}
        </li>
        <li className={cx('navigation__item')}>
          <Link to="/chu-de">Chủ đề</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
