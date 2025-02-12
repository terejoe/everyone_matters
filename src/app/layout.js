import { Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from './component/Navabar';
import { Toaster } from "@/components/ui/sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const libreBaskerville = Libre_Baskerville({  
  variable: '--font-libre-baskerville', // This is the CSS variable name  
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700']
}); 

export const metadata = {
  title: "Everyone Matters",
  description: "Everyone Matters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} antialiased`}
      >
        <header>
          <Navbar/>
        </header>
        {children}
        <Toaster richColors/>
      </body>
    </html>
  );
}
