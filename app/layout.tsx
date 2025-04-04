import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SnapSummary- PDF Summarization with AI",
  description:
    "SnapSummary is the ultimate solution for transforming your lengthy PDF documents into clear, concise, and insightful summaries. Powered by AI, this app simplifies the process of extracting key information from complex documents, allowing you to quickly grasp essential points without reading through the entire text.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans  antialiased`}>
        {children}
      </body>
    </html>
  );
}
