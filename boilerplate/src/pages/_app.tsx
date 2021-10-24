import { ChakraProvider } from '@chakra-ui/react'
import { wrapPage } from '@v1v2/next'
import { nprogressNext } from '@v1v2/nprogress-next'

import theme from 'theme'

import 'focus-visible/dist/focus-visible'
import 'nprogress/nprogress.css'

nprogressNext({ minimum: 0.2, easing: 'ease', speed: 500, showSpinner: false, delay: 300 })

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>{wrapPage(Component, pageProps)}</ChakraProvider>
)

export default App
