import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import useQuery from '@/hooks/useQuery';
import NewFilmsCarousel from '@/pages/HomePage/NewFilmsSection/NewFilmsCarousel/NewFilmsCarousel';
import type { FilmListAPIResponse } from '@/types/api.types';

import styles from './NewFilmsSection.module.scss';

const cx = classNames.bind(styles);

const NewFilmsSection = () => {
  const { data: newFilms } = useQuery<FilmListAPIResponse>(
    'danh-sach/phim-moi',
    {
      config: {
        params: {
          page: 1,
          limit: 20,
        },
      },
      cache: { ttl: 5 * 60 * 1000 },
    }
  );
  return (
    <section className={cx('nfs')}>
      <div className={cx('nfs__header')}>
        <h3 className={cx('section-title')}>Phim Điện Ảnh Mới Coóng</h3>
        <Link to="/phim-dien-anh-moi-cong" className={cx('nfs__link')}>
          <span className={cx('nfs__link-text')}>Xem thêm</span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx('nfs__link-icon')}
          />
        </Link>
      </div>
      <NewFilmsCarousel films={newFilms?.items || []} />
    </section>
  );
};
export default NewFilmsSection;
