import {
  faCircleInfo,
  faHeart,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Swiper as SwiperType } from 'swiper';
import { EffectFade, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';

import { BASE_IMAGE_URL } from '@/apis/config/image';
import Badge from '@/components/Badge/Badge';
import type { Film } from '@/types/api.types';
import { toSentenceCase } from '@/utils/format';

import styles from './HeroSlider.module.scss';

const cx = classNames.bind(styles);

interface HeroSliderProps {
  films: Film[];
}

const HeroSlider = ({ films }: HeroSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [selectFilmIndex, setSelectFilmIndex] = useState(0);

  return (
    <div className={cx('slider')}>
      {/* Main Swiper */}
      <Swiper
        className={cx('slider__main')}
        modules={[EffectFade, Thumbs]}
        effect="fade"
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}
        spaceBetween={0}
        fadeEffect={{
          crossFade: true,
        }}
        onSlideChange={swiper => setSelectFilmIndex(swiper.activeIndex)}
      >
        {films.map(film => (
          <SwiperSlide key={film._id} className={cx('slider__slide')}>
            <div className={cx('slider__media')}>
              <img
                className={cx('slider__img')}
                src={`${BASE_IMAGE_URL}/uploads/movies/${film.poster_url}`}
                alt={film.name}
              />
            </div>
            <div className={cx('slider__content')}>
              <h3 className={cx('slider__title')}>
                <Link to={{ pathname: `/phim/${film.slug}` }}>{film.name}</Link>
              </h3>
              <h3 className={cx('slider__subtitle')}>{film.origin_name}</h3>
              <div className={cx('slider__badges')}>
                {film.imdb.vote_average > 0 && (
                  <Badge className={cx('slider__badge', 'slider__badge--imdb')}>
                    <span>IMDb</span>
                    <span>{film.imdb.vote_average}</span>
                  </Badge>
                )}
                <Badge
                  className={cx('slider__badge', 'slider__badge--quality')}
                >
                  <span>{film.quality}</span>
                </Badge>
                <Badge className={cx('slider__badge')}>
                  <span>{film.year}</span>
                </Badge>
                <Badge className={cx('slider__badge')}>
                  <span>{film.time.toLocaleLowerCase()}</span>
                </Badge>
              </div>
              <div className={cx('slider__badges', 'slider__badges--genres')}>
                {film.category.map(genre => (
                  <Badge key={genre.id} className={cx('slider__badge')}>
                    {toSentenceCase(genre.name)}
                  </Badge>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs Swiper */}
      <Swiper
        className={cx('slider__thumbs')}
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        slidesPerView={5}
        spaceBetween={0}
      >
        {films.map(film => (
          <SwiperSlide key={film._id} className={cx('slider__thumb')}>
            <div className={cx('slider__thumb-media')}>
              <img
                className={cx('slider__thumb-img')}
                src={`${BASE_IMAGE_URL}/uploads/movies/${film.poster_url}`}
                alt={film.name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cx('slider__actions')}>
        <div className={cx('slider__action')}>
          <Link
            to={{ pathname: `/xem-phim/${films[selectFilmIndex]?.slug}` }}
            className={cx('slider__play-btn')}
          >
            <FontAwesomeIcon icon={faPlay} />
          </Link>
        </div>
        <div className={cx('slider__action')}>
          <button className={cx('slider__heart-btn')}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <Link
            to={{ pathname: `/phim/${films[selectFilmIndex]?.slug}` }}
            className={cx('slider__info-btn')}
          >
            <FontAwesomeIcon icon={faCircleInfo} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
