import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar"

const pixelify_Sans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-pixel',
});

export const metadata: Metadata = {
  title: "Cryptoscope",
  description: "Your go-to platform for real-time cryptocurrency data. Stay informed about the latest prices, market trends, and portfolio performance. Whether you’re a seasoned trader or a curious investor, CryptoScope provides a comprehensive view of the crypto landscape. Explore, analyze, and track your favorite coins effortlessly. ",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={pixelify_Sans.variable}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
