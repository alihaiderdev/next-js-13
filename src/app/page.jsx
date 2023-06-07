import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.png';
import Button from '@/components/Button/Button';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your Idea into Reality. We bring together the teams from the global tech industry.</p>
        <Button url='/portfolio' text='See Our Works' />
      </div>
      <div className={styles.item}>
        {/* if we use our next js image component like this then we dont need to add with and height props of image component  */}
        <Image src={Hero} alt='hero-image' className={styles.img} />
        {/* <Image
        src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='hero-image'
        className={styles.image}
        width={500}
        height={500}
      /> */}
      </div>
    </div>
  );
};

export default Home;
