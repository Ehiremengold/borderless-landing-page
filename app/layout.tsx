import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Borderless | Transaction made Fun!",
  description:
    "Discover innovative financial solutions with our sleek and user-friendly fintech platform. Secure, efficient, and designed for growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${inter.variable} ${caveat.variable} antialiased bg-white`}
      >
        {children}
        <Script
          src="./node_modules/preline/dist/preline.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
