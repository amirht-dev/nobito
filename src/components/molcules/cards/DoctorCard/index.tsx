import { tv } from "@/lib/tv";
import Image from "next/image";
import { forwardRef } from "react";
import HashTag from "../../../atoms/HashTag";
import { Location_Outline } from "../../../atoms/icons/Location/Location";
import { Star1_Bold } from "../../../atoms/icons/Support-Like-Question/Star1";
import type { DoctorCardProps } from "./index.types";

const doctorCardVariants = tv({
  slots: {
    root: "rounded-2xl border border-grey-200 bg-white-100 p-4",
    imageWrapper: "relative aspect-[250/152] w-full overflow-hidden rounded-xl",
    image: "object-cover object-center",
    nameContainer:
      "mt-4 flex items-center justify-between gap-2 overflow-hidden rounded-xl",
    name: "text-body-1 font-medium text-black-400",
    rateContainer: "flex items-center gap-1",
    rate: "text-tittle-3 font-normal",
    rateIcon: "size-[18px] text-secondary-500",
    expertise: "mt-3 text-tittle-3 font-normal text-grey-500",
    satisfaction: "mt-6 text-primary-500",
    tagWrapper: "flex items-center justify-center gap-2 mt-6",
    locationWrapper: "flex items-center gap-2 text-grey-500",
    location: "text-label-1 font-normal line-clamp-1 flex-1",
    locationIcon: "size-6",
  },
  variants: {
    fullWidth: {
      true: {
        root: "w-full",
      },
      false: {
        root: "max-w-[282px]",
      },
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

const DoctorCard = forwardRef<HTMLDivElement, DoctorCardProps>(
  ({ fullWidth }, ref) => {
    const c = doctorCardVariants({ fullWidth });
    return (
      <div className={c.root()} ref={ref}>
        <div className={c.imageWrapper()}>
          <Image
            src="https://placehold.co/600x400.png"
            alt="img"
            fill
            className={c.image()}
          />
        </div>

        <div className={c.nameContainer()}>
          <h4 className={c.name()}>عباس میراحمدی</h4>
          <div className={c.rateContainer()}>
            <span className={c.rate()}>4/5</span>
            <Star1_Bold className={c.rateIcon()} />
          </div>
        </div>
        <div className={c.expertise()}>متخصص قلب و عروق</div>

        <div className={c.satisfaction()}>(97%) 2374 بیمار راضی</div>

        <div className={c.tagWrapper()}>
          {Array.from({ length: 4 }, (_, idx) => (
            <HashTag key={idx}>تگ</HashTag>
          ))}
        </div>

        <hr className="my-4 border-grey-200" />

        <div className={c.locationWrapper()}>
          <Location_Outline className={c.locationIcon()} />
          <span className={c.location()}>
            نشانی : تهران - میدان آرژانتین - خیابان فلانی -بن بست فلانی - پلاک ۵
            - واجد ۳
          </span>
        </div>
      </div>
    );
  },
);
DoctorCard.displayName = "DoctorCard";

export default DoctorCard;
