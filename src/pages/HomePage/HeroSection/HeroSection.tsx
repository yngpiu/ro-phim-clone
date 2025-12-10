import classNames from 'classnames/bind';

import useQuery from '@/hooks/useQuery';
import HeroSlider from '@/pages/HomePage/HeroSection/components/HeroSlider/HeroSlider';
import type { FilmListAPIResponse } from '@/types/api.types';

import styles from './HeroSection.module.scss';

const cx = classNames.bind(styles);

const HeroSection = () => {
  const { data } = useQuery<FilmListAPIResponse>('danh-sach/phim-chieu-rap', {
    params: {
      page: 1,
      limit: 5,
    },
  });
  return (
    <div className={cx('hero-section')}>
      <HeroSlider films={data?.items || []} />
    </div>
  );
};
export default HeroSection;
