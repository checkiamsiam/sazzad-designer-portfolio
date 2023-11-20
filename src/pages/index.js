import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import Intro from "@/components/Home/Intro";
import Portfolio from "@/components/Home/Portfolio";
import ServiceMarque from "@/components/Home/ServiceMarque";
import Services from "@/components/Home/Services";
import Skills from "@/components/Home/Skills";

export default function Home() {
  return (
    <>
      <main className="main-bg ">
        <Banner />
        <ServiceMarque />
        <Services />
        <Intro />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
