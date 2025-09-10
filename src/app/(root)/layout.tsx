
import type { Metadata } from "next";
import HomeHead from "@/components/shared/homeHead";
import Footer from "@/components/shared/footer/footer";

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
   <Footer/>
    </div>
  );
}
