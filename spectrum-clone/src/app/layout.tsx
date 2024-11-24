"use client";

import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Proveri prethodni korisnički izbor iz localStorage-a
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-700 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4 dark:bg-gray-700">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
              <span className="ml-2 text-xl font-bold">Spektrum</span>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="space-x-6">
                <Link href="/" className="hover:text-blue-400">
                  Početna
                </Link>
                <Link href="/about" className="hover:text-blue-400">
                  O nama
                </Link>
                <Link href="/services" className="hover:text-blue-400">
                  Usluge
                </Link>
                <Link href="/contact" className="hover:text-blue-400">
                  Kontakt
                </Link>
                <Link href="/courses" className="hover:text-blue-400">
                  Kursevi
                </Link>
              </nav>
              {/* Dugme za prebacivanje teme */}
              <button
                onClick={toggleDarkMode}
                className="p-2 bg-gray-800 rounded-full dark:bg-gray-300"
              >
                {darkMode ? (
                  <span className="text-black">🌞</span>
                ) : (
                  <span className="text-white">🌙</span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Sadržaj stranice */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center dark:bg-gray-700">
          <p>Pavle Matijašević - software developer</p>
          <p>Email: matijasevic.pavle99@gmail.com</p>
        </footer>
      </body>
    </html>
  );
}
