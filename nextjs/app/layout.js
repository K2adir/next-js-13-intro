import CurrencyFetch from "@/components/fetch/CurrencyFetch";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Layout Js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <div>{children}</div>
        <CurrencyFetch />
      </body>
    </html>
  );
}
