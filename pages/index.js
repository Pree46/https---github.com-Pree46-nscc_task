import Navbar from '@/components/Navbar.js';
import About from '@/components/About.js';
import Footer from '@/components/Footer.js';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex flex-col ${inter.className}`}>
        <main className='flex flex-col'>
          <Navbar />
          <About />
        </main>
        <Footer />
        </div>
  )
}
