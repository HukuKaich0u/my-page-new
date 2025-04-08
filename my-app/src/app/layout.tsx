import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import React from "react";

export const metadata: Metadata = {
  title: "Koki Aoyagi",
  description: "Koki Aoyagi - my page -",
  icons: "/favicon.ico",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-blue-950 text-gray-300 sm:font-[8px] sm:w-[580px] mt-[20px] mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
