'use client';
import Link from 'next/link';
import styles from './navbar.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blogs',
    url: '/blogs',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <header className={styles.header}>
      <Link href={'/'}>AJ Dev</Link>
      <nav>
        <DarkModeToggle />
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        {session.status === 'authenticated' && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
