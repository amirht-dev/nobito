import Button from "@/components/atoms/buttons/Button";
import { ArrowLeft_Outline } from "@/components/atoms/icons/Arrow/ArrowLeft";
import { cn } from "@/utils/helpers";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

const ExperimentCard = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        "flex flex-col gap-6 rounded-xl border border-grey-300 p-3 lg:max-w-[395px] lg:p-4",
        props.className,
      )}
    >
      <div className="flex items-center justify-between">
        <h5 className="text-body-2 font-bold text-black-400">تست ورزش</h5>

        <span className="text-body-4 font-normal text-grey-500">
          1402/08/14
        </span>
      </div>

      <p className="text-body-4 font-normal leading-155 text-grey-500 lg:leading-144">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد،
      </p>

      <Button
        variant="text"
        size="sm"
        className="ms-auto"
        rightIcon={<ArrowLeft_Outline />}
      >
        جواب آزمایش
      </Button>
    </div>
  );
});
ExperimentCard.displayName = "ExperimentCard";

export default ExperimentCard;
