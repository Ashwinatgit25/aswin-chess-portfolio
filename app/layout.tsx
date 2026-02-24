import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aswin Kumar – Chess Strategist Developer",
  description: "Royal chess themed developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-royal-black text-white">{children}</body>
    </html>
  );
}