'use client';

import { HTMLAttributes } from 'react';
import styles from './Badge.module.scss';
import clsx from 'clsx';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'secondary' | 'accent';
}

const Badge = ({ className, variant = 'default', ...props }: BadgeProps) => {
  return (
    <div
      className={clsx(styles.badge, styles[variant], className)}
      {...props}
    />
  );
};

export default Badge;
