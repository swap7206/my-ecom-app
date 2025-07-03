import '@/styles/globals.scss';
import { ProductProvider } from '@/context/ProductContext';
import Header from '@/components/organisms/Header/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  );
}
