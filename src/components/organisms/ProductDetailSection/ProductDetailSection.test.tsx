import { render, screen } from '@testing-library/react';
import ProductDetailSection from './ProductDetailSection';
import '@testing-library/jest-dom';
import { mockProduct } from '@/__mocks__/mockProduct';

// Mocks for Next.js Image and Link (if not already globally mocked)
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  }
}));

describe('ProductDetailSection', () => {
  it('renders product title, description, and price', () => {
    render(<ProductDetailSection {...mockProduct} />);

    expect(screen.getByRole('heading', { name: mockProduct.title })).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
  });

  it('renders the image with correct alt text and src', () => {
    render(<ProductDetailSection {...mockProduct} />);

    const image = screen.getByAltText(mockProduct.title) as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain(mockProduct.image);
  });

  it('renders both action buttons', () => {
    render(<ProductDetailSection {...mockProduct} />);

    expect(screen.getByRole('button', { name: /Add to Cart/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Buy Now/i })).toBeInTheDocument();
  });
});
