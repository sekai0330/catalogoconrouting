import Landing from '../components/Landing'
import Shop from '../components/Shop'
import { Sansita, Vollkorn, Source_Sans_3 } from 'next/font/google'
import Head from 'next/head'

export const sansita = Sansita({ 
  subsets: ['latin'],
  weight: ['400', '700']
})
export const vollkorn = Vollkorn({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700']
})
export const source = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Catalogo Muebleria</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta name='description' content='Las mejores opciones en muebles' />
      </Head>
      <main
        className={`${sansita.className} `}
      >
        <Landing />
        <Shop />
      </main>
    </>
  )
}
