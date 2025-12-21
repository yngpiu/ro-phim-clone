import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { memo, useState } from 'react';
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
  setIsOpen: (isOpen: boolean) => void;
};

const Navigation = memo(
  ({ genres, countries, isOpen, setIsOpen }: NavigationProps) => {
    const [activeDropdown, setActiveDropdown] = useState<
      'genre' | 'country' | null
    >(null);

    const dropdownRef = useOutsideClick<HTMLLIElement>({
      callback: () => setActiveDropdown(null),
      isOpen: activeDropdown !== null,
    });

    const toggleDropdown = (type: 'genre' | 'country') => {
      setActiveDropdown(prev => (prev === type ? null : type));
    };

    const closeMenu = () => {
      setActiveDropdown(null);
      setIsOpen(false);
    };

    return (
      <nav className={cx('nav-menu', { 'nav-menu--open': isOpen })}>
        <div className={cx('nav-menu__account')}>
          <Link to="/login" className={cx('nav-menu__account-link')}>
            <FontAwesomeIcon icon={faUser} />
            Thành viên
          </Link>
        </div>

        <ul className={cx('nav-menu__items')}>
          <li className={cx('nav-menu__item')}>
            <Link
              to="/phim-le"
              className={cx('nav-menu__link')}
              onClick={closeMenu}
            >
              Phim Lẻ
            </Link>
          </li>

          <li className={cx('nav-menu__item')}>
            <Link
              to="/phim-bo"
              className={cx('nav-menu__link')}
              onClick={closeMenu}
            >
              Phim Bộ
            </Link>
          </li>

          <li
            className={cx(
              'nav-menu__item',
              'nav-menu__item--has-dropdown',
              activeDropdown === 'genre' && 'nav-menu__item--active'
            )}
            ref={activeDropdown === 'genre' ? dropdownRef : undefined}
          >
            <span
              className={cx('nav-menu__trigger')}
              onClick={() => toggleDropdown('genre')}
            >
              Thể Loại <FontAwesomeIcon icon={faCaretDown} />
            </span>

            {activeDropdown === 'genre' && (
              <Dropdown data={genres} type="genre" setIsOpen={closeMenu} />
            )}
          </li>

          <li
            className={cx(
              'nav-menu__item',
              'nav-menu__item--has-dropdown',
              activeDropdown === 'country' && 'nav-menu__item--active'
            )}
            ref={activeDropdown === 'country' ? dropdownRef : undefined}
          >
            <span
              className={cx('nav-menu__trigger')}
              onClick={() => toggleDropdown('country')}
            >
              Quốc Gia <FontAwesomeIcon icon={faCaretDown} />
            </span>

            {activeDropdown === 'country' && (
              <Dropdown data={countries} type="country" setIsOpen={closeMenu} />
            )}
          </li>

          <li className={cx('nav-menu__item')}>
            <Link
              to="/chu-de"
              className={cx('nav-menu__link')}
              onClick={closeMenu}
            >
              Chủ Đề
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
);

export default Navigation;
