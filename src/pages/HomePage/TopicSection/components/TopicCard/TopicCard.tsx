import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './TopicCard.module.scss';

type TopicCardProps = {
  name: string;
  colorHex: string;
  slug: string;
  className?: string;
};
const cx = classNames.bind(styles);
const TopicCard = ({ name, colorHex, slug, className }: TopicCardProps) => {
  return (
    <Link
      to={{ pathname: slug }}
      className={cx(
        'topic-card',
        { 'topic-card--more': slug === '/chu-de' },
        className
      )}
      style={{ backgroundColor: colorHex }}
    >
      <div className={cx('topic-card__content')}>
        <div className={cx('topic-card__name')}>{name}</div>
        {slug !== '/chu-de' && (
          <div className={cx('topic-card__view-more')}>
            Xem chủ đề <FontAwesomeIcon icon={faChevronRight} />
          </div>
        )}
      </div>
    </Link>
  );
};
export default TopicCard;
