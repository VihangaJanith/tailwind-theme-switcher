import React from "react";

import type { Metadata } from "next";
import Navbar from "@/UI/Navbar";

export const metadata: Metadata = {
  title: "Custom Tailwind Theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="p-4">{children}</div>
    </>
  );
}
