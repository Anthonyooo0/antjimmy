import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthony Jimenez | Machine Learning Engineer",
  description:
    "Building intelligent systems that learn, predict, and automate. Specializing in production ML, LLMs, and end-to-end AI pipelines.",
  keywords: [
    "Machine Learning Engineer",
    "ML Engineer",
    "AI Developer",
    "PyTorch",
    "LangChain",
    "Production ML",
    "New Jersey",
  ],
  authors: [{ name: "Anthony Jimenez" }],
  openGraph: {
    title: "Anthony Jimenez | Machine Learning Engineer",
    description:
      "Building intelligent systems that learn, predict, and automate.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Jimenez | Machine Learning Engineer",
    description:
      "Building intelligent systems that learn, predict, and automate.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
