import "./globals.css";

import type { Metadata } from "next";
import { Roboto, Sedgwick_Ave_Display } from "next/font/google";
import Script from "next/script";

import { NeonTattooJsonLd } from "../lib/seo/jsonld";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { homePageSeo } from "./seo/home";

export const metadata: Metadata = homePageSeo;

type Props = {
  children: React.ReactNode;
};

const sedwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sedwick",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${roboto.variable} ${sedwick.variable} roboto antialiased`}>
        <Header />

        <main className="min-h-screen">{children}</main>

        <Footer />

        <Script id="layout-jsonld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(NeonTattooJsonLd)}
        </Script>
      </body>
    </html>
  );
}
