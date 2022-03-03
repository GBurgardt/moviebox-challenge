import { Container } from '@mui/material'
import PageTitle from '../components/Common/PageTitle'
import SearchBar from '../components/Browse/SearchBar'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { theme } from '../lib/theme'
import { ThemeProvider } from '@mui/material/styles';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Container>
          <PageTitle
              title="MovieBox"
          />
          {router.pathname.indexOf('/movie') === -1 && <SearchBar />}
          
      </Container>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp