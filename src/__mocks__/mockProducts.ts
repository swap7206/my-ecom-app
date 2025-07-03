import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Mock Product One',
    price: 29.99,
    description: 'A mock description',
    category: 'electronics',
    image: 'https://example.com/image1.jpg'
  },
  {
    id: 2,
    title: 'Mock Product Two',
    price: 49.99,
    description: 'Another mock description',
    category: 'jewelery',
    image: 'https://example.com/image2.jpg'
  },
  {
    id: 3,
    title: 'Mock Product Three',
    price: 19.99,
    description: 'Yet another mock product',
    category: "men's clothing",
    image: 'https://example.com/image3.jpg'
  }
];
