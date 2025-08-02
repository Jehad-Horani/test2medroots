import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navpar";
import AOSInitializer from './AOSInitializer'; // سننشئ هذا الملف الآن
import 'aos/dist/aos.css';
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MedRoots25",
  description:
    "The official website of MedRoots 25 – a leading medical technology conference in Jordan that brings together companies, experts, and students to exchange knowledge and explore the latest medical innovations.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Navbar />
        <AOSInitializer />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
