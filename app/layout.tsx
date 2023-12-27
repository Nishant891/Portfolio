import './globals.css'
import { Inter } from 'next/font/google'
import Mode from './components/mode_button'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Nishant's Portfolio",
  description: 'I am a full-stack developer. I have build many cool projects and participated and won in hackathon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 pt-22 sm:pt-32 dark:bg-gray-950 dark:text-gray-50`}>
        {children}
        <Mode />
        <ToastContainer autoClose={1500} />
      </body>
    </html>
  )
}
