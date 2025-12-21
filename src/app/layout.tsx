import "./globals.css";

import type { Metadata } from "next";
import { Roboto, Sedgwick_Ave_Display } from "next/font/google";
import Script from "next/script";

import { NeonTattooJsonLd } from "../lib/seo/jsonld";
import { homePageSeo } from "./(site)/seo/home";

export const metadata: Metadata = homePageSeo;

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${roboto.variable} ${sedwick.variable} roboto antialiased`}>
        <Script
          id="jsonld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(NeonTattooJsonLd) }}
        />

        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HHWR71217Q"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HHWR71217Q', { 
              anonymize_ip: true 
            });
          `}
        </Script>
      </body>
    </html>
  );
}
