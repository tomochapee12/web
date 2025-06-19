import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomochapee's Website",
  description: "I love programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}