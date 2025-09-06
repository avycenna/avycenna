import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { GA4Provider } from "./providers/ga4";
// import Navbar from "@/components/navbar";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Avycenna | Coming Soon",
  description: "Digital transformation, transformed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lora.className} antialiased`}
      >
        <GA4Provider />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
