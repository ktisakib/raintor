import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@workspace/ui/globals.css";
import { TaskSwitcher } from "@workspace/ui/components/task-switcher";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Infinite Scroll User Feed - Task 3",
    description: "Zustand-powered infinite scrolling user directory",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NuqsAdapter>
                    {children}
                    <TaskSwitcher />
                </NuqsAdapter>
            </body>
        </html>
    );
}
