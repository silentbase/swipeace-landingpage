import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swipeace.app"),
  title: {
    default: "SwipeAce — AI Flashcard & Study App",
    template: "%s | SwipeAce",
  },
  description:
    "Upload PDFs, images, or links and SwipeAce's AI instantly generates flashcards and quizzes. Study smarter with swipe-based spaced repetition.",
  keywords: [
    "AI study app",
    "AI flashcard generator",
    "study smarter",
    "PDF to flashcards",
    "AI quiz generator",
    "Anki alternative",
    "spaced repetition",
    "flashcard maker",
    "exam prep app",
    "AI dating assistant",
    "improve dating profile",
  ],
  openGraph: {
    type: "website",
    url: "https://swipeace.app",
    siteName: "SwipeAce",
    title: "SwipeAce — AI Flashcard & Study App",
    description:
      "Upload any content. AI builds your flashcards. Swipe to study.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SwipeAce — Study Smarter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SwipeAce — AI Flashcard Generator",
    description:
      "Upload PDFs, images, or links. AI builds your flashcards instantly.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://swipeace.app" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SwipeAce",
              applicationCategory: "EducationApplication",
              operatingSystem: "iOS, Android",
              description:
                "AI-powered study app that converts PDFs, images, and links into flashcards and practice questions.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
