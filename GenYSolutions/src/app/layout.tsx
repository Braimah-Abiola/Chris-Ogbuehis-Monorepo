import "./globals.css";

import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gen Y Solutions",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-screen antialiased overflow-x-hidden",
          dmSans.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
