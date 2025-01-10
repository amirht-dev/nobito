import Navbar from "@/components/molcules/Navbar";
import Footer from "@/components/organisms/Footer";
import { type PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
