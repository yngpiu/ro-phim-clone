import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { memo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import { BASE_IMAGE_URL } from '@/apis/config/image';
import type { Film } from '@/types/api.types';

import styles from './NewReleasesList.module.scss';

const cx = classNames.bind(styles);

type NewReleasesListProps = {
  title: string;
  films: Film[];
  backgroundColor: string;
};
const LANG_CONFIGS = [
  {
    key: 'vs',
    label: 'PĐ',
    serverPrefix: 'vietsub',
  },
  {
    key: 'tm',
    label: 'TM',
    serverPrefix: 'thuyết minh',
  },
  {
    key: 'lt',
    label: 'LT',
    serverPrefix: 'lồng tiếng',
  },
] as const;

const NewReleasesList = memo(
  ({ title, films, backgroundColor }: NewReleasesListProps) => {
    const swiperRef = useRef<SwiperType>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    return (
      <div className={cx('newrl')}>
        <div className={cx('newrl__header')}>
          <div
            className={cx('newrl__title', 'section-title')}
            style={{
              background: backgroundColor,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            {title}
          </div>
          <Link to="/chu-de/phim-han-quoc-moi" className={cx('newrl__link')}>
            <span>Xem toàn bộ</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>

        <div className={cx('newrl__carousel')}>
          <Swiper
            onBeforeInit={swiper => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={swiper => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            slidesPerView={2.1}
            breakpoints={{
              768: {
                spaceBetween: 12,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
            spaceBetween={8}
          >
            {films.map(film => {
              const langs = LANG_CONFIGS.reduce<
                { name: string; lastEpisode: string | null }[]
              >((acc, config) => {
                if (!film.lang_key?.includes(config.key)) return acc;
                const lastEp = film.last_episodes?.find(le =>
                  le.server_name.toLowerCase().startsWith(config.serverPrefix)
                );
                if (!lastEp) return acc;
                acc.push({
                  name: config.label,
                  lastEpisode: Number.isInteger(Number(lastEp.name))
                    ? lastEp.name
                    : null,
                });
                return acc;
              }, []);
              return (
                <SwiperSlide key={film._id}>
                  <Link to={`/phim/${film.slug}`} className={cx('newrl__item')}>
                    <div className={cx('newrl__img-wrap')}>
                      <img
                        loading="lazy"
                        className={cx('newrl__img')}
                        src={`${BASE_IMAGE_URL}/uploads/movies/${film.poster_url}`}
                        alt={film.name}
                      />
                      <div className={cx('newrl__langs')}>
                        {langs.map(lang => {
                          return (
                            <div className={cx('newrl__lang')} key={lang.name}>
                              <span>{lang.name}</span>
                              {lang.lastEpisode && (
                                <span>. {lang.lastEpisode}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className={cx('newrl__content')}>
                      <div className={cx('newrl__item-title')}>{film.name}</div>
                      <div className={cx('newrl__orig-name')}>
                        {film.origin_name}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            className={cx('newrl__nav', 'newrl__nav-prev', {
              'newrl__nav--disabled': isBeginning,
            })}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className={cx('newrl__nav', 'newrl__nav-next', {
              'newrl__nav--disabled': isEnd,
            })}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    );
  }
);

export default NewReleasesList;
