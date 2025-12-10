export type FilmTopic = {
  id: number;
  slug: string;
  name: string;
  colorHex: string;
};

export const filmTopics: FilmTopic[] = [
  {
    id: 1,
    slug: 'phim-sap-chieu',
    name: 'Phim Sắp Chiếu',
    colorHex: '#324FD1',
  },
  {
    id: 2,
    slug: 'phim-long-tieng',
    name: 'Phim Lồng Tiếng',
    colorHex: '#9616D1',
  },
  {
    id: 3,
    slug: 'phim-thuyet-minh',
    name: 'Phim Thuyết Minh',
    colorHex: '#1B856C',
  },
  {
    id: 4,
    slug: 'hoat-hinh',
    name: 'Hoạt Hình',
    colorHex: '#666699',
  },
  {
    id: 5,
    slug: 'chuong-trinh-truyen-hinh',
    name: 'Chương Trình Truyền Hình',
    colorHex: '#7761B4',
  },
  {
    id: 6,
    slug: 'phim-bo-dang-chieu',
    name: 'Phim Bộ Đang Chiếu',
    colorHex: '#218A8F',
  },
  {
    id: 7,
    slug: 'phim-bo-hoan-thanh',
    name: 'Phim Bộ Hoàn Thành',
    colorHex: '#CD7E5F',
  },
];
