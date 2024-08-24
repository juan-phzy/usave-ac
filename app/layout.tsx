import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leageSN = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "U-Save A/C & Heating",
  description: "Refrigeration, Air Conditioning, and Heating Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leageSN.className}>{children}</body>
    </html>
  );
}
