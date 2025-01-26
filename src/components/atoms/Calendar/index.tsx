"use client";

import { cn } from "@/utils/helpers";
import clsx from "clsx";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject, Calendar as RMCalendar } from "react-multi-date-picker";
import { ArrowLeft_Outline } from "../icons/Arrow/ArrowLeft";
import { ArrowRight_Outline } from "../icons/Arrow/ArrowRight";

const weekDaysName = new DateObject({
  calendar: persian,
  locale: persian_fa,
}).weekDays.map((weekDay) => weekDay.name);

const Calendar: typeof RMCalendar = (props) => {
  return (
    <RMCalendar
      shadow={false}
      monthYearSeparator="/"
      {...props}
      calendar={persian}
      locale={persian_fa}
      weekDays={weekDaysName}
      renderButton={<CustomArrowButton />}
      mapDays={({ date, today, isSameDate, selectedDate }) => {
        const isToday = isSameDate(date, today);
        const isSelected =
          (selectedDate instanceof DateObject &&
            isSameDate(date, selectedDate)) ||
          (Array.isArray(selectedDate) &&
            selectedDate.some(
              (_date) => _date instanceof DateObject && isSameDate(_date, date),
            ));
        return {
          className: clsx(
            "!text-body-1 font-medium size-10 !static",
            isSelected
              ? "!text-white-100 !bg-primary-500"
              : "hover:!bg-primary-200 hover:!text-white-100 !bg-transparent !text-black-400",

            isToday && "outline outline-1 outline-offset-2 outline-primary-500",
          ),
        };
      }}
      className={cn(
        "!w-full !min-w-[440px] !max-w-md !rounded-3xl !border !border-grey-200",
        "[&_.rmdp-calendar]:space-y-6 [&_.rmdp-calendar]:p-6",
        "[&_.rmdp-top-class]:!block",
        "[&_.rmdp-day-picker]:!block [&_.rmdp-day-picker]:p-0",
        "[&_.rmdp-header]:border-b [&_.rmdp-header]:border-grey-100 [&_.rmdp-header]:pb-6 [&_.rmdp-header]:pt-0",
        "[&_.rmdp-header-values]:text-headline-3 [&_.rmdp-header-values]:font-medium [&_.rmdp-header-values]:leading-none",
        "[&_.rmdp-week:first-child]:gap-6j [&_.rmdp-week:first-child]:mb-6 [&_.rmdp-week:not(:first-child,:last-child)]:mb-3",
        "[&_.rmdp-week-day]:size-auto [&_.rmdp-week-day]:flex-1 [&_.rmdp-week-day]:text-tittle-3 [&_.rmdp-week-day]:font-normal [&_.rmdp-week-day]:text-grey-500",
        "[&_.rmdp-day]:flex [&_.rmdp-day]:size-[unset] [&_.rmdp-day]:flex-1 [&_.rmdp-day]:justify-center",
        "[&_.rmdp-range:not(.start,.end)]:!bg-primary-50 [&_.rmdp-range]:shadow-none",
        "[&_.rmdp-range.start]:!bg-transparent [&_.rmdp-range.start]:!bg-[linear-gradient(90deg,theme(colors.primary.50)_0%,theme(colors.primary.50)_50%,transparent_50%,transparent_100%)]",
        "[&_.rmdp-range.end]:!bg-transparent [&_.rmdp-range.end]:!bg-[linear-gradient(270deg,theme(colors.primary.50)_0%,theme(colors.primary.50)_50%,transparent_50%,transparent_100%)]",
        props.className,
      )}
    />
  );
};

function CustomArrowButton({
  direction,
  handleClick,
  ...props
}: {
  direction?: "left" | "right";
  disabled?: boolean;
  handleClick?: () => void;
  onKeyDown?: () => void;
}) {
  const Icon = direction === "left" ? ArrowRight_Outline : ArrowLeft_Outline;
  return (
    <button
      {...props}
      onClick={handleClick}
      className="text-grey-500 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Icon className="size-6" />
    </button>
  );
}

export default Calendar;
