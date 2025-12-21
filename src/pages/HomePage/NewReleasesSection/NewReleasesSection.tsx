import classNames from 'classnames/bind';

import Loader from '@/components/Loader/Loader';
import useQuery from '@/hooks/useQuery';
import NewReleasesList from '@/pages/HomePage/NewReleasesSection/components/NewReleasesList/NewReleasesList';
import { type FilmListAPIResponse } from '@/types/api.types';

import styles from './NewReleasesSection.module.scss';

const cx = classNames.bind(styles);

const NewReleasesSection = () => {
  const {
    data: newReleasesKoreanData,
    isLoading: isLoadingNewReleasesKorean,
    error: errorNewReleasesKorean,
  } = useQuery<FilmListAPIResponse>('danh-sach/phim-moi', {
    config: {
      params: {
        page: 1,
        limit: 20,
        country: 'han-quoc',
        sort_field: 'modified.time',
        sort_type: 'desc',
      },
    },
    cache: { ttl: 5 * 60 * 1000 },
  });
  const {
    data: newReleasesChinaData,
    isLoading: isLoadingNewReleasesChina,
    error: errorNewReleasesChina,
  } = useQuery<FilmListAPIResponse>('danh-sach/phim-moi', {
    config: {
      params: {
        page: 1,
        limit: 20,
        country: 'trung-quoc',
        sort_field: 'modified.time',
        sort_type: 'desc',
      },
    },
    cache: { ttl: 5 * 60 * 1000 },
  });
  const {
    data: newReleasesVietnamData,
    isLoading: isLoadingNewReleasesVietnam,
    error: errorNewReleasesVietnam,
  } = useQuery<FilmListAPIResponse>('danh-sach/phim-moi', {
    config: {
      params: {
        page: 1,
        limit: 20,
        country: 'viet-nam',
        sort_field: 'modified.time',
        sort_type: 'desc',
      },
    },
    cache: { ttl: 5 * 60 * 1000 },
  });

  if (
    isLoadingNewReleasesKorean ||
    isLoadingNewReleasesChina ||
    isLoadingNewReleasesVietnam
  ) {
    return <Loader />;
  }

  if (
    errorNewReleasesKorean ||
    errorNewReleasesChina ||
    errorNewReleasesVietnam
  ) {
    return null;
  }
  return (
    <section className={cx('new-releases-section')}>
      <div className={cx('nrs__container')}>
        <NewReleasesList
          title="Phim Hàn Quốc mới"
          films={newReleasesKoreanData?.items || []}
          backgroundColor="linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(103, 65, 150) 130%)"
        />
        <NewReleasesList
          title="Phim Trung Quốc mới"
          films={newReleasesChinaData?.items || []}
          backgroundColor="linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(247, 161, 11) 130%)"
        />
        <NewReleasesList
          title="Phim Việt Nam mới"
          films={newReleasesVietnamData?.items || []}
          backgroundColor="linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(255, 0, 153) 130%)"
        />
      </div>
    </section>
  );
};
export default NewReleasesSection;
