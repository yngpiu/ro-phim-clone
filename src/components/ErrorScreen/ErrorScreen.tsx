import classNames from 'classnames/bind';

import styles from './ErrorScreen.module.scss';

const cx = classNames.bind(styles);

const ErrorScreen = () => {
  return (
    <div className={cx('error-screen')}>
      <div className={cx('error-screen__container')}>
        <img
          src="/images/404.svg"
          alt="logo"
          className={cx('error-screen__logo')}
        />
        <div className={cx('error-screen__content')}>
          <h1 className={cx('error-screen__title')}>Đã xảy ra lỗi</h1>
          <p className={cx('error-screen__description')}>
            Đã xảy ra lỗi khi tải trang này. Vui lòng thử lại sau.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ErrorScreen;
