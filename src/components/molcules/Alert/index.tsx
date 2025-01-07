import { InfoCircle_Outline } from "@/components/atoms/icons/Essesional/InfoCricle";
import { forwardRef } from "react";
import type { AlertProps } from "./index.types";

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { icon = <InfoCircle_Outline className="size-6" />, description, ...props },
    ref,
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className="flex items-start gap-2 rounded-[10px] border border-[#78BEFF] bg-[#E0EEFB] px-3 py-2 text-body-4 font-normal text-[#136CBF] lg:text-body-2"
      >
        {icon}
        <p className="mt-0.5 flex-1 leading-144 lg:mt-0">{description}</p>
      </div>
    );
  },
);
Alert.displayName = "Alert";

export default Alert;
