import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daarick extensible",
  description: "Ruleta para el directo de daarick",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
