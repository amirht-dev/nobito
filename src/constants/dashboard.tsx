import { Note_Outline } from "@/components/atoms/icons/Content-Edit/Note";
import { Frame_Bold } from "@/components/atoms/icons/Users/Frame";

export const dashboardNavItems = {
  account: {
    label: "اطلاعات حساب کاربری",
    icon: <Frame_Bold />,
    href: "/dashboard/account",
    breadcrumbLabel: "اطاعات کاربری",
  },
  "history-of-turns": {
    label: "تاریخچه نوبت ها",
    icon: <Note_Outline />,
    href: "/dashboard/history-of-turns",
    breadcrumbLabel: "تاریخچه نوبت ها",
  },
};
