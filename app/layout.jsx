import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "700"]
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "700"]
});

export const metadata = {
  title: "Tooka",
  description: "Take a break"
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
