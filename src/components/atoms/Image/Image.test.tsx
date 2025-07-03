import { render, screen } from '@testing-library/react';
import Image from './Image';

describe('Image Component', () => {
  const altText = 'Sample Image';
  const src = 'https://example.com/image.jpg';

  it('renders an image with the correct alt text and src', () => {
    render(
        <Image
        src={src}
        alt={altText}
        width={100}
        height={100}
        priority
        />
    );

    const img = screen.getByAltText(altText);
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toContain('example.com');
    });

  it('applies the custom className if provided', () => {
    render(
      <Image
        src={src}
        alt={altText}
        width={100}
        height={100}
        className="custom-class"
      />
    );

    const img = screen.getByAltText(altText);
    expect(img.className).toMatch(/custom-class/);
  });
});
