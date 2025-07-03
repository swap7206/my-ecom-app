import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';
import { mockProduct } from '@/__mocks__/mockProduct';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

jest.mock('next/link', () => {
  const Link = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  Link.displayName = 'NextLinkMock';
  return Link;
});

describe('ProductCard', () => {
  it('renders product title, price, image and badge', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$49.99')).toBeInTheDocument();
    expect(screen.getByText('electronics')).toBeInTheDocument();

    const image = screen.getByAltText('Test Product') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('example.com/product.jpg');
  });

  it('renders "Add to Cart" button and prevents navigation on click', () => {
    render(<ProductCard product={mockProduct} />);

    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeInTheDocument();

    const preventDefault = jest.fn();
    const stopPropagation = jest.fn();

    fireEvent.click(button, {
      preventDefault,
      stopPropagation,
    });

    expect(preventDefault).not.toHaveBeenCalled();
  });

  it('navigates to correct product detail page on card click', () => {
    render(<ProductCard product={mockProduct} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/products/1');
  });
});
