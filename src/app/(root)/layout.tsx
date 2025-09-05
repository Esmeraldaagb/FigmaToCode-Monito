
import type { Metadata } from "next";
import HomeHead from "@/components/shared/homeHead";

export const metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
       
  <HomeHead/>
        {children}
   
    </div>
  );
}
