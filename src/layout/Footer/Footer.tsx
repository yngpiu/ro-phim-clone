import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FOOTER_LEGAL_LIST } from '@/constants/legal';
import { SOCIALS } from '@/constants/socials';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer__overlay')}>
        <div className={cx('footer__container')}>
          <div className={cx('footer__top')}>
            <Link to="/" className={cx('footer__logo')}>
              <img src="/images/logo.svg" alt="Rổ Phim" />
            </Link>
            <div className={cx('social__list')}>
              {SOCIALS.map(social => {
                return (
                  <Link
                    key={social.id}
                    to={social.url}
                    className={cx('social__link')}
                  >
                    <img
                      src={social.image}
                      alt={social.name}
                      className={cx('social__icon')}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          <nav className={cx('footer__legal')}>
            <ul className={cx('legal__list')}>
              {FOOTER_LEGAL_LIST.map(legal => {
                return (
                  <li className={cx('legal__item')} key={legal.url}>
                    <Link to={legal.url} className={cx('legal__link')}>
                      {legal.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <p className={cx('footer__description')}>
            RoPhim – Phim hay cả rổ - Trang xem phim online chất lượng cao miễn
            phí Vietsub, thuyết minh, lồng tiếng full HD. Kho phim mới khổng lồ,
            phim chiếu rạp, phim bộ, phim lẻ từ nhiều quốc gia như Việt Nam, Hàn
            Quốc, Trung Quốc, Thái Lan, Nhật Bản, Âu Mỹ… đa dạng thể loại. Khám
            phá nền tảng phim trực tuyến hay nhất 2024 chất lượng 4K!
          </p>
          <p className={cx('footer__copyright')}>
            Copyright © 2025 RoPhim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
