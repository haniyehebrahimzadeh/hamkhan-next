
import "./globals.css";
import Header from "@/app/components/layout/header/header";
import "./globals.css";
import "../public/styles/fonts.scss"

import Users from "./users/page";
import type { ReactNode } from "react";


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa" dir="rtl">
      
      <body>
        <div className="flex flex-col min-h-screen bg-gray-50">   {children} </div>
         
         {/* <Users />  */}
      
       
         </body>
    </html>
  );
}
