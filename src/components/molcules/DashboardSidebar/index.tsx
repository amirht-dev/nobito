import { Edit2_Outline } from "@/components/atoms/icons/Content-Edit/Edit2";
import { ProfileAdd_Outline } from "@/components/atoms/icons/Users/ProfileAdd";
import NavLink from "@/components/atoms/NavLink";
import { dashboardNavItems } from "@/constants/dashboard";
import { cn } from "@/utils/helpers";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

const DashboardSidebar = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<"aside">
>((props, ref) => {
  return (
    <aside
      {...props}
      ref={ref}
      className={cn(
        "w-[384px] rounded-2xl border border-grey-100 p-6",
        props.className,
      )}
    >
      <div className="flex h-[120px] items-end justify-center rounded-2xl bg-pattern-mobile">
        <div className="w-fit translate-y-1/2 rounded-full bg-[#f5f5f5] p-6 text-primary-500">
          <ProfileAdd_Outline className="size-24" />
        </div>
      </div>

      <ul className="mt-20 divide-y divide-grey-100">
        <li className="flex items-center justify-between pb-6">
          <div className="space-y-3">
            <h3 className="text-headline-3 font-medium text-black-400">
              نام کاربر
            </h3>
            <span className="text-tittle-2 font-normal text-grey-500">
              09365533065
            </span>
          </div>

          <Edit2_Outline className="size-8" />
        </li>

        {Object.values(dashboardNavItems).map((item, idx) => (
          <li key={idx} className="py-6">
            <NavLink
              href={item.href}
              className="flex items-center gap-2 text-body-1 font-medium leading-none"
              activeClassNames={{
                default: "text-black-400",
                active:
                  "text-primary-500 before:absolute before:h-12 before:w-2 before:-translate-x-6 before:rounded-e-full before:bg-primary-500 rtl:before:translate-x-6",
              }}
            >
              <Slot className="size-6">{item.icon}</Slot>
              <span className="-mb-1">{item.label}</span>
            </NavLink>
          </li>
        ))}
        <li className="pt-6"></li>
      </ul>
    </aside>
  );
});
DashboardSidebar.displayName = "DashboardSidebar";

export default DashboardSidebar;
