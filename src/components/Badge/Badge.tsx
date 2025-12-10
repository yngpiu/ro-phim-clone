import classNames from 'classnames/bind';

import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

type BadgeProps = {
  children: React.ReactNode;

  className?: string;
};

const Badge = ({ children, className }: BadgeProps) => {
  return <div className={cx('badge', className)}>{children}</div>;
};
export default Badge;
