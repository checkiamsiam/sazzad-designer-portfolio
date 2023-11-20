//= Packages
import Head from "next/head";
import Script from "next/script";
//= Common Styles
import RouteChangeLoadingWrapper from "@/components/Common/RouteSuspence";
import DefaultLayout from "@/layouts/default";
import "@/styles/globals.css";
import "swiper/css/bundle";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(
    <>
      <Head>
        <title>Sazzad Designs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" href="../../public/favicon.ico" />
      </Head>

      <RouteChangeLoadingWrapper>
        <Component {...pageProps} />
      </RouteChangeLoadingWrapper>

      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/TweenMax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/charming.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/countdown.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/parallax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/ScrollTrigger.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/gsap.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/isotope.pkgd.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/ScrollSmoother.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/showcase.min.js"></Script>
      <Script strategy="lazyOnload" src="/assets/js/imgReveal/demo.js"></Script>
      <Script strategy="lazyOnload" src="/assets/js/scripts.js"></Script>
    </>
  );
}

export default App;
