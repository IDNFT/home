'use client';

import Link from "next/link";

import "./globals.css";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* VIDEO BACKGROUND */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
      >
        <Image
          src="/images/thumb8-coinfolks.webp"
          alt="IDNFT"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* 🔔 MAIN CONTENT */}
      <div className="grid place-items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded border transition border-white border-opacity-30 max-w-md w-full shadow-md z-10">
        
        <h1 className="text-4xl font-bold text-red-700 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-zinc-700 text-lg mb-6">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-red-700 font-semibold text-white px-6 py-2 rounded-lg shadow-md hover:bg-zinc-300 hover:text-zinc-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
