import TopHeader from "@/Components/TopHeader/TopHeader";
import 'remixicon/fonts/remixicon.css'
import "./globals.css";

export const metadata = {
  title: "Movies App",
  description: "Next js Movie App ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <TopHeader/>
        {children}
      </body>
    </html>
  );
}
