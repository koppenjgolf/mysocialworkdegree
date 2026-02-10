import "../styles/globals.css";
import type { ReactNode } from "react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
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
