import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    // cache: 'default',
    // cache: 'force-cache', // if your data never changes (static data fetching)  and cache the results
    // cache: 'no-cache',
    // cache: 'only-if-cached',
    // cache: 'reload',
    cache: 'no-store', // if you want to fetch everytime fresh data (dynamic data fetching)

    // next: { revalidate: 10 }, // if data changes but not to often (revalidate data) in every desired seconds
  });

  if (!res.ok) {
    // throw new Error('Failed to fetch data');
    return notFound();
  }

  return res.json();
}

export const metadata = {
  title: 'AJ Dev Blogs',
  description: 'This is a description',
};

const Blogs = async () => {
  const data = await getData();
  console.log({ data });
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blogs/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image src={item.img} alt='' width={400} height={250} className={styles.image} />
          </div>
          <div>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
