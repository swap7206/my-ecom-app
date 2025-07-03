import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetailsTemplate from './ProductDetailsTemplate';
import { mockProduct } from '@/__mocks__/mockProduct';
import '@testing-library/jest-dom';

jest.mock('@/context/ProductContext', () => ({
  useProductContext: () => ({
    state: {
      productMap: {
        [mockProduct.id]: mockProduct,
      },
    },
    dispatch: jest.fn(),
  }),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt || 'mock-image'} />,
}));

jest.mock('next/link', () => {
  const Link = ({ children, href }: any) => <a href={href}>{children}</a>;
  Link.displayName = 'MockNextLink';
  return Link;
});

describe('ProductDetailsTemplate', () => {
  it('renders product details from cache', async () => {
    render(<ProductDetailsTemplate productId={mockProduct.id} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
  });

  it('renders breadcrumb link', async () => {
    render(<ProductDetailsTemplate productId={mockProduct.id} />);

    const breadcrumb = screen.getByRole('link', { name: /products/i });
    expect(breadcrumb).toHaveAttribute('href', '/products');
    expect(screen.getByText(new RegExp(`> ${mockProduct.title}`))).toBeInTheDocument();
  });
});
