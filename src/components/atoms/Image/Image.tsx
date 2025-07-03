'use client';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import styles from './Image.module.scss';
import clsx from 'clsx';

type Props = NextImageProps & {
  className?: string;
};

const Image = ({ className, ...props }: Props) => {
  return <NextImage className={clsx(styles.image, className)} {...props} />;
};

export default Image;
