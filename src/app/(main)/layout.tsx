import MainLayoutTemplate from "@/components/layouts/MainLayout";
import { type PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return <MainLayoutTemplate>{children}</MainLayoutTemplate>;
};

export default MainLayout;
