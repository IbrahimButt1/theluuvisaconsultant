import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "../components/Navbar";

export const metadata = {
  title: "LUU Visa Consultant",
  description: "Navigate your future with visa, immigration, and study consultancy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}