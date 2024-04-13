import "./globals.css";
import "swiper/css";
import React from "react";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Food Shop",
  description: "Food Shop",
};

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  userScalable: false,
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
