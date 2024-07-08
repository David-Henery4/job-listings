import type { Metadata } from "next";
import "./globals.css";
import { leagueSpartan } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Job listings",
  description: "Job listings web app with filters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable}`}>
      <body className="font-leagueSpartan bg-lightGrayishCyanBackground">{children}</body>
    </html>
  );
}
