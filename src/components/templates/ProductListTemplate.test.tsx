import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProductListTemplate from './ProductListTemplate';
import { mockProducts } from '@/__mocks__/mockProducts';
import '@testing-library/jest-dom';
import * as productContext from '@/context/ProductContext';
import * as productService from '@/services/productService';

jest.mock('@/components/organisms/ProductGrid/ProductGrid', () => ({
  __esModule: true,
  default: ({ products }: any) => (
    <div>{`Mocked ProductGrid with ${products.length} products`}</div>
  ),
}));

jest.mock('@/context/ProductContext', () => {
  const originalModule = jest.requireActual('@/context/ProductContext');
  return {
    ...originalModule,
    useProductContext: jest.fn(),
  };
});

jest.mock('@/services/productService');

const mockDispatch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();

  (productContext.useProductContext as jest.Mock).mockReturnValue({
    state: { products: [] },
    dispatch: mockDispatch,
  });
});

describe('ProductListTemplate', () => {
  it('renders the Products title', () => {
    render(<ProductListTemplate />);
    expect(screen.getByRole('heading', { name: /products/i })).toBeInTheDocument();
  });

  it('shows loading message while fetching', async () => {
    (productService.getAllProducts as jest.Mock).mockResolvedValueOnce(mockProducts);

    render(<ProductListTemplate />);

    expect(screen.getByText(/loading products/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/loading products/i)).not.toBeInTheDocument();
    });
  });

  it('shows "No products found" when fetch returns empty array', async () => {
    (productService.getAllProducts as jest.Mock).mockResolvedValueOnce([]);

    render(<ProductListTemplate />);

    await waitFor(() => {
      expect(screen.getByText(/no products found/i)).toBeInTheDocument();
    });
  });

  it('renders ProductGrid when products are returned', async () => {
    (productService.getAllProducts as jest.Mock).mockResolvedValueOnce(mockProducts);

    (productContext.useProductContext as jest.Mock).mockReturnValueOnce({
      state: { products: mockProducts },
      dispatch: mockDispatch,
    });

    render(<ProductListTemplate />);

    await waitFor(() => {
      expect(
        screen.getByText(`Mocked ProductGrid with ${mockProducts.length} products`)
      ).toBeInTheDocument();
    });
  });

  it('dispatches SET_PRODUCTS with fetched products', async () => {
    (productService.getAllProducts as jest.Mock).mockResolvedValueOnce(mockProducts);

    render(<ProductListTemplate />);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'SET_PRODUCTS',
        payload: mockProducts,
      });
    });
  });
});
