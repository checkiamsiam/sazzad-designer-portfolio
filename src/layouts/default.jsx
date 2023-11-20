//= Packages
import Head from "next/head";
//= Scripts
//= Components
import Footer from "@/components/Common/Footer";
import Loader from "@/components/Common/Loader";
import MainNavbar from "@/components/Common/MainNavbar";
import ProgressScroll from "@/components/Common/ProgressScroll";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" href="/dark/assets/css/base.css" />
      </Head>

      <Loader />
      <ProgressScroll />

      <div id="smooth-wrapper">
        <MainNavbar mainBg noStatic />
        <div id="smooth-content">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
