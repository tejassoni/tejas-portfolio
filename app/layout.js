import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Tejas Soni - Expert Software Engineer | Lead',
  description: 'Tejas Dilipkumar Soni, a seasoned Senior Software Engineer with over 9 years of extensive experience in the field. I am deeply passionate about programming and thrive on the challenges it presents. Throughout my career, I have honed my skills in various technologies, specializing in PHP frameworks like Laravel and CodeIgniter, as well as GoLang for high-performance applications With a strong foundation in database management, I haWWive worked extensively with MySQL and MongoDB, ensuring efficient data storage and retrieval. JavaScript is at the heart of my development journey, and I leverage its power along with libraries like jQuery and frameworks like React to create dynamic and user-friendly web applications. I am available for any kind of job opportunity that suits my skills and interests.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
