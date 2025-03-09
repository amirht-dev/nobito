import Button from "@/components/atoms/buttons/Button";
import LogoutButton from "@/components/atoms/buttons/LogoutButton";
import {
  Logout_Bold,
  Logout_Outline,
} from "@/components/atoms/icons/Arrow/Logout";
import { Edit2_Outline } from "@/components/atoms/icons/Content-Edit/Edit2";
import { ProfileAdd_Outline } from "@/components/atoms/icons/Users/ProfileAdd";
import NavLink from "@/components/atoms/NavLink";
import { dashboardNavItems } from "@/constants/dashboard";
import { cn } from "@/utils/helpers";
import { Slot } from "@radix-ui/react-slot";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../Dialog";

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
          <SidebarItem
            label={item.label}
            disactiveIcon={item.icons.disactive}
            activeIcon={item.icons.active}
            key={idx}
            href={item.href}
          />
          // <li key={idx} className="py-6">
          //   <NavLink
          //     href={item.href}
          //     className="group flex items-center gap-2 text-body-1 font-medium leading-none"
          //     activeClassNames={{
          //       default: "text-black-400",
          //       active:
          //         "text-primary-500 before:absolute before:h-12 before:w-2 before:-translate-x-6 before:rounded-e-full before:bg-primary-500 rtl:before:translate-x-6",
          //     }}
          //   >
          //     <Slot className="size-6 group-data-[state=active]:hidden group-data-[state=open]:hidden">
          //       {item.icons.disactive}
          //     </Slot>
          //     <Slot className="size-6 group-data-[state=closed]:hidden group-data-[state=disactive]:hidden">
          //       {item.icons.active}
          //     </Slot>
          //     <span className="-mb-1">{item.label}</span>
          //   </NavLink>
          // </li>
        ))}
        <Dialog>
          <SidebarItem
            label="خروج"
            type="trigger"
            activeIcon={<Logout_Bold />}
            disactiveIcon={<Logout_Outline />}
          />

          <DialogContent>
            <DialogHeader>
              <DialogTitle>خروج از حساب کاربری</DialogTitle>
              <DialogClose className="max-lg:hidden" />
            </DialogHeader>

            <DialogDescription>
              با خروج از حساب کاربریتان به اطلاعاتی که وارد کردید دسترسی نخواهید
              داشت و باید مجددا وارد شوید
            </DialogDescription>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" color="black" size="md">
                  انصراف
                </Button>
              </DialogClose>

              <LogoutButton size="md" pendingMessage="در حال خروج">
                خروج از حساب
              </LogoutButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ul>
    </aside>
  );
});
DashboardSidebar.displayName = "DashboardSidebar";

export default DashboardSidebar;

type SidebarItemProps = {
  label: string;
  disactiveIcon: ReactNode;
  activeIcon: ReactNode;
} & (
  | {
      type?: "link";
      href: string;
    }
  | { type: "trigger" }
);

function SidebarItem({
  label,
  disactiveIcon,
  activeIcon,
  ...props
}: SidebarItemProps) {
  const rootClass =
    "group flex items-center gap-2 text-body-1 font-medium leading-none before:invisible before:absolute before:h-12 before:w-2 before:-translate-x-6 before:rounded-e-full before:bg-primary-500 rtl:before:translate-x-6";

  return (
    <li className="py-6">
      {props.type === "trigger" ? (
        <DialogTrigger
          className={`${rootClass} data-[state=open]:text-primary-500 data-[state=open]:before:visible`}
        >
          <Slot className="size-6 group-data-[state=open]:hidden">
            {disactiveIcon}
          </Slot>
          <Slot className="size-6 group-data-[state=closed]:hidden">
            {activeIcon}
          </Slot>
          <span className="-mb-1">{label}</span>
        </DialogTrigger>
      ) : (
        <NavLink
          href={props.href}
          className={`${rootClass} data-[state=active]:text-primary-500 data-[state=active]:before:visible`}
        >
          <Slot className="size-6 group-data-[state=active]:hidden">
            {disactiveIcon}
          </Slot>
          <Slot className="size-6 group-data-[state=disactive]:hidden">
            {activeIcon}
          </Slot>
          <span className="-mb-1">{label}</span>
        </NavLink>
      )}
    </li>
  );
}
