"use client"
import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'
import Navbar from './ui/Navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[#010309]'>
          <Navbar />
          <Main />
          <NextScript />
          <Footer />
      </body>
    </Html>
  )
}
