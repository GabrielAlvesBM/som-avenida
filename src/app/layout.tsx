import { Roboto } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/Header';

export const metadata: Metadata = {
  title: "Som Avenida",
  description: "Web Rádio da Som Avenida Itaperuna.",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300' ,'400'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} cursor-default selection:bg-selectedColor`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
