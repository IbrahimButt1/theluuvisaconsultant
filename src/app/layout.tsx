import 'bootstrap/dist/css/bootstrap.min.css';   // ✅ Bootstrap CSS
import "./globals.css";
import type { Metadata } from "next";
import MainNavbar from "./components/Navbar";    // ✅ Import Navbar

export const metadata: Metadata = {
  title: "The LUU Visa Consultant",
  description: "Visa Study, Work Permit & Immigration Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Navbar always on top */}
        <MainNavbar />

        {/* Push content below navbar */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}