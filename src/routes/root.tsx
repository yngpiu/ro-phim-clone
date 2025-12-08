import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/components/layout/RootLayout/RootLayout';
import FilmDetail from '@/pages/FilmDetail/FilmDetail';
import FilmList from '@/pages/FilmList/FilmList';
import Home from '@/pages/HomePage/Home';
import TopicList from '@/pages/TopicList/TopicList';
import WatchFilm from '@/pages/WatchFilm/WatchFilm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'the-loai/:slug',
        element: <FilmList />,
      },
      {
        path: 'quoc-gia/:slug',
        element: <FilmList />,
      },
      {
        path: 'phim-le',
        element: <FilmList />,
      },
      {
        path: 'phim-bo',
        element: <FilmList />,
      },
      {
        path: 'chu-de',
        element: <TopicList />,
      },
      {
        path: 'chu-de/:slug',
        element: <FilmList />,
      },
      { path: 'phim/:slug', element: <FilmDetail /> },

      { path: 'xem-phim/:slug', element: <WatchFilm /> },
    ],
  },
]);

export default router;
