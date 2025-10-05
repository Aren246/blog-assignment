import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Boxers Blog",
  description: "A blog about my favourite boxers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}