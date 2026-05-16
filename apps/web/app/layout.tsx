import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Web App",
  description: "Test task"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
