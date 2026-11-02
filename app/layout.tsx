import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduPlay Studio | Eksponen SMP/MTs",
  description: "Media pembelajaran interaktif matematika SMP/MTs dengan permainan Wordwall dan latihan pemahaman konsep eksponen.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
