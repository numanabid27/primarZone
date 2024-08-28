import { Urbanist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/common/components/sidebar/sidebar.component";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Primal zone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        {children}
      </body>
    </html>
  );
}
