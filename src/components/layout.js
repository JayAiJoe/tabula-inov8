
import styles from './layout.module.css';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children}) {
  return (
    <div className={styles.container}>


      <main>{children}</main>

    </div>
  );
}