import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import { BASE_IMAGE_URL } from '@/apis/config/image';
import type { Film } from '@/types/api.types';

import styles from './NewFilmsCarousel.module.scss';

type NewFilmsCarouselProps = {
  films: Film[];
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
const cx = classNames.bind(styles);

const NewFilmsCarousel = ({ films }: NewFilmsCarouselProps) => {
  console.log(films);
  const swiperRef = useRef<SwiperType>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className={cx('nfc__carousel')}>
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
          576: {
            slidesPerView: 3.1,
          },
          768: {
            slidesPerView: 4.1,
            spaceBetween: 12,
          },
          992: {
            slidesPerView: 5.1,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 8,
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
              <Link to={`/phim/${film.slug}`} className={cx('nfc__item')}>
                <div className={cx('nfc__img-wrap')}>
                  <img
                    className={cx('nfc__img')}
                    src={`${BASE_IMAGE_URL}/uploads/movies/${film.thumb_url}`}
                    alt={film.name}
                  />
                  <div className={cx('nfc__langs')}>
                    {langs.map(lang => {
                      return (
                        <div className={cx('nfc__lang')} key={lang.name}>
                          <span>{lang.name}</span>
                          {lang.lastEpisode && (
                            <span>. {lang.lastEpisode}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={cx('nfc__content')}>
                  <div className={cx('nfc__item-title')}>{film.name}</div>
                  <div className={cx('nfc__orig-name')}>{film.origin_name}</div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        className={cx('nfc__nav', 'nfc__nav-prev', {
          'nfc__nav--disabled': isBeginning,
        })}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        className={cx('nfc__nav', 'nfc__nav-next', {
          'nfc__nav--disabled': isEnd,
        })}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};
export default NewFilmsCarousel;
