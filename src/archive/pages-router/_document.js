import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                {/* Add Google Fonts or other preloads here */}
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
