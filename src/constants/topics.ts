export type FilmTopic = {
  id: number;
  slug: string;
  name: string;
  colorHex: string;
  apiKey: string;
};

export const filmTopics: FilmTopic[] = [
  {
    id: 1,
    slug: 'phim-chieu-rap',
    name: 'Phim Chiếu Rạp',
    colorHex: '#324FD1',
    apiKey: 'phim-chieu-rap',
  },
  {
    id: 2,
    slug: 'phim-long-tieng',
    name: 'Phim Lồng Tiếng',
    colorHex: '#9616D1',
    apiKey: 'phim-long-tien',
  },
  {
    id: 3,
    slug: 'phim-thuyet-minh',
    name: 'Phim Thuyết Minh',
    colorHex: '#1B856C',
    apiKey: 'phim-thuyet-minh',
  },
  {
    id: 4,
    slug: 'phim-hoat-hinh',
    name: 'Hoạt Hình',
    colorHex: '#666699',
    apiKey: 'phim-hoat-hinh',
  },
  {
    id: 5,
    slug: 'chuong-trinh-truyen-hinh',
    name: 'Chương Trình Truyền Hình',
    colorHex: '#7761B4',
    apiKey: 'tv-shows',
  },
  {
    id: 6,
    slug: 'phim-bo-dang-chieu',
    name: 'Phim Bộ Đang Chiếu',
    colorHex: '#218A8F',
    apiKey: 'phim-bo-dang-chieu',
  },
  {
    id: 7,
    slug: 'phim-bo-hoan-thanh',
    name: 'Phim Bộ Hoàn Thành',
    colorHex: '#a73939',
    apiKey: 'phim-bo-hoan-thanh',
  },
  {
    id: 8,
    slug: 'phim-viet-hoa',
    name: 'Phim Việt Hóa',
    colorHex: '#4aa941',
    apiKey: 'phim-vietsub',
  },
  {
    id: 9,
    slug: 'phim-sap-chieu',
    name: 'Phim Sắp Chiếu',
    colorHex: '#cd7e5f',
    apiKey: 'phim-sap-chieu',
  },
];
