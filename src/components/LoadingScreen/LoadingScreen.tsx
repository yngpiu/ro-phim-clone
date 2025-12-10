import classNames from 'classnames/bind';

import styles from './LoadingScreen.module.scss';

const cx = classNames.bind(styles);

const LoadingScreen = () => {
  return (
    <div className={cx('loading-screen')}>
      <div className={cx('loading-screen__container')}>
        <img
          src="/images/logo.svg"
          alt="logo"
          className={cx('loading-screen__logo')}
        />
        <h1 className={cx('loading-screen__title')}>
          Xem Phim Miễn Phí Cực Nhanh, Chất Lượng Cao và Cập Nhật Liên Tục
        </h1>
      </div>
    </div>
  );
};
export default LoadingScreen;
