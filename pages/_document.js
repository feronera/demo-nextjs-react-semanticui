import Document, {Head, Main, NextScript} from 'next/document'

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class IntlDocument extends Document {
  static async getInitialProps (context) {
    const props = await super.getInitialProps(context)
    const {req: {localeDataScript}} = context
    return {
      ...props,
      localeDataScript
    }
  }

  render () {
    return (
      <html>
        <Head>
          {/* Add stylesheet with all pages */}
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css" />
          {/* Add static font */}
          <link rel='stylesheet' href='/static/fonts/font-test.ttf?family=font-test' />
        </Head>
        <body>
          <Main />
          <script
            dangerouslySetInnerHTML={{
              __html: this.props.localeDataScript
            }}
          />
          <NextScript />
        </body>
      </html>
    )
  }
}
