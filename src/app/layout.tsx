import "./globals.css";
import type { Metadata } from "next";

const publicUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Tim Fischer",
  description: "Portfolio of Tim Fischer",
  metadataBase: publicUrl ? new URL(publicUrl) : undefined,

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
