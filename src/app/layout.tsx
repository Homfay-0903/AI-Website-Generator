import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montSerrat = Montserrat({
  weight: "500",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "AI-Website-Generator",
  description: "Generated Website by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montSerrat.className}
      >
        {children}
      </body>
    </html>
  );
}
