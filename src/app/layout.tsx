import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Oxanium } from "next/font/google";
import Header from "@/components/Header/Header";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.scss";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "My Shop",
  description: "Welcome to my shop!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${oxanium.variable}`}
      >
        <Theme
          radius="full"
          accentColor="tomato"
          style={{
            transition: "background-color 0.4s",
          }}
        >
          <Header />
          {children}
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
