import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSR Advisors Global | Specialist Advisory Firm.",
  description:
    "CSR Advisors Global connects specialist advisory practices serving social performance, community development, corporate responsibility, accounting, business services and financial advisory needs.",
     icons: {
    icon: "/images/logo.png",
  },
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
