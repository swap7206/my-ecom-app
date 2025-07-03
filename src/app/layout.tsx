import '@/styles/globals.scss';
import { ProductProvider } from '@/context/ProductContext';
import Header from '@/components/organisms/Header/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className='pageContainer'>
          <ProductProvider>{children}</ProductProvider>
        </div>
      </body>
    </html>
  );
}
