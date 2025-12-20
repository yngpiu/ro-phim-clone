import classNames from 'classnames/bind';

import HeroSlider from '@/pages/HomePage/HeroSection/components/HeroSlider/HeroSlider';
import type { FilmListAPIResponse } from '@/types/api.types';

import styles from './HeroSection.module.scss';

const cx = classNames.bind(styles);

const HeroSection = ({ data }: { data: FilmListAPIResponse }) => {
  return (
    <section className={cx('hero-section')}>
      <HeroSlider films={data?.items || []} />
    </section>
  );
};
export default HeroSection;
