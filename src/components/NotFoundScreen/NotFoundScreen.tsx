import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './NotFoundScreen.module.scss';

const cx = classNames.bind(styles);

type NotFoundScreenProps = {
  title?: string;
  description?: string;
  image?: string;
};

const NotFoundScreen = ({
  title = 'Không tìm thấy trang',
  description = 'Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.',
  image = '/images/404.svg',
}: NotFoundScreenProps) => {
  return (
    <div className={cx('not-found-screen')}>
      <div className={cx('not-found-screen__container')}>
        <img
          src={image}
          alt="404 not found illustration"
          className={cx('not-found-screen__logo')}
        />

        <div className={cx('not-found-screen__content')}>
          <h1 className={cx('not-found-screen__title')}>{title}</h1>

          <p className={cx('not-found-screen__description')}>{description}</p>

          <Link to="/" className={cx('not-found-screen__button')}>
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundScreen;
