import type { Metadata } from "next";
import "./styles/fonts.css";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Nick Frost",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`py-[100px] overflow-x-hidden max-w-screen antialiased bg-background px-5 flex w-full noise-bg`}
      >
        {children}
      </body>
    </html>
  );
}
