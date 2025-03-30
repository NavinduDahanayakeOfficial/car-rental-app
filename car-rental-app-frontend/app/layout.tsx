import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Geist, Geist_Mono, Inter } from "next/font/google";

export const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Home",
   description: "Home page of the Car Rental App",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Navbar />
            <main className="mt-24">{children}</main>
         </body>
      </html>
   );
}
