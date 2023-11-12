import '../styles/globals.css'
import { FilterProvider } from '../context/filter'

export default function App({ Component, pageProps }) {
  return (
    <FilterProvider>
      <Component {...pageProps} />
    </FilterProvider>
  )
}
