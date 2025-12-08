import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './LogoLink.module.scss';

const cx = classNames.bind(styles);

type LogoLinkProps = {
  className?: string;
};

const LogoLink = ({ className }: LogoLinkProps) => {
  return (
    <Link to="/" className={cx('logo', className)}>
      <img src="/images/logo.svg" alt="Logo" />
    </Link>
  );
};
export default LogoLink;
