import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/src/components/ui/sonner";
import { Fira_Code } from "next/font/google";

export const metadata: Metadata = {
  title: "Mauricio Florez | Portfolio",
};

export const code = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={code.variable}>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
