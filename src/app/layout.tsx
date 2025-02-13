import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "./Components/Topbar";
import Middlebar from "./Components/Middlebar";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chairy - Furniture Store",
  description: "Best Furniture Collection for your interior",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Topbar />
          <Middlebar />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
