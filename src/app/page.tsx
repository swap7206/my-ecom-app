import Link from 'next/link';
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to the StoreApp</h1>
      <p className={styles.description}>
        Go to the{' '}
        <Link href="/products" className={styles.link}>
          products page
        </Link>
        .
      </p>
    </main>
  );
}
