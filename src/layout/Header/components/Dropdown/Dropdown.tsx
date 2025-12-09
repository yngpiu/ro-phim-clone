import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import type { CountryAPI, GenreAPI } from '@/types/api.types';

import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

type DropdownProps = {
  data: GenreAPI[] | CountryAPI[];
  type: 'genre' | 'country';
};

const Dropdown = ({ data, type }: DropdownProps) => {
  return (
    <div className={cx('dropdown', `dropdown--${type}`)}>
      <ul className={cx('dropdown__list')}>
        {data.map(item => (
          <li className={cx('dropdown__item')} key={item._id}>
            <Link
              to={`/${type === 'genre' ? 'the-loai' : 'quoc-gia'}/${item.slug}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
