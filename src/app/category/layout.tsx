
import Header from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";
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
    <Footer/>
   
    </div>
  );
}
