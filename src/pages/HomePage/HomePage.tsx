import { useLoaderData } from 'react-router-dom';

import HeroSection from '@/pages/HomePage/HeroSection/HeroSection';
import NewFilmsSection from '@/pages/HomePage/NewFilmsSection/NewFilmsSection';
import NewReleasesSection from '@/pages/HomePage/NewReleasesSection/NewReleasesSection';
import TopicSection from '@/pages/HomePage/TopicSection/TopicSection';
import type { FilmListAPIResponse } from '@/types/api.types';

const HomePage = () => {
  const data = useLoaderData<FilmListAPIResponse>();
  return (
    <div>
      <HeroSection data={data} />
      <TopicSection />
      <NewReleasesSection />
      <NewFilmsSection />
    </div>
  );
};
export default HomePage;
