import { Product } from '@/types/product';

const BASE_URL = 'https://fakestoreapi.com/products';

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const getProductById = async (id: number): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};
