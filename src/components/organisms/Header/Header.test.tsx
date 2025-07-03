import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

jest.mock('next/link', () => {
  const Link = ({ children, href }: any) => <a href={href}>{children}</a>;
  Link.displayName = 'MockNextLink';
  return Link;
});

describe('Header', () => {
  it('renders the logo text', () => {
    render(<Header />);
    const logo = screen.getByText(/StoreApp/i);
    expect(logo).toBeInTheDocument();
  });

  it('logo link points to home', () => {
    render(<Header />);
    const link = screen.getByRole('link', { name: /storeapp/i });
    expect(link).toHaveAttribute('href', '/');
  });
});
