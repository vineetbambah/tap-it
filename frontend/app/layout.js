import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TapIT",
  description: "Student Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="text-2xl flex flex-row py-2 px-4"><Image src="/logo.png" width={42} height={42} alt="logo" /><h1 className="self-center ml-4 font-medium">TapIT</h1></nav>
        {children}
      </body>
    </html>
  );
}
