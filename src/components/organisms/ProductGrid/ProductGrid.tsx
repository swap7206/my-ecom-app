'use client';

import React from 'react';
import styles from './ProductGrid.module.scss';
import ProductCard from '@/components/molecules/ProductCard/ProductCard';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
