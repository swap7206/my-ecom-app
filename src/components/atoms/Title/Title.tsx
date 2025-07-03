'use client';

import React, { JSX } from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
}

const Title = ({ children, level = 2 }: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={styles[`h${level}`]}>{children}</Tag>;
};

export default Title;
