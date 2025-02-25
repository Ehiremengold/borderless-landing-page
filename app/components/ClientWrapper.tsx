"use client"; // Mark this as a client component

import dynamic from "next/dynamic";

// Dynamically import the Download component
const Download = dynamic(() => import("@/app/sections/Download"), {
  ssr: false, // Only load on the client side
});

// Dynamically import the Download component
const Covered = dynamic(() => import("@/app/sections/Covered"), {
  ssr: false, // Only load on the client side
});

const Features = dynamic(() => import("@/app/sections/Features"), {
  ssr: false, // Only load on the client side
});

const ManyMore = dynamic(() => import("@/app/sections/ManyMore"), {
  ssr: false, // Only load on the client sid
});


const FAQ = dynamic(() => import("@/app/sections/FAQ"), {
  ssr: false, // Only load on the client sid
});


const Future = dynamic(() => import("@/app/sections/Future"), {
  ssr: false, // Only load on the client sid
});



const Footer = dynamic(() => import("@/app/sections/Footer"), {
  ssr: false, // Only load on the client sid
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
