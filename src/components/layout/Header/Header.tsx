import classNames from 'classnames/bind';
import { useContext, useState } from 'react';

import LogoLink from '@/components/LogoLink/LogoLink';
import NavToggle from '@/components/layout/Header/components/NavToggle/NavToggle';
import Navigation from '@/components/layout/Header/components/Navigation/Navigation';
import SearchBar from '@/components/layout/Header/components/SearchBar/SearchBar';
import SearchBarToggle from '@/components/layout/Header/components/SearchBarToggle/SearchBarToggle';
import { ScrollContext } from '@/contexts/ScrollContext';
import useQuery from '@/hooks/useQuery';
import type { CountryAPIResponse, GenreAPIResponse } from '@/types/api.types';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const { isAtTop } = useContext(ScrollContext);
  const [isOpenNavMenu, setIsOpenNavMenu] = useState<boolean>(false);
  const [isOpenSearchBar, setIsOpenSearchBar] = useState<boolean>(false);

  const { data: genres } = useQuery<GenreAPIResponse>('/the-loai');
  const { data: countries } = useQuery<CountryAPIResponse>('/quoc-gia');
  const handleSearchToggle = () => {
    setIsOpenSearchBar(!isOpenSearchBar);
    setIsOpenNavMenu(false);
  };

  const handleNavToggle = () => {
    setIsOpenNavMenu(!isOpenNavMenu);
    setIsOpenSearchBar(false);
  };

  return (
    <header className={cx('header', { 'header--scrolled': !isAtTop })}>
      <div className={cx('header__container')}>
        <div
          className={cx('header__left', {
            'header__left--hidden': isOpenSearchBar,
          })}
        >
          <NavToggle isOpen={isOpenNavMenu} onToggle={handleNavToggle} />
          <LogoLink className={cx('header__logo')} />
        </div>
        <SearchBar isOpen={isOpenSearchBar} />
        <SearchBarToggle
          isOpen={isOpenSearchBar}
          onToggle={handleSearchToggle}
        />
        <Navigation
          genres={genres?.items || []}
          countries={countries?.items || []}
          isOpen={isOpenNavMenu}
        />
      </div>
    </header>
  );
};
export default Header;
