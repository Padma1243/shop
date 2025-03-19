"use client";
import Header from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100 container mx-auto z-20 pt-[80px] ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
