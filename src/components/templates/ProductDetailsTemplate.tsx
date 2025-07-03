'use client';

import React, { useEffect, useState } from 'react';
import ProductDetailSection from '@/components/organisms/ProductDetailSection/ProductDetailSection';
import Title from '@/components/atoms/Title/Title';
import { useProductContext } from '@/context/ProductContext';
import { getProductById } from '@/services/productService';
import Loader from '@/components/atoms/Loader/Loader';
import Link from 'next/link';
import styles from './index.module.scss';


interface Props {
  productId: number;
}

const ProductDetailsTemplate = ({ productId }: Props) => {
  const { state, dispatch } = useProductContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cachedProduct = state.productMap[productId];

  useEffect(() => {
    const loadProduct = async () => {
      if (cachedProduct) return;

      setLoading(true);
      try {
        const product = await getProductById(productId);
        dispatch({ type: 'SET_PRODUCT_CACHE', payload: product });
      } catch {
        setError('Failed to load product.');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId, cachedProduct, dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!cachedProduct) return null;

  return (
    <div className={styles.container}>
      <Title level={3}>
        <Link href="/products" style={{ textDecoration: 'underline', color: 'var(--primary-color)' }}>
          Products
        </Link>{' '}
        &gt; {cachedProduct.title}
      </Title>
      <ProductDetailSection
        image={cachedProduct.image}
        title={cachedProduct.title}
        description={cachedProduct.description}
        price={cachedProduct.price}
      />
    </div>
  );
};

export default ProductDetailsTemplate;
