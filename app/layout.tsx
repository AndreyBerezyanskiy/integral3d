import { Inter } from "next/font/google";
import AuthProvider from "./context/AuthProvider";

import "./globals.css";

import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`hide-scrollbar ${inter.className} text-white `}>
        {/* <AuthProvider> */}
        <Header />
        <main>{children}</main>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
