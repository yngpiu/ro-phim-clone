import classNames from 'classnames/bind';

import { filmTopics } from '@/constants/topics';
import TopicCard from '@/pages/HomePage/TopicSection/components/TopicCard/TopicCard';

import styles from './TopicListPage.module.scss';

const cx = classNames.bind(styles);

const TopicListPage = () => {
  return (
    <div className={cx('tlp')}>
      <h1 className={cx('tlp__title')}>Các chủ đề</h1>
      <div className={cx('topic__list')}>
        {filmTopics.map(topic => (
          <TopicCard
            key={topic.id}
            name={topic.name}
            colorHex={topic.colorHex}
            slug={`/chu-de/${topic.slug}`}
            className={cx('topic__item')}
          />
        ))}
      </div>
    </div>
  );
};
export default TopicListPage;
