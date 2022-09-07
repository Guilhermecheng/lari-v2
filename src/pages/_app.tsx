import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import SiteLayout from '../components/SiteLayout';

import '../styles/swiperStyles.css';
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={ theme }>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ChakraProvider>
  )
}

export default MyApp