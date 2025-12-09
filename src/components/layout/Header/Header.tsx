import classNames from 'classnames/bind';
import { useContext } from 'react';

import LogoLink from '@/components/LogoLink/LogoLink';
import NavToggle from '@/components/layout/Header/components/NavToggle/NavToggle';
import Navigation from '@/components/layout/Header/components/Navigation/Navigation';
import SearchBar from '@/components/layout/Header/components/SearchBar/SearchBar';
import { NavMenuContext } from '@/contexts/NavMenuContext';
import { ScrollContext } from '@/contexts/ScrollContext';
import useQuery from '@/hooks/useQuery';
import type { CountryAPIResponse, GenreAPIResponse } from '@/types/api.types';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const { isAtTop } = useContext(ScrollContext);
  const { isOpenNavMenu } = useContext(NavMenuContext);
  const { data: genres } = useQuery<GenreAPIResponse>('/the-loai');
  const { data: countries } = useQuery<CountryAPIResponse>('/quoc-gia');
  return (
    <header className={cx('header', { 'header--scrolled': !isAtTop })}>
      <div className={cx('header__container')}>
        <NavToggle />
        <LogoLink className={cx('header__logo')} />
        {isOpenNavMenu && (
          <Navigation
            genres={genres?.items || []}
            countries={countries?.items || []}
          />
        )}
        <SearchBar />
      </div>
    </header>
  );
};
export default Header;
