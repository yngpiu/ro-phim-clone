import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './NotFoundScreen.module.scss';

const cx = classNames.bind(styles);

const NotFoundScreen = () => {
  return (
    <div className={cx('not-found-screen')}>
      <div className={cx('not-found-screen__container')}>
        <img
          src="/images/404.svg"
          alt="404"
          className={cx('not-found-screen__logo')}
        />
        <div className={cx('not-found-screen__content')}>
          <h1 className={cx('not-found-screen__title')}>
            Không tìm thấy trang
          </h1>
          <p className={cx('not-found-screen__description')}>
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
          <Link to="/" className={cx('not-found-screen__button')}>
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFoundScreen;
