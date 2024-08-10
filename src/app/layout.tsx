import "./globals.css";
import { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Wikipedia Semantic Search by Upstash Vector",
  description:
    "An experimental project to demonstrate the scalability of Upstash Vector with large datasets. We vectorized 23 million Wikipedia articles in 11 languages and stored 144 millin vectors in a single Upstash Vector index.",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

const serif = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  style: ["normal"],
  weight: ["400", "600"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  style: ["normal"],
  weight: ["400", "600"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${serif.variable} ${sans.variable} font-sans`}
    >
      <body className="antialiased text-yellow-950 min-h-screen from-yellow-50/50 bg-gradient-to-b">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
