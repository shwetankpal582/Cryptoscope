import type { Metadata } from "next";
import { Pixelify_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import localFont from 'next/font/local'
const pixelify_Sans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: '--font-pixel',
});




const montserrat = Montserrat({

  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: '--font-montserrat',
});

const gadems = localFont({
  src: [
    {
      path: '../../public/assets/gadems-font/GademsPersonalUseOnly-Yz43o.otf',
      weight: '400'
    },
  ],
  variable: '--font-gadems'
})
const ardestine = localFont({
  src: [
    {
      path: '../../public/assets/AR-Destine/ar-destine.otf',
      weight: '400'
    },
  ],
  variable: '--font-ardestine'
})


export const metadata: Metadata = {
  title: "Cryptoscope",
  description: "Your go-to platform for real-time cryptocurrency data. Stay informed about the latest prices, market trends, and portfolio performance. Whether you’re a seasoned trader or a curious investor, CryptoScope provides a comprehensive view of the crypto landscape. Explore, analyze, and track your favorite coins effortlessly. ",
};

const GA_TRACKING_ID = 'G-9D9YJ84V9E';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        ></script>
      </head>
      <body
        className={`${pixelify_Sans.variable} ${gadems.variable} ${ardestine.variable} ${montserrat.variable} `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


