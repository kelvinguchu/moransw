import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.astraque.com"),
  title: {
    default: "Astraque Softwares | Website & Software Development Solutions",
    template: "%s | Astraque Softwares",
  },
  description:
    "Professional web design, web development, software development, and graphic design services. Transform your digital presence with Astraque Softwares.",
  keywords: [
    "website development",
    "website design",
    "website development company",
    "website development services",
    "website design company",
    "website design services",
    "software development",
    "software development services",
    "software development company",
    "software development solutions",
    "SEO services",
    "SEO company",
    "SEO solutions",
    "graphic design",
    "graphic design services",
    "graphic design company",
    "graphic design solutions",
    "digital marketing",
    "digital marketing services",
    "digital marketing company",
    "digital marketing solutions",
    "ecommerce development",
    "ecommerce development services",
    "ecommerce development company",
    "ecommerce development solutions",
    "Best website development company",
    "Best website development services",
    "Best website development solutions",
    "Best software development company",
    "Best software development services",
    "Best software development solutions",
    "Best graphic design company",
    "Best graphic design services",
    "Best graphic design solutions",
    "Best digital marketing company",
    "Best digital marketing services",
    "Best digital marketing solutions",
    "Best ecommerce development company",
    "Best ecommerce development services",
    "Best ecommerce development solutions",
    "Best SEO company",
    "Best SEO services",
    "Best SEO solutions",
    "Astraque Softwares",
    "Digital solutions",
  ],
  authors: [{ name: "Astraque Softwares" }],
  creator: "Astraque Softwares",
  publisher: "Astraque Softwares",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Astraque Softwares",
    title: "Astraque Softwares | Web & Software Development Solutions",
    description:
      "Professional web design, web development, software development, and graphic design services. Transform your digital presence with Astraque Softwares.",
    url: "https://www.astraque.com",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Astraque Softwares - Professional Web & Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astraque Softwares | Web & Software Development Solutions",
    description:
      "Professional web design, web development, software development, and graphic design services.",
    site: "@astraque_kenya",
    creator: "@astraque_kenya",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Astraque Softwares - Professional Web & Software Development",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.astraque.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-X2F0X3PXRQ'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-X2F0X3PXRQ');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
