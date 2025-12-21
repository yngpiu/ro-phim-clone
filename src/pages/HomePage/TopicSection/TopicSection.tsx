import classNames from 'classnames/bind';

import TopicCard from '@/components/TopicCard/TopicCard';
import { filmTopics } from '@/constants/topics';

import styles from './TopicSection.module.scss';

const cx = classNames.bind(styles);

const TopicSection = () => {
  return (
    <section className={cx('topic-section')}>
      <h2 className={cx('section-title', 'topic-section__title')}>
        Bạn đang quan tâm gì?
      </h2>
      <div className={cx('topic-section__list')}>
        {filmTopics.slice(0, 6).map(topic => (
          <TopicCard
            key={topic.id}
            name={topic.name}
            colorHex={topic.colorHex}
            slug={`/chu-de/${topic.slug}`}
          />
        ))}
        <TopicCard
          name={`+${filmTopics.length - 6} chủ đề`}
          colorHex="#2e3245"
          slug="/chu-de"
        />
      </div>
    </section>
  );
};
export default TopicSection;
