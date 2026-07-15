import type { Metadata } from "next";
import "./globals.css";
import "./features.css";
export const metadata: Metadata = { title: "Robotaxi Discourse Atlas", description: "An interactive companion to the BlueSky robotaxi discourse paper." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
