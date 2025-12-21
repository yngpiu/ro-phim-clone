import classNames from 'classnames/bind';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectFade, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';

import { BASE_IMAGE_URL } from '@/apis/config/image';
import type { Film } from '@/types/api.types';

import styles from './HeroSlider.module.scss';
import SliderActions from './components/SliderActions/SliderActions';
import SliderContent from './components/SliderContent/SliderContent';
import SliderThumb from './components/SliderThumb/SliderThumb';

const cx = classNames.bind(styles);

interface HeroSliderProps {
  films: Film[];
}

const HeroSlider = ({ films }: HeroSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [selectFilmIndex, setSelectFilmIndex] = useState(0);
  console.log(films);
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
            <SliderContent film={film} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs Swiper */}
      <SliderThumb films={films} onSwiper={setThumbsSwiper} />

      {/* Actions */}
      <SliderActions film={films[selectFilmIndex]} />
    </div>
  );
};

export default HeroSlider;
