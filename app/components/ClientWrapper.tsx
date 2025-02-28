"use client"; // Mark this as a client component

import dynamic from "next/dynamic";


const Download = dynamic(() => import("@/app/sections/Download"), {
  ssr: false, 
});


const Covered = dynamic(() => import("@/app/sections/Covered"), {
  ssr: false, 
});

const Features = dynamic(() => import("@/app/sections/Features"), {
  ssr: false, 
});

const ManyMore = dynamic(() => import("@/app/sections/ManyMore"), {
  ssr: false, 
});


const FAQ = dynamic(() => import("@/app/sections/FAQ"), {
  ssr: false, 
});


const Future = dynamic(() => import("@/app/sections/Future"), {
  ssr: false,
});



const Footer = dynamic(() => import("@/app/sections/Footer"), {
  ssr: false, 
});



const ClientWrapper = () => {
  return (
    <>
      <Download />
      <Covered />
      <Features />
      <ManyMore/>
      <FAQ/>
      <Future/>
      <Footer/>
    </>
  );
};

export default ClientWrapper;
