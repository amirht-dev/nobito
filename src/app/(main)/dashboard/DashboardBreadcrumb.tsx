"use client";

import { Breadcrumb, BreadcrumbItem } from "@/components/atoms/Breadcrumb";
import { dashboardNavItems } from "@/constants/dashboard";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const DashboardBreadcrumb = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="bg-primary-500 py-2 lg:py-3">
      <Breadcrumb className="container text-white-500">
        <BreadcrumbItem asChild>
          <Link href="/">نوبیتو</Link>
        </BreadcrumbItem>
        <BreadcrumbItem asChild>
          <Link href="/dashboard">حساب شخصی</Link>
        </BreadcrumbItem>
        {!!segment && segment in dashboardNavItems && (
          <BreadcrumbItem>
            {
              dashboardNavItems[segment as keyof typeof dashboardNavItems]
                .breadcrumbLabel
            }
          </BreadcrumbItem>
        )}
      </Breadcrumb>
    </div>
  );
};

export default DashboardBreadcrumb;
