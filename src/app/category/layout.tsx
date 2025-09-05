
import type { Metadata } from "next";
import Header from "@/components/shared/header/header";

export const metadata = {
  title: "Category",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
       
  <Header/>
        {children}
   
    </div>
  );
}
