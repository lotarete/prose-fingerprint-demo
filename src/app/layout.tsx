import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Style Match: Find Books by How They're Written",
  description: "Discover your next read based on writing style, not just genre. A demo of prose-aware book recommendations.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
