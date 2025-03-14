import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const Youtube_Outline = forwardRef<SVGSVGElement, SVGIconProps<"black">>(
  ({ fillPath = "currentColor", ...props }, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M17 20.75H7C3.56 20.75 1.25 18.44 1.25 15V9C1.25 5.56 3.56 3.25 7 3.25H17C20.44 3.25 22.75 5.56 22.75 9V15C22.75 18.44 20.44 20.75 17 20.75ZM7 4.75C4.42 4.75 2.75 6.42 2.75 9V15C2.75 17.58 4.42 19.25 7 19.25H17C19.58 19.25 21.25 17.58 21.25 15V9C21.25 6.42 19.58 4.75 17 4.75H7Z"
          fill={fillPath}
        />
        <path
          d="M10.5897 15.5292C10.2997 15.5292 10.0197 15.4592 9.76965 15.3192C9.18965 14.9892 8.84961 14.3192 8.84961 13.4892V10.5292C8.84961 9.69924 9.17965 9.02925 9.76965 8.69925C10.3497 8.36925 11.0996 8.42923 11.8096 8.85923L14.2797 10.3392C14.9597 10.7492 15.3496 11.3593 15.3496 12.0093C15.3496 12.6593 14.9597 13.2692 14.2797 13.6792L11.8096 15.1592C11.3996 15.3992 10.9797 15.5292 10.5897 15.5292ZM10.5897 9.96924C10.5497 9.96924 10.5196 9.97923 10.4996 9.98923C10.4296 10.0292 10.3496 10.2092 10.3496 10.5192V13.4793C10.3496 13.7793 10.4296 13.9593 10.4996 14.0093C10.5796 14.0493 10.7697 14.0292 11.0297 13.8692L13.4996 12.3893C13.7496 12.2393 13.8397 12.0892 13.8397 11.9992C13.8397 11.9092 13.7496 11.7692 13.4996 11.6092L11.0297 10.1292C10.8497 10.0192 10.6897 9.96924 10.5897 9.96924Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
Youtube_Outline.displayName = "BootstrapOutline";

export const Youtube_Bold = forwardRef<SVGSVGElement, SVGIconProps>(
  ({ fillPath = "currentColor", ...props }, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M17 4H7C4 4 2 6 2 9V15C2 18 4 20 7 20H17C20 20 22 18 22 15V9C22 6 20 4 17 4ZM13.89 13.03L11.42 14.51C10.42 15.11 9.59998 14.65 9.59998 13.48V10.51C9.59998 9.34001 10.42 8.88001 11.42 9.48001L13.89 10.96C14.84 11.54 14.84 12.46 13.89 13.03Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
Youtube_Bold.displayName = "YoutubeBold";

const Youtube = { Outline: Youtube_Outline, Bold: Youtube_Bold };

export default Youtube;
