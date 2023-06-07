// "use client"
import Navbar from '@/components/Navbar';
import './globals.css';
// import { Inter, Roboto } from 'next/font/google';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const inter = Inter({ subsets: ['latin'] });
// by default all components renders on the server side but if you want to render any component on client side then just use "use client" at the top of the file

// this metadata is render or used in server Components
export const metadata = {
  title: 'AJ Dev',
  description: 'This is a description',
};

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }

export default function App({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
