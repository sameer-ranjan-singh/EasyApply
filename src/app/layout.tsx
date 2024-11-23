import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import { StoreProvider } from "../store/redux/StoreProvider";
import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Easy Apply",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <SessionProvider>
          <StoreProvider>
        {/* <div className={`w-full ${theme ==="light" || "dark" ? `bg-${theme}-secondary text-${theme}-primary` :`bg-dark-bg text-dark-primary`} flex justify-between items-center text-md md:text-lg px-4 py-1 border my-4 rounded-full shadow-md`}> */}
            <div className="flex flex-col w-10/12 mx-auto">
              <Navbar />
            </div>
              {children}
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
