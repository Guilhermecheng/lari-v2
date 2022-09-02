import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/lari-v2-icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,400&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#181818" />
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}