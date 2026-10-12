import "./globals.css";
import type { Metadata } from "next";
import ArcCursor from "@/components/erp/ArcCursor";

export const metadata: Metadata = {
  title: "ERPForge AI",
  description: "AI-powered ERP builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ArcCursor />
        {children}
      </body>
    </html>
  );
}
