import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "ERPForge AI", description: "Describe your business. Get your ERP." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
