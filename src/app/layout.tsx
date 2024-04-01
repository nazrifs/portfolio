import type { Metadata } from "next";
import "./globals.css";
import "./main.css";
import "./normalize.css";

import Header from "./components/header/page";

export const metadata: Metadata = {
  title: "Nazri Fuad | Frontend Developer and Web Designer",
  description: "A creative frontend developer and freelance web designer based in Johor Bahru. Crafted by Nazri Fuad.",
  icons: {
    icon: "img/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
