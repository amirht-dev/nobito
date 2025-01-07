import DashboardSidebar from "@/components/molcules/DashboardSidebar";
import type { PropsWithChildren } from "react";
import DashboardBreadcrumb from "./DashboardBreadcrumb";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <DashboardBreadcrumb />
      <div className="container mb-10 mt-6 flex gap-6 lg:mt-10">
        <DashboardSidebar className="max-lg:hidden" />
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
