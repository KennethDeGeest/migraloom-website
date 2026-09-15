import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MigraLoom — Your migraine story, ready for the appointment",
  description: "Capture migraine episodes in seconds and turn them into a calm timeline and visit-ready summary.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
