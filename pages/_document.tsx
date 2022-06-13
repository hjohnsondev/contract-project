import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head >
            <meta charSet='utf-8' />
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css" />
        </Head> 
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}