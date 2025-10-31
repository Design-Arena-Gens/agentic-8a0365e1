import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkedIn-style Profile | Agentic",
  description: "A clean, modern LinkedIn-style personal profile page.",
  metadataBase: new URL("https://agentic-8a0365e1.vercel.app"),
  openGraph: {
    title: "LinkedIn-style Profile | Agentic",
    description: "A clean, modern LinkedIn-style personal profile page.",
    url: "/",
    siteName: "Agentic Profile",
    images: [
      { url: "/og-cover.png", width: 1200, height: 630, alt: "Profile" }
    ],
    type: "website"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
