import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Augmentation Consulting Group | Operational Intelligence for the AI Era",
    template: "%s | Augmentation Consulting Group",
  },
  description:
    "Augmentation Consulting Group helps organizations identify inefficiencies, implement AI systems, and unlock predictive decision-making through operational intelligence.",
  keywords: [
    "AI consulting",
    "process optimization consulting",
    "predictive analytics consulting",
    "AI implementation consulting",
    "process mining consulting",
    "operational intelligence",
    "workflow automation",
    "AI transformation",
    "Lean Six Sigma",
  ],
  authors: [{ name: "Augmentation Consulting Group" }],
  creator: "Augmentation Consulting Group",
  publisher: "Augmentation Consulting Group",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://augmentationcg.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Augmentation Consulting Group",
    title: "Augmentation Consulting Group | Operational Intelligence for the AI Era",
    description:
      "We help organizations identify inefficiencies, implement AI systems, and unlock predictive decision-making.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Augmentation Consulting Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Augmentation Consulting Group",
    description: "Operational Intelligence for the AI Era",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
