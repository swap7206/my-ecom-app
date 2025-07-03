import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title Component', () => {
  it('renders with default level (h2)', () => {
    render(<Title>Default Title</Title>);
    const heading = screen.getByRole('heading', { name: /default title/i });
    expect(heading.tagName.toLowerCase()).toBe('h2');
    expect(heading).toHaveClass('h2');
  });

  it('renders with level h1', () => {
    render(<Title level={1}>Heading One</Title>);
    const heading = screen.getByRole('heading', { name: /heading one/i });
    expect(heading.tagName.toLowerCase()).toBe('h1');
    expect(heading).toHaveClass('h1');
  });

  it('renders with level h3', () => {
    render(<Title level={3}>Heading Three</Title>);
    const heading = screen.getByRole('heading', { name: /heading three/i });
    expect(heading.tagName.toLowerCase()).toBe('h3');
    expect(heading).toHaveClass('h3');
  });

  it('renders children content correctly', () => {
    render(<Title>Some Custom Text</Title>);
    expect(screen.getByText('Some Custom Text')).toBeInTheDocument();
  });
});
