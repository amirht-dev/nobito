import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import Button from "@/components/atoms/buttons/Button";
import { Star1_Bold } from "@/components/atoms/icons/Support-Like-Question/Star1";
import { Clock_Outline } from "@/components/atoms/icons/Time/Clock";
import { Frame_Outline } from "@/components/atoms/icons/Users/Frame";
import clsx from "clsx";
import { Frown, Smile } from "lucide-react";
import { forwardRef } from "react";
import type { UserCommentCardProps } from "./index.types";

const UserCommentCard = forwardRef<HTMLDivElement, UserCommentCardProps>(
  ({ satisfied = true }, ref) => {
    return (
      <div
        ref={ref}
        className="rounded-2xl border border-grey-200 bg-white-100 px-4 py-6 lg:p-6"
      >
        <div className="flex items-start">
          <Avatar className="size-[1em] text-[56px] lg:text-[80px]">
            <AvatarImage src="https://i.pravatar.cc/300" alt="" />
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>

          <div className="ms-2 space-y-3 lg:ms-4">
            <h4 className="text-tittle-2 font-medium text-black-400 lg:text-tittle-1">
              لیلا محمدی
            </h4>

            <h5 className="text-label-2 font-normal text-grey-500 lg:text-tittle-3">
              1402/10/02
            </h5>
          </div>

          <div className="ms-auto flex flex-col items-end gap-4">
            <Button
              variant="outline"
              className="rounded-full"
              size="sm"
              leftIcon={<Frame_Outline />}
            >
              نوبت آنلاین
            </Button>

            <div className="flex items-center gap-1.5">
              <span className="text-tittle-2 font-medium lg:text-tittle-1">
                4
              </span>
              <Star1_Bold className="text-secondary-600" />
            </div>
          </div>
        </div>

        <p className="mt-4 text-body-3 font-normal leading-155 text-grey-500 lg:mt-6 lg:text-body-2">
          بسیار عالی با توضیحات کامل، با حوصله و با تشخیص درست طی چند دقیقه
          ارتباط متنی آنلا با ایشان با یک چهارم هزینه های پرداخت شده برای متخصص
          های دیگه با مراجعه حضوری، ده برابر بیشتر به سوالاتم جواب داده شد. حتما
          توصیه میشو ایشان بسیار باتجربه و دلسوزی هستند و من هر وق مراجعه کردم
          نتیجه گرفتم ممنونم.
        </p>

        <hr className="mb-6 mt-4 h-px border-grey-200 lg:my-6" />

        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-2 text-grey-500">
            <Clock_Outline className="size-6" />
            <span className="text-body-3 font-medium lg:text-body-2 lg:font-normal">
              زمان انتظار : 0-15 دقیقه
            </span>
          </div>

          <div
            className={clsx(
              "flex items-center gap-3 lg:order-first",
              satisfied ? "text-primary-500" : "text-error-500",
            )}
          >
            {satisfied ? (
              <Smile className="size-6" />
            ) : (
              <Frown className="size-6" />
            )}
            <span className="text-body-3 font-medium lg:text-body-2 lg:font-normal">
              این پزشک را پیشنهاد {satisfied ? "می‌کنم" : "نمی‌کنم"}
            </span>
          </div>
        </div>
      </div>
    );
  },
);
UserCommentCard.displayName = "UserCommentCard";

export default UserCommentCard;
