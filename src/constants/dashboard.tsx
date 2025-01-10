import {
  NoteText_Bold,
  NoteText_Outline,
} from "@/components/atoms/icons/Content-Edit/NoteText";
import {
  Frame_Bold,
  Frame_Outline,
} from "@/components/atoms/icons/Users/Frame";

export const dashboardNavItems = {
  account: {
    label: "اطلاعات حساب کاربری",
    icons: {
      disactive: <Frame_Outline />,
      active: <Frame_Bold />,
    },
    href: "/dashboard/account",
    breadcrumbLabel: "اطاعات کاربری",
  },
  "history-of-turns": {
    label: "تاریخچه نوبت ها",
    icons: {
      disactive: <NoteText_Outline />,
      active: <NoteText_Bold />,
    },
    href: "/dashboard/history-of-turns",
    breadcrumbLabel: "تاریخچه نوبت ها",
  },
};
