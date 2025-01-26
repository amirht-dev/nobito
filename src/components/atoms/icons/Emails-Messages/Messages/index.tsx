import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const Messages_Bold = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M13.19 6H6.79C6.53 6 6.28 6.01 6.04 6.04C3.35 6.27 2 7.86 2 10.79V14.79C2 18.79 3.6 19.58 6.79 19.58H7.19C7.41 19.58 7.7 19.73 7.83 19.9L9.03 21.5C9.56 22.21 10.42 22.21 10.95 21.5L12.15 19.9C12.3 19.7 12.54 19.58 12.79 19.58H13.19C16.12 19.58 17.71 18.24 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.6 16.38 6 13.19 6ZM6.5 14C5.94 14 5.5 13.55 5.5 13C5.5 12.45 5.95 12 6.5 12C7.05 12 7.5 12.45 7.5 13C7.5 13.55 7.05 14 6.5 14ZM9.99 14C9.43 14 8.99 13.55 8.99 13C8.99 12.45 9.44 12 9.99 12C10.54 12 10.99 12.45 10.99 13C10.99 13.55 10.55 14 9.99 14ZM13.49 14C12.93 14 12.49 13.55 12.49 13C12.49 12.45 12.94 12 13.49 12C14.04 12 14.49 12.45 14.49 13C14.49 13.55 14.04 14 13.49 14Z"
          fill={fillPath}
        />
        <path
          d="M21.98 6.79V10.79C21.98 12.79 21.36 14.15 20.12 14.9C19.82 15.08 19.47 14.84 19.47 14.49L19.48 10.79C19.48 6.79 17.19 4.5 13.19 4.5L7.1 4.51C6.75 4.51 6.51 4.16 6.69 3.86C7.44 2.62 8.8 2 10.79 2H17.19C20.38 2 21.98 3.6 21.98 6.79Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
Messages_Bold.displayName = "Messages_Bold";

export const Messages_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M9.98999 22.78C9.38999 22.78 8.81999 22.48 8.42999 21.95L7.23001 20.35C7.23001 20.36 7.18 20.33 7.16 20.33H6.79001C3.37001 20.33 1.25 19.4 1.25 14.79V10.79C1.25 6.58001 3.82001 5.48001 5.98001 5.29001C6.22001 5.26001 6.50001 5.25 6.79001 5.25H13.19C16.81 5.25 18.73 7.17001 18.73 10.79V14.79C18.73 15.08 18.72 15.36 18.68 15.63C18.5 17.76 17.4 20.33 13.19 20.33H12.79L11.55 21.95C11.16 22.48 10.59 22.78 9.98999 22.78ZM6.79001 6.75C6.56001 6.75 6.34 6.76 6.13 6.78C3.81 6.98 2.75 8.25001 2.75 10.79V14.79C2.75 18.22 3.81001 18.83 6.79001 18.83H7.19C7.64 18.83 8.14999 19.08 8.42999 19.44L9.63 21.05C9.85001 21.35 10.13 21.35 10.35 21.05L11.55 19.45C11.84 19.06 12.3 18.83 12.79 18.83H13.19C15.73 18.83 17 17.76 17.19 15.48C17.22 15.24 17.23 15.02 17.23 14.79V10.79C17.23 8.00001 15.98 6.75 13.19 6.75H6.79001Z"
          fill={fillPath}
        />
        <path
          d="M9.99023 14.1899C9.43023 14.1899 8.99023 13.7399 8.99023 13.1899C8.99023 12.6399 9.44023 12.1899 9.99023 12.1899C10.5402 12.1899 10.9902 12.6399 10.9902 13.1899C10.9902 13.7399 10.5502 14.1899 9.99023 14.1899Z"
          fill={fillPath}
        />
        <path
          d="M13.1899 14.1899C12.6299 14.1899 12.1899 13.7399 12.1899 13.1899C12.1899 12.6399 12.6399 12.1899 13.1899 12.1899C13.7399 12.1899 14.1899 12.6399 14.1899 13.1899C14.1899 13.7399 13.7399 14.1899 13.1899 14.1899Z"
          fill={fillPath}
        />
        <path
          d="M6.7998 14.1899C6.2398 14.1899 5.7998 13.7399 5.7998 13.1899C5.7998 12.6399 6.2498 12.1899 6.7998 12.1899C7.3498 12.1899 7.7998 12.6399 7.7998 13.1899C7.7998 13.7399 7.3498 14.1899 6.7998 14.1899Z"
          fill={fillPath}
        />
        <path
          d="M17.9401 16.29C17.7401 16.29 17.5401 16.21 17.4001 16.06C17.2401 15.9 17.1701 15.67 17.2001 15.45C17.2301 15.24 17.2401 15.02 17.2401 14.79V10.79C17.2401 8.00001 15.9901 6.75 13.2001 6.75H6.80012C6.57012 6.75 6.35015 6.76 6.14015 6.78C5.92015 6.81 5.69013 6.72999 5.53013 6.57999C5.37013 6.41999 5.28012 6.20001 5.30012 5.98001C5.48012 3.82001 6.59012 1.25 10.8001 1.25H17.2001C20.8201 1.25 22.7401 3.17001 22.7401 6.79001V10.79C22.7401 15 20.1701 16.1 18.0101 16.29C17.9801 16.29 17.9601 16.29 17.9401 16.29ZM6.92015 5.25H13.1901C16.8101 5.25 18.7301 7.17001 18.7301 10.79V14.66C20.4301 14.24 21.2301 12.99 21.2301 10.79V6.79001C21.2301 4.00001 19.9801 2.75 17.1901 2.75H10.7901C8.59014 2.75 7.35015 3.55 6.92015 5.25Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
Messages_Outline.displayName = "Messages_Outline";

const Messages = { Outline: Messages_Outline, Bold: Messages_Bold };

export default Messages;
