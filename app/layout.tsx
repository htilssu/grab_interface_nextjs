import "./globals.css"
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Food Shop",
    description: "Food Shop",
};


export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en">
        <body>
        <div>
            {children}
        </div>
        </body>
        </html>
    )
}