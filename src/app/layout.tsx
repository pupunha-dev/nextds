import type { Metadata } from "next";
import { Ubuntu } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: "300"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
