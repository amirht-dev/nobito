import Button from "@/components/atoms/buttons/Button";
import { tv } from "@/lib/tv";
import Image from "next/image";
import { forwardRef } from "react";
import HashTag from "../../../atoms/HashTag";
import { Star1_Bold } from "../../../atoms/icons/Support-Like-Question/Star1";
import type { ReserveDoctorCardProps } from "./index.types";

const reserveDoctorCardVariants = tv({
  slots: {
    root: "rounded-2xl border border-grey-200 bg-white-100 p-4 flex flex-col items-center",
    imageWrapper: "p-2 border-2 border-grey-300 w-fit rounded-full",
    imageContainer: "relative size-[120px] overflow-hidden rounded-full",
    image: "object-cover object-center",
    nameContainer: "mt-4 flex items-center gap-2",
    name: "text-body-1 font-medium text-black-400",
    rateContainer: "flex items-center gap-1",
    rate: "text-tittle-3 font-normal",
    rateIcon: "size-[18px] text-secondary-500",
    expertise: "mt-3 text-tittle-3 font-normal text-grey-500",
    tagWrapper: "flex items-center justify-center gap-2 mt-6",
  },
  variants: {
    fullWidth: {
      true: {
        root: "w-full",
      },
      false: {
        root: "w-[282px]",
      },
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

const ReserveDoctorCard = forwardRef<HTMLDivElement, ReserveDoctorCardProps>(
  ({ fullWidth }, ref) => {
    const c = reserveDoctorCardVariants({ fullWidth });
    return (
      <div className={c.root()} ref={ref}>
        <div className={c.imageWrapper()}>
          <div className={c.imageContainer()}>
            <Image
              src="https://placehold.co/200.png"
              alt="img"
              fill
              className={c.image()}
            />
          </div>
        </div>

        <div className={c.nameContainer()}>
          <h4 className={c.name()}>عباس میراحمدی</h4>
          <div className={c.rateContainer()}>
            <span className={c.rate()}>4/5</span>
            <Star1_Bold className={c.rateIcon()} />
          </div>
        </div>
        <div className={c.expertise()}>متخصص قلب و عروق</div>

        <div className={c.tagWrapper()}>
          {Array.from({ length: 4 }, (_, idx) => (
            <HashTag key={idx}>تگ</HashTag>
          ))}
        </div>

        <hr className="my-4 border-grey-200" />

        <Button variant="outline" className="self-stretch rounded-full">
          دریافت نوبت
        </Button>
      </div>
    );
  },
);
ReserveDoctorCard.displayName = "ReserveDoctorCard";

export default ReserveDoctorCard;
