import { render, screen } from '@testing-library/react';
import ProductGrid from './ProductGrid';
import { mockProducts } from '@/__mocks__/mockProducts';
import '@testing-library/jest-dom';

// Mock ProductCard
jest.mock('@/components/molecules/ProductCard/ProductCard', () => ({
  __esModule: true,
  default: ({ product }: any) => <div>{product.title}</div>
}));

describe('ProductGrid', () => {
  it('renders all products from the mock list', () => {
    render(<ProductGrid products={mockProducts} />);

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it('renders nothing if product list is empty', () => {
    render(<ProductGrid products={[]} />);
    expect(screen.queryByText(/Product/)).not.toBeInTheDocument();
  });
});
