import {Inter} from 'next/font/google';
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inknut Antiqua"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inria Sans"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Iowan Old Style"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Iowan Inria Serif"></link>
      </body>
    </html>
  )
}
