export type FilmListSlug =
  | 'phim-moi'
  | 'phim-bo'
  | 'phim-le'
  | 'tv-shows'
  | 'hoat-hinh'
  | 'phim-vietsub'
  | 'phim-thuyet-minh'
  | 'phim-long-tien'
  | 'phim-bo-dang-chieu'
  | 'phim-bo-hoan-thanh'
  | 'phim-sap-chieu'
  | 'subteam'
  | 'phim-chieu-rap';

export type FilmListParams = {
  page: number;
  limit: number;
  sort_field: 'modified.time' | 'year' | '_id';
  sort_type: 'asc' | 'desc';
  category: string;
  country: string;
  year: number;
};

export type BreadCrumb = {
  name: string;
  slug: 'string';
  isCurrent: boolean;
  position: number;
};

export type SeoOnPage = {
  og_type: string;
  titleHead: string;
  descriptionHead: string;
  og_image: string[];
  og_url: string;
};

export type Tmdb = {
  type: string;
  id: string;
  season: number;
  vote_average: number;
  vote_count: number;
};

export type Imdb = {
  id: string;
  vote_average: number;
  vote_count: number;
};

export type Modified = {
  time: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Country = {
  id: string;
  name: string;
  slug: string;
};

export type LastEpisode = {
  server_name: string;
  is_ai: boolean;
  name: string;
};

export type Pagination = {
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
  pageRanges: number;
};

export type Params = {
  type_slug: string;
  filterCategory: string[];
  filterCountry: string[];
  filterYear: number;
  filterType: string;
  sortField: 'modified.time' | 'year' | '_id' | '';
  sortType: 'asc' | 'desc' | '';
  pagination: Pagination;
};

export type Film = {
  tmdb: Tmdb;
  imdb: Imdb;
  modified: Modified;
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  type: string;
  thumb_url: string;
  poster_url: string;
  sub_docquyen: boolean;
  chieurap: boolean;
  time: string;
  episode_current: string;
  quality: string;
  lang: string;
  year: number;
  category: Category[];
  country: Country[];
  alternative_names: string[];
  lang_key: string[];
  last_episode: LastEpisode[];
};

export type ResponseFilmList = {
  seoOnPage: SeoOnPage;
  breadCrumb: BreadCrumb[];
  titlePage: string;
  items: Film[];
  params: Params;
  type_list: string;
  APP_DOMAIN_FRONTEND: string;
  APP_DOMAIN_CDN_IMAGE: string;
};
