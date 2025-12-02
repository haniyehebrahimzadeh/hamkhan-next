
import "./globals.css";
import Header from "@/components/layout/header/header";
import "./globals.css";


import type { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa" dir="rtl">
      
      <body>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
         <main className="pt-20">{children}</main>
        </div>
         
         </body>
    </html>
  );
}
