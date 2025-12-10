import { useLoaderData } from 'react-router-dom';

import HeroSection from '@/pages/HomePage/HeroSection/HeroSection';
import TopicSection from '@/pages/HomePage/TopicSection/TopicSection';
import type { FilmListAPIResponse } from '@/types/api.types';

const HomePage = () => {
  const data = useLoaderData<FilmListAPIResponse>();
  return (
    <div style={{ height: '2000px' }}>
      <HeroSection data={data} />
      <TopicSection />
    </div>
  );
};
export default HomePage;
