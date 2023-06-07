import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        ©2023 <Link href={'/'}>AJ Dev</Link>. All rights reserved.
      </div>
      <div className={styles.social}>
        <Image src='/1.png' width={15} height={15} className={styles.icon} alt='Facebook' />
        <Image src='/2.png' width={15} height={15} className={styles.icon} alt='Instagram' />
        <Image src='/3.png' width={15} height={15} className={styles.icon} alt='Twitter' />
        <Image src='/4.png' width={15} height={15} className={styles.icon} alt='Youtube' />
      </div>
    </footer>
  );
};

export default Footer;
