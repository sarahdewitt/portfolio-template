import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/atoms/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

// Replace the title and description here.
// This will be the title and description of the website.
export const metadata: Metadata = {
  title: "Emily Harper",
  description: "Frontend Developer and Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SmoothScroll>{children}</SmoothScroll> */}
        {children}
      </body>
    </html>
  );
}
