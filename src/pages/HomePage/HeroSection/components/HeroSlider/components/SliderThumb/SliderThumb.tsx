import classNames from 'classnames/bind';
import type { Swiper as SwiperType } from 'swiper';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BASE_IMAGE_URL } from '@/apis/config/image';
import type { Film } from '@/types/api.types';

import styles from './SliderThumb.module.scss';

const cx = classNames.bind(styles);

interface SliderThumbProps {
  films: Film[];
  onSwiper: (swiper: SwiperType | null) => void;
}

const SliderThumb = ({ films, onSwiper }: SliderThumbProps) => {
  return (
    <Swiper
      className={cx('slider__thumbs')}
      modules={[Thumbs]}
      watchSlidesProgress
      onSwiper={onSwiper}
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
  );
};

export default SliderThumb;

