import { ChakraProvider } from '@chakra-ui/react'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MoralisProvider appId='SfJUeNceU3ztGD447kMj0KHsdHmtOo6Tbs1h7Z5K' serverUrl='https://1eqou6x9lcjo.usemoralis.com:2053/server'>
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  )
}

export default MyApp
