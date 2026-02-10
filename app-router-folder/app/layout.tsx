import "../styles/globals.css";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";

export default function RootLayout({ children }) {
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
