import { Footer, Navbar } from "@/components";
import type { Metadata } from "next";
import Head from "next/head";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Limited Cart",
  description: "",
};
type Props = {
  children: JSX.Element[] | JSX.Element;
  title?: string;
  description?: string;
  ogImage?: string;
};
export default function RootLayout({
  children = <></>,
  title = "Limited Cart",
  description,
  ogImage,
}: Props) {
  return (
    <html>
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
