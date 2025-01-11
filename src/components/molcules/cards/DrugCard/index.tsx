import { Capsule } from "@/components/atoms/icons/Medical/Capsule";
import { Stethoscope } from "lucide-react";

const DrugCard = () => {
  return (
    <div className="flex gap-4 rounded-[10px] border border-grey-300 bg-white-100 p-3 max-lg:flex-col lg:items-center lg:px-4 lg:py-3">
      <div className="flex items-center gap-2">
        <Capsule className="size-6 text-primary-500 lg:size-8" />
        <h5 className="flex-1 text-tittle-3 font-medium text-black-400">
          داروها : پرپرانوال/آربیکور/روپیکسون/الپیدو/آربیکور
        </h5>
      </div>

      <div className="flex items-center gap-2">
        <Stethoscope className="size-6 text-primary-500 lg:size-8" />
        <h5 className="flex-1 text-tittle-3 font-medium text-black-400">
          پزشک : دکتر علی رضایی
        </h5>
      </div>

      <span className="ms-auto text-body-4 font-normal text-grey-400">
        1402/08/14
      </span>
    </div>
  );
};

export default DrugCard;
