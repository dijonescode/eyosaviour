import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import MobileMenu from "@/components/mobile.menu/MobileMenu";
import Footer from "@/components/footer/Footer";
import { links } from "@/utils/links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eyo Saviour Enterprise",
  description: "Trading and Distribution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer links={links} />
      </body>
    </html>
  );
}
