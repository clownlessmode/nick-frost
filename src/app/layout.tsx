import type { Metadata } from "next";
import "./styles/fonts.css";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Axis",
  description: "Scalable systems for info businesses",
  openGraph: {
    title: "Axis",
    description: "Scalable systems for info businesses",
    images: [
      {
        url: "/social.ico",
        width: 32,
        height: 32
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`pt-[100px] pb-[40px] overflow-x-hidden max-w-screen antialiased bg-background px-5 flex w-full noise-bg`}
      >
        {children}
      </body>
    </html>
  );
}
