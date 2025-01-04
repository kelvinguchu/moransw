import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Head from "next/head";

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
    "web development",
    "software development",
    "web design",
    "graphic design",
    "Astraque Softwares",
    "digital solutions",
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
    title: "Astraque Softwares | Web & Software Development Solutions",
    description:
      "Professional web design, web development, software development, and graphic design services. Transform your digital presence with Astraque Softwares.",
    url: "https://www.astraque.com",
    siteName: "Astraque Softwares",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Astraque Softwares",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astraque Softwares | Web & Software Development Solutions",
    description:
      "Professional web design, web development, software development, and graphic design services.",
    images: ["/twitter-image.jpg"],
    creator: "@astraque",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <Head>
        <link rel='icon' href='/favicon.png' type='image/png' />
        <meta
          name='description'
          content='Web Design, Web Development, Software Development, and Graphic Design'
        />
        <meta
          name='keywords'
          content='Astraque Softwares, Web Design, Web Development, Software Development, Graphic Design'
        />
        <meta name='author' content='Astraque Softwares' />
        {/* Open Graph Metadata */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Astraque Softwares' />
        <meta
          property='og:description'
          content='Web Design, Web Development, Software Development, and Graphic Design'
        />
        <meta property='og:image' content='/astraque_favi.svg' />{" "}
        {/* Replace with actual image URL */}
        <meta property='og:url' content='https://www.astraque.com' />
        {/* Twitter Card Metadata */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Astraque Softwares' />
        <meta
          name='twitter:description'
          content='Web Design, Web Development, Software Development, and Graphic Design'
        />
        <meta name='twitter:image' content='/astraque_favi.svg' />{" "}
        {/* Replace with actual image URL */}
        <meta name='twitter:site' content='@astraque_kenya' />
        {/* Structured Data for Google Rich Results, including Menu Items */}
        <script type='application/ld+json'>
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Astraque Softwares",
            "url": "https://www.astraque.com",
            "logo": "https://www.astraque.com/astraque_favi.svg",
            "sameAs": [
              "https://www.instagram.com/astraque_softwares/",
              "https://web.facebook.com/profile.php?id=61565098643904",
              "https://www.tiktok.com/@astraque_softwares?lang=en",
              "https://x.com/astraque_kenya"
            ],
            "description": "Astraque Softwares offers Web Design, Web Development, Software Development, and Graphic Design services.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.astraque.com"
            },
            "hasPart": {
              "@type": "SiteNavigationElement",
              "name": "Main Navigation",
              "url": "https://www.astraque.com",
              "itemListElement": [
                {
                  "@type": "SiteNavigationElement",
                  "name": "Services",
                  "url": "https://www.astraque.com/#services"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Recent Projects",
                  "url": "https://www.astraque.com/projects"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Pricing",
                  "url": "https://www.astraque.com/#pricing"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "0792 554525",
                  "url": "tel:+254792554525"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "0792 194217",
                  "url": "tel:+254792194217"
                }
              ]
            }
          }
          `}
        </script>
      </Head>
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
