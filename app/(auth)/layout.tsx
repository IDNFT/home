import type { Metadata } from "next";
import localFont from "next/font/local";
import { FC, ReactNode } from 'react';
import "@/app/globals.css";
import { Toaster } from "react-hot-toast";

const plusJakartaSans = localFont({
  src: "./fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf",
  variable: "--font-sans",
  weight: "100 900",
});

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
        className={`${plusJakartaSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <Toaster />
        <main className="relative z-10">
          {children}
        </main>
    </div>
  );
}

export default RootLayout;
