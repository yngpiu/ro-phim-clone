import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Badge from '@/components/Badge/Badge';
import type { Film } from '@/types/api.types';
import { toSentenceCase } from '@/utils/format';

import styles from './SliderContent.module.scss';

const cx = classNames.bind(styles);

interface SliderContentProps {
  film: Film;
}

const SliderContent = ({ film }: SliderContentProps) => {
  return (
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
        <Badge className={cx('slider__badge', 'slider__badge--quality')}>
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
  );
};

export default SliderContent;
