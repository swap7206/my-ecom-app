'use client';

import React from 'react';
import styles from './ProductDetailSection.module.scss';
import Image from '@/components/atoms/Image/Image';
import Title from '@/components/atoms/Title/Title';
import Button from '@/components/atoms/Button/Button';

interface ProductDetailSectionProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const ProductDetailSection = ({
  image,
  title,
  description,
  price
}: ProductDetailSectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} width={300} height={300} />
      </div>

      <div className={styles.details}>
        <Title level={2}>{title}</Title>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>

        <div className={styles.actions}>
          <Button>Add to Cart</Button>
          <Button variant="secondary">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
