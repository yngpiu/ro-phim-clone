import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Loader from '@/components/Loader/Loader';
import useQuery from '@/hooks/useQuery';
import NewCinemaFilmsCarousel from '@/pages/HomePage/NewCinemaFilmsSection/NewCinemaFilmsCarousel/NewCinemaFilmsCarousel';
import type { FilmListAPIResponse } from '@/types/api.types';

import styles from './NewCinemaFilmsSection.module.scss';

const cx = classNames.bind(styles);

const NewCinemaFilmsSection = () => {
  const {
    data: newCinemaFilms,
    isLoading: isLoadingNewCinemaFilms,
    error: errorNewCinemaFilms,
  } = useQuery<FilmListAPIResponse>('danh-sach/phim-chieu-rap', {
    config: {
      params: {
        page: 1,
        limit: 20,
        sort_field: 'modified.time',
        sort_type: 'desc',
      },
    },
    cache: { ttl: 5 * 60 * 1000 },
  });

  if (isLoadingNewCinemaFilms) {
    return <Loader />;
  }
  if (errorNewCinemaFilms) {
    return null;
  }
  return (
    <section className={cx('ncfs')}>
      <div className={cx('ncfs__header')}>
        <h3 className={cx('section-title')}>Mãn Nhãn với Phim Chiếu Rạp</h3>
        <Link to="/phim-dien-anh-moi-cong" className={cx('ncfs__link')}>
          <span className={cx('ncfs__link-text')}>Xem thêm</span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx('ncfs__link-icon')}
          />
        </Link>
      </div>
      <NewCinemaFilmsCarousel films={newCinemaFilms?.items || []} />
    </section>
  );
};
export default NewCinemaFilmsSection;
