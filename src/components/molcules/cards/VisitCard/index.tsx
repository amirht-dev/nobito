import Button from "@/components/atoms/buttons/Button";
import Chip from "@/components/atoms/Chip";
import { ArrowLeft_Outline } from "@/components/atoms/icons/Arrow/ArrowLeft";
import { InfoCircle_Outline } from "@/components/atoms/icons/Essesional/InfoCricle";
import { Calendar_Outline } from "@/components/atoms/icons/Time/Calendar";
import { Clock_Outline } from "@/components/atoms/icons/Time/Clock";
import { Frame_Outline } from "@/components/atoms/icons/Users/Frame";
import React from "react";

const VisitCard = () => {
  return (
    <div className="rounded-2xl border border-grey-200 bg-white-100 p-4 lg:p-6">
      <div className="flex items-center">
        <Frame_Outline className="size-8 text-black-400" />

        <h3 className="ms-2 text-tittle-1 font-medium text-black-400">
          مشاوره حضوری
        </h3>

        <Chip
          prefixIcon={<InfoCircle_Outline />}
          className="ms-auto border-none bg-[#EAF7FF] text-[#157EB9]"
        >
          راهنما
        </Chip>
      </div>

      <div className="mt-8 flex items-center gap-2 text-grey-500 lg:mt-10">
        <Calendar_Outline className="size-6" />
        <p className="text-body-2 font-normal lg:text-body-1">
          اولین نوبت خالی دوشنبه 3 آذر (14:30)
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-grey-500">
          <Clock_Outline className="size-6" />
          <p className="text-tittle-2 font-medium lg:text-body-1 lg:font-normal">
            25 دقیقه گفتگو
          </p>
        </div>

        <span className="text-body-2 font-medium text-primary-500 lg:hidden">
          157،000 تومان
        </span>
      </div>

      <div className="mt-9 lg:mt-10 lg:flex lg:items-center lg:justify-between">
        <span className="text-headline-3 font-medium text-primary-500 max-lg:hidden">
          157،000 تومان
        </span>

        <Button
          rightIcon={<ArrowLeft_Outline />}
          variant="outline"
          size="md"
          className="max-lg:w-full max-lg:justify-center"
        >
          نوبت بگیرید
        </Button>
      </div>
    </div>
  );
};

export default VisitCard;
