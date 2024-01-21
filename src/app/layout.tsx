import type { Metadata } from "next";
import { Tienne, Redressed } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from '@/providers';

const tienne = Tienne({
  subsets: ["latin"],
  variable: "--font-tienne",
  weight: ["400", "700", "900"],
});
const redressed = Redressed({
  subsets: ["latin"],
  variable: "--font-redressed",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Jane Doe - Portfolio",
  description:
    "Passionate web developer with a creative edge, dedicated to crafting engaging and user-friendly digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tienne.variable} ${redressed.variable} font-tienne text-dark`}
      >
        <GlobalProvider>
          {children}
        </GlobalProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
