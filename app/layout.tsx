import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Header from "@/components/header/header";
import classNames from "classnames";
import "./global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Footer = dynamic(() => import("@/components/footer/footer"), {
  loading: () => <p>Loading...</p>,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"main_wrapper"} suppressHydrationWarning={true}>
        <Header />
        <main className={classNames("main_inner", inter.className)}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
