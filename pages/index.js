import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="min-h-screen">
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
        <meta name="twitter:title" content="Mushfik's Programming Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the programming projects and skills of Mushfik Mahi. Connect and collaborate with Mushfik on various programming endeavors."
        />
        <meta name="twitter:image" content="/banner-Mushfik-website.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mushfik Mahi" />
        <meta name="theme-color" content="#000428" />
        <meta name="msapplication-navbutton-color" content="#000428" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000428" />
        <title>Mushfik Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Header />
      <Analytics />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <main className="max-w-screen-xl mx-auto">
          <Hero />
          <About />
          <Certificates />
          <Projects />
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          >
            <Contact />
          </GoogleReCaptchaProvider>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Home;
