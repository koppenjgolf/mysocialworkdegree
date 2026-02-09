import "../styles/globals.css";
import type { Metadata } from "next";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";

export const metadata: Metadata = {
  title: "My Social Work Degree",
  description: "Student-focused guides to social work degree pathways and program formats.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
