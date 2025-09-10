import type { Metadata } from "next";
import Header from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";

export const metadata: Metadata = {
  title: "Category",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
     
      <div className="hidden md:block">
        <Header />
      </div>

      {children}

      <Footer />
    </div>
  );
}
