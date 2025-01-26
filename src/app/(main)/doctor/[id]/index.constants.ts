import {
  CallCalling_Bold,
  CallCalling_Outline,
} from "@/components/atoms/icons/Call/CallCalling";
import {
  MonitorMobile_Bold,
  MonitorMobile_Outline,
} from "@/components/atoms/icons/Camputer-Devices-Electronic/MonitorMobile";
import {
  Messages_Bold,
  Messages_Outline,
} from "@/components/atoms/icons/Emails-Messages/Messages";
import {
  Frame_Bold,
  Frame_Outline,
} from "@/components/atoms/icons/Users/Frame";

export const visitTypes = [
  {
    label: "تلفنی",
    type: "by-phone",
    icon: {
      active: CallCalling_Bold,
      inactive: CallCalling_Outline,
    },
  },
  {
    label: "حضوری",
    type: "in-person",
    icon: {
      active: Frame_Bold,
      inactive: Frame_Outline,
    },
  },
  {
    label: "آنلاین",
    type: "online",
    icon: {
      active: MonitorMobile_Bold,
      inactive: MonitorMobile_Outline,
    },
  },
  {
    label: "متنی",
    type: "textual",
    icon: {
      active: Messages_Bold,
      inactive: Messages_Outline,
    },
  },
] as const;

export type VisitType = (typeof visitTypes)[number]["type"];
