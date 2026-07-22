import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abhinay Meshram | Machine Learning Engineer",
    template: "%s | Abhinay Meshram",
  },

  description:
    "Machine Learning Engineer specializing in Python, Machine Learning, FastAPI, Docker, Data Analytics, NLP and AI applications.",

  keywords: [
    "Machine Learning",
    "Machine Learning Engineer",
    "Python",
    "FastAPI",
    "Docker",
    "Data Science",
    "Artificial Intelligence",
    "NLP",
    "Portfolio",
    "Scikit-learn",
    "Abhinay Meshram",
  ],

  authors: [
    {
      name: "Abhinay Meshram",
    },
  ],

  creator: "Abhinay Meshram",

  metadataBase: new URL("https://YOUR-DOMAIN.vercel.app"),

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Abhinay Meshram | Machine Learning Engineer",

    description:
      "Portfolio showcasing Machine Learning, AI, NLP, Data Analytics and Full Stack ML Projects.",

    url: "https://YOUR-DOMAIN.vercel.app",

    siteName: "Abhinay Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhinay Meshram Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Abhinay Meshram | Machine Learning Engineer",

    description:
      "Portfolio showcasing Machine Learning, AI, NLP, Data Analytics and Full Stack ML Projects.",

    images: ["/og-image.png"],

    creator: "@YOUR_TWITTER_USERNAME",
  },

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#020817",

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={3000}
          theme="dark"
        />
      </body>
    </html>
  );
}