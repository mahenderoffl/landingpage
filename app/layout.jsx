import { DM_Sans } from "next/font/google";
import "./globals.css";
import CursorTrail from "./CursorTrail";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Waveseed — AI SaaS, digital products & custom software",
  description:
    "Waveseed builds AI-powered SaaS, digital products, and custom software — the parent brand behind a growing family of products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
