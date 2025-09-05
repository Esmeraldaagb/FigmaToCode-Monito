import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { APP_NAME,APP_DESCRIPTION,SERVER_URL } from "@/lib/constant";
import '@/assets/styles/globals.css'

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title:{
    template:`%s | Monito`,
    default: APP_NAME, 

  },
  description: APP_DESCRIPTION,
 metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased`}
      > 
        
          {children}
    
      </body>
    </html>
  );
}