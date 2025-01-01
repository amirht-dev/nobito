import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import { Like1_Bold } from "@/components/atoms/icons/Support-Like-Question/Like1";
import { Star1_Bold } from "@/components/atoms/icons/Support-Like-Question/Star1";
import { tv } from "@/lib/tv";
import { forwardRef } from "react";
import type { CommentCardProps } from "./index.types";

const commentVariants = tv({
  slots: {
    root: "rounded-xl border border-grey-200 bg-white-50 aspect-[506/260] flex flex-col transition-all [&_*]:transition-all duration-500 [&_*]:duration-500",
    header: "flex items-start",
    avatar: "size-12 rounded",
    nameContainer: "flex-1",
    name: "font-semibold text-[#3B3B3B]",
    date: "text-[#9C9C9C] font-normal",
    rateWrapper: "flex items-center gap-1",
    starIcon: "size-[18px] text-[#EDB628]",
    rate: "text-[14px] font-normal",
    content: "text-grey-500 font-normal leading-[170%] mb-4",
    button: "flex items-center self-end text-primary-500 mt-auto",
  },
  variants: {
    size: {
      sm: {
        root: "flex items-center justify-center",
        avatar: "size-12 opacity-25",
      },
      md: {
        root: "p-3",
        avatar: "size-10",
        nameContainer: "space-y-2 ms-3",
        name: "text-[12px]",
        date: "text-[8px]",
        content: "mt-4 line-clamp-3 text-[10px]",
        button: "text-[10px] gap-1",
      },
      lg: {
        root: "p-6",
        avatar: "size-12",
        name: "text-[16px]",
        nameContainer: "space-y-4 ms-4",
        date: "text-[12px]",
        content: "mt-6 line-clamp-4 text-[12px]",
        button: "text-[12px] gap-2",
      },
      responsive: {
        root: "p-3 lg:p-6",
        avatar: "size-10 lg:size-12",
        name: "text-[12px] lg:text-[16px]",
        nameContainer: "space-y-2 lg:space-y-4 ms-3 lg:ms-4",
        date: "text-[8px] lg:text-[12px]",
        content:
          "mt-4 lg:mt-6 line-clamp-3 lg:line-clamp-4 text-[10px] lg:text-[12px]",
        button: "text-[10px] lg:text-[12px] gap-1 lg:gap-2",
      },
    },
    fullWidth: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      size: "sm",
      fullWidth: true,
      className: {
        root: "w-full",
      },
    },
    {
      size: "sm",
      fullWidth: false,
      className: {
        root: "w-[176px]",
      },
    },
    {
      size: "md",
      fullWidth: true,
      className: {
        root: "w-full",
      },
    },
    {
      size: "md",
      fullWidth: false,
      className: {
        root: "w-[273px]",
      },
    },
    {
      size: "lg",
      fullWidth: true,
      className: {
        root: "w-full",
      },
    },
    {
      size: "lg",
      fullWidth: false,
      className: {
        root: "w-[506px]",
      },
    },
    {
      size: "responsive",
      fullWidth: true,
      className: {
        root: "w-full",
      },
    },
    {
      size: "responsive",
      fullWidth: false,
      className: {
        root: "w-[273px] lg:w-[506px]",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    fullWidth: false,
  },
});

const CommentCard = forwardRef<HTMLDivElement, CommentCardProps>(
  ({ size = "responsive", fullWidth = false }, ref) => {
    const cns = commentVariants({ size, fullWidth });

    const avatar = (
      <Avatar className={cns.avatar()}>
        <AvatarImage src="https://i.pravatar.cc/300" alt="" />
        <AvatarFallback>AT</AvatarFallback>
      </Avatar>
    );

    return (
      <div className={cns.root()} ref={ref}>
        {size === "sm" ? (
          avatar
        ) : (
          <>
            <div className={cns.header()}>
              {avatar}

              <div className={cns.nameContainer()}>
                <h5 className={cns.name()}>امیرحسین طاهری</h5>
                <span className={cns.date()}>تاریخ: 1402/08/12</span>
              </div>

              <div className={cns.rateWrapper()}>
                <span className={cns.rate()}>4/5</span>
                <Star1_Bold className={cns.starIcon()} />
              </div>
            </div>

            <p className={cns.content()}>
              مدت ها بود که سعی میکردم برای نگهداری از براد معلولم فیزیوتراپی
              پیدا کنم که امکان اینو داشته باشه به منزل ما بیاد چونکه برای
              داداشم خیلی سخت بود هر هفته ببریم و بیاریمش اما خب نوبیتو این مشکل
              رو برای من حل کرد و تونستم فیزیوتراپ مطمئن و حرفه ای رو پیدا کنم
              که نیاز نباشه برادرم و ببرم و بیارم.ممنون از نوبیتو
            </p>

            <button className={cns.button()}>
              <Like1_Bold />
              <span>پیشنهاد میکنم</span>
            </button>
          </>
        )}
      </div>
    );
  },
);
CommentCard.displayName = "CommentCard";

export default CommentCard;
