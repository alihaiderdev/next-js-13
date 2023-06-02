'use client';
import Link from 'next/link';

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
    title: 'Blog',
    url: '/blog',
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
  console.log('Navbar');
  return (
    <header>
      <Link href={'/'}>AJ Dev</Link>
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            console.log('logout');
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
