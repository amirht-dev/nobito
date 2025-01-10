import Button from "@/components/atoms/buttons/Button";
import { ChevronDown_Outline } from "@/components/atoms/icons/Arrow/ChevronDown";
import { NoteText_Outline } from "@/components/atoms/icons/Content-Edit/NoteText";
import { Notification_Outline } from "@/components/atoms/icons/Notifications/Notification";
import { Speaker_Outline } from "@/components/atoms/icons/Video-Audio-Image/Speaker";
import { tv } from "@/lib/tv";
import { forwardRef } from "react";
import type { MessageCardProps } from "./index.types";

export const messageCardVariants = tv({
  slots: {
    root: "space-y-4 border-b border-grey-100 pb-4",
    headerContainer: "flex items-center",
    iconContainer:
      "flex size-[34px] lg:size-10 items-center justify-center rounded-full p-2",
    icon: "size-[18px]",
    title:
      "ms-3 flex-1 text-body-3 lg:text-body-1 font-medium leading-[140%] text-black-400",
    notification: "ms-auto size-2 rounded-full bg-[#0683C9]",
    body: "text-label-2 lg:text-tittle-3 font-normal leading-normal text-grey-400",
    footerContainer: "flex items-center justify-between",
    date: "text-body-4 font-medium text-grey-400",
    button: "ms-auto text-[#0683C9] hover:bg-[#0683C910] hover:text-[#0683C9]",
  },
  variants: {
    variant: {
      notification: {
        iconContainer: "bg-secondary-500",
        icon: "text-black-900",
      },
      order: {
        iconContainer: "bg-[#0683C9]",
        icon: "text-white-100",
      },
      other: {
        iconContainer: "bg-primary-500",
        icon: "text-white-100",
      },
    },
  },
});

const MessageCard = forwardRef<HTMLDivElement, MessageCardProps>(
  ({ variant = "other", className, ...props }, ref) => {
    const cns = messageCardVariants({ variant, className });

    return (
      <div {...props} ref={ref} className={cns.root({ className })}>
        <div className={cns.headerContainer()}>
          <div className={cns.iconContainer()}>
            {variant === "notification" ? (
              <Notification_Outline className={cns.icon()} />
            ) : variant === "order" ? (
              <NoteText_Outline className={cns.icon()} />
            ) : (
              <Speaker_Outline className={cns.icon()} />
            )}
          </div>

          <h4 className={cns.title()}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </h4>

          <div className={cns.notification()} />
        </div>

        <p className={cns.body()}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
        </p>

        <div className={cns.footerContainer()}>
          <span className={cns.date()}>12 بهمن</span>

          <Button
            rightIcon={<ChevronDown_Outline />}
            variant="text"
            size="sm"
            className={cns.button()}
          >
            جزئیات بیشتر
          </Button>
        </div>
      </div>
    );
  },
);
MessageCard.displayName = "MessageCard";

export default MessageCard;
