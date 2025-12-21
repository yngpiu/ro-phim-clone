import classNames from 'classnames/bind';

import styles from './ErrorScreen.module.scss';

const cx = classNames.bind(styles);

const ErrorScreen = ({
  title = 'Đã xảy ra lỗi',
  description = 'Đã xảy ra lỗi khi tải trang này. Vui lòng thử lại sau.',
  image = '/images/404.svg',
}) => {
  return (
    <div className={cx('error-screen')}>
      <div className={cx('error-screen__container')}>
        <img
          src={image}
          alt="error illustration"
          className={cx('error-screen__illustration')}
        />

        <div className={cx('error-screen__content')}>
          <h1 className={cx('error-screen__title')}>{title}</h1>

          <p className={cx('error-screen__description')}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;
