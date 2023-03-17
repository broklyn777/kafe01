import React from 'react'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '@/styles/globals.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl7/1p6OMU6opp7UkuIS65VI4M7VprJwgUu+7gZK01" crossOrigin="anonymous" />


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
