import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import type { CountryAPI, GenreAPI } from '@/types/api.types';
import { toTitleCase } from '@/utils/format';

import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

type DropdownProps = {
  data: GenreAPI[] | CountryAPI[];
  type: 'genre' | 'country';
  setIsOpen: (isOpen: boolean) => void;
};

const Dropdown = ({ data, type, setIsOpen }: DropdownProps) => {
  return (
    <div className={cx('nav-dropdown', `nav-dropdown--${type}`)}>
      <ul className={cx('nav-dropdown__menu')}>
        {data.map(item => (
          <li className={cx('nav-dropdown__item')} key={item._id}>
            <Link
              to={`/${type === 'genre' ? 'the-loai' : 'quoc-gia'}/${item.slug}`}
              className={cx('nav-dropdown__link')}
              onClick={() => setIsOpen(false)}
            >
              {toTitleCase(item.name)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
