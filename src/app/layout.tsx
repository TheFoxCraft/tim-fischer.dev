import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tim Fischer",
  description: "Portfolio of Tim Fischer",

  openGraph: {
    title: "Tim Fischer",
    description:
      "Full-Stack Developer building websites with React and TypeScript, and Minecraft plugins with Kotlin",
    url: "https://tim-fischer.dev",
    siteName: "tim-fischer.dev",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tim Fischer",
    description:
      "Full-Stack Developer building websites with React and TypeScript, and Minecraft plugins with Kotlin",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
