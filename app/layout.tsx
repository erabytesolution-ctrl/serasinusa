import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serasinusa",
  description: "Aplikasi Next.js siap deploy ke Vercel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
