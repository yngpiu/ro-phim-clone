import {
  faCircleInfo,
  faHeart,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import type { Film } from '@/types/api.types';

import styles from './SliderActions.module.scss';

const cx = classNames.bind(styles);

interface SliderActionsProps {
  film: Film;
}

const SliderActions = ({ film }: SliderActionsProps) => {
  return (
    <div className={cx('slider__actions')}>
      <div className={cx('slider__action')}>
        <Link
          to={{ pathname: `/xem-phim/${film?.slug}` }}
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
          to={{ pathname: `/phim/${film?.slug}` }}
          className={cx('slider__info-btn')}
        >
          <FontAwesomeIcon icon={faCircleInfo} />
        </Link>
      </div>
    </div>
  );
};

export default SliderActions;

