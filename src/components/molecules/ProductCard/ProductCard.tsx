'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.scss';
import { Product } from '@/types/product';
import Badge from '@/components/atoms/Badge/Badge';
import Button from '@/components/atoms/Button/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link href={`/products/${product.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.badgeWrapper}>
          <Badge variant="success" className={styles.badge}>
            {product.category}
          </Badge>
        </div>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.details}>
        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.footer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
            <Button onClick={handleClick}>
              <span className={styles.cartIcon}>🛒</span> Add to Cart
            </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
