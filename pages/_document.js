import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="description"
            content="Mushfik's programming portfolio. Discover projects, skills, and contact information for Mushfik Mahi, a dedicated programmer."
          />
          <meta
            name="keywords"
            content="Mushfik programming, Mushfik portfolio, Mushfik Mahi, programming, web development, Mushfik site, Mushfik, nojs, nojsMushfik, Mushfik.site, Mushfik.site, muhammad Mushfik Mahi, raffi dosq 15, website raffi, website Mushfik, portofolio Mushfik, portofolio raffi, Nojs Mushfik, Photography, Portofolio, website"
          />
          <meta property="og:title" content="Mushfik's Programming Portfolio" />
          <meta
            property="og:description"
            content="Explore the programming projects and skills of Mushfik Mahi. Connect and collaborate with Mushfik on various programming endeavors."
          />
          <meta property="og:image" content="/banner-Mushfik-website.webp" />
          <meta property="og:url" content="https://Mushfik.site" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Mushfik's Programming Portfolio"
          />
          <meta
            name="twitter:description"
            content="Explore the programming projects and skills of Mushfik Mahi. Connect and collaborate with Mushfik on various programming endeavors."
          />
          <meta name="twitter:image" content="/banner-Mushfik-website.webp" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
