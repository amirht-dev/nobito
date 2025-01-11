import {
  NoteText_Bold,
  NoteText_Outline,
} from "@/components/atoms/icons/Content-Edit/NoteText";
import {
  SMS_Bold,
  SMS_Outline,
} from "@/components/atoms/icons/Emails-Messages/SMS";
import {
  Folder2_Bold,
  Folder2_Outline,
} from "@/components/atoms/icons/Files/Folder2";
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
  messages: {
    label: "پیغام ها",
    icons: {
      disactive: <SMS_Outline />,
      active: <SMS_Bold />,
    },
    href: "/dashboard/messages",
    breadcrumbLabel: "پیغام ها",
  },
  "medical-record": {
    label: "پرونده پزشکی",
    icons: {
      disactive: <Folder2_Outline />,
      active: <Folder2_Bold />,
    },
    href: "/dashboard/medical-record",
    breadcrumbLabel: "پرونده پزشکی",
  },
};
