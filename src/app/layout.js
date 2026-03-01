import { Inter, Duru_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

const duru = Duru_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-duru",
})

export const metadata = {
  title: "IAAC",
  description: "Institute for Advanced Aerospace Concepts at the University of Washington",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${duru.variable}`}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
