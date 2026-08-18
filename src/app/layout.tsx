import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSR Global | Two Specialist Practices. One Trusted Group.",
  description:
    "CSR Global connects specialist advisory practices serving social performance, community development, corporate responsibility, accounting, business services and financial advisory needs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
