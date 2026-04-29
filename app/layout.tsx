import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sissy.sk"),
  title: {
    default: "SISSY kaderníctvo Šamorín | Farbenie, melír, strihy a styling",
    template: "%s | SISSY kaderníctvo Šamorín",
  },
  description:
    "SISSY kaderníctvo v Šamoríne. Farbenie, melír, blond premeny, dámske, pánske a detské strihy, fúkaná, styling, spoločenské účesy a profesionálna starostlivosť o vlasy.",
  keywords: [
    "SISSY kaderníctvo",
    "kaderníctvo Šamorín",
    "kadernictvo Samorin",
    "fodrászat Somorja",
    "farbenie vlasov Šamorín",
    "melír Šamorín",
    "blond premeny Šamorín",
    "dámsky strih Šamorín",
    "pánsky strih Šamorín",
    "detský strih Šamorín",
    "spoločenský účes Šamorín",
    "fúkaná Šamorín",
    "styling Šamorín",
    "kaderníctvo Somorja",
  ],
  alternates: {
    canonical: "https://www.sissy.sk",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SISSY kaderníctvo Šamorín",
    description:
      "Farbenie, melír, blond premeny, strihy, styling a profesionálna starostlivosť o vlasy v Šamoríne.",
    url: "https://www.sissy.sk",
    siteName: "SISSY kaderníctvo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SISSY kaderníctvo Šamorín",
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SISSY kaderníctvo Šamorín",
    description:
      "Farbenie, melír, blond premeny, strihy, styling a profesionálna starostlivosť o vlasy v Šamoríne.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XFFQ84C898"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XFFQ84C898');
          `}
        </Script>

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wj81u829yb");
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}