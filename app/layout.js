import { Inter, Prompt } from "next/font/google";
import "./globals.css";
import React from 'react';
import Head from "next/head";

const prompt = Prompt({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"]
});

export const metadata = {
  title: "Magic World",
  description: "Disney Clone",
};

export default function RootLayout({ children }) {
  return (
    <>
    
      <html lang="en">
        <Head><link rel="icon" href="/favicon.ico" /></Head>
        <body className={prompt.className}>{children}</body>
      </html>
    </>
    
  );
}
