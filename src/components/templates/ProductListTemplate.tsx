'use client';

import React, { useEffect, useState } from 'react';
import ProductGrid from '@/components/organisms/ProductGrid/ProductGrid';
import { useProductContext } from '@/context/ProductContext';
import Title from '@/components/atoms/Title/Title';
import { getAllProducts } from '@/services/productService';
import styles from './index.module.scss';

const ProductListTemplate = () => {
  const { state, dispatch } = useProductContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      if (state.products.length === 0) {
        setLoading(true);
        try {
          const products = await getAllProducts();
          dispatch({ type: 'SET_PRODUCTS', payload: products });
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadProducts();
  }, [state.products.length, dispatch]);

  return (
    <div className={styles.container}>
      <Title level={1}>Products</Title>

      {loading && <p>Loading products...</p>}

      {!loading && state.products.length === 0 && (
        <p>No products found.</p>
      )}

      {!loading && state.products.length > 0 && (
        <ProductGrid products={state.products} />
      )}
    </div>
  );
};

export default ProductListTemplate;
