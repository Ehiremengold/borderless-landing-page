import Header from "./components/Header";
import Covered from "./sections/Covered";
import Download from "./sections/Download";
import Features from "./sections/Features";
import ManyMore from "./sections/ManyMore";
import FAQ from "./sections/FAQ";
// import Partners from "./sections/Partners";
import Future from "./sections/Future";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Download />
      <Features />
      <Covered />
      <ManyMore />
      <FAQ />
      {/* <Partners /> */}
      <Future />
      <Footer/>
    </>
  );
}
