import DarkModeToggle from "@/components/DarkModeToggle";
import ArtICProvider from "@/components/providers/artic-provider";
import QueryProvider from "@/components/providers/query-provider";
import ThemeProvider from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: "%s | Magnum Opus Gallery",
        default: "Magnum Opus Gallery",
    },
    description:
        "Magnum Opus Gallery is a collection of the best art pieces from the best artists in the world.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ArtICProvider>
                        <QueryProvider>{children}</QueryProvider>
                    </ArtICProvider>
                    <DarkModeToggle />
                </ThemeProvider>
            </body>
        </html>
    );
}
