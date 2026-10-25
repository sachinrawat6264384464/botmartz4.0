import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Botmartz — Intelligence, Engineered.",
  description: "Botmartz engineers enterprise RAG systems and production AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('hero-intro-ready')}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

