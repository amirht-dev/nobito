import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import Button from "@/components/atoms/buttons/Button";
import { ChevronDown_Outline } from "@/components/atoms/icons/Arrow/ChevronDown";
import { CallCalling_Outline } from "@/components/atoms/icons/Call/CallCalling";

const TurnCard = () => {
  return (
    <div className="flex flex-col gap-6 border-b border-grey-200 pb-4 lg:pb-6">
      <div className="flex items-center">
        <Avatar className="size-14 rounded-full bg-grey-100 lg:size-[72px]">
          <AvatarImage src="https://i.pravatar.cc/300" alt="" />
          <AvatarFallback className="text-grey-900">BM</AvatarFallback>
        </Avatar>

        <div className="ms-3 flex flex-col gap-2 lg:ms-4 lg:gap-3">
          <h4 className="text-body-2 font-medium text-black-400 lg:text-body-1">
            بهرام میرزایی
          </h4>
          <span className="text-body-4 font-normal text-grey-500">
            متخصص مغز و اعصاب
          </span>
        </div>

        <Button
          leftIcon={<CallCalling_Outline className="size-[18px]" />}
          variant="text"
          size="sm"
          className="ms-auto"
        >
          نوبت تلفنی
        </Button>
      </div>

      <p className="text-label-2 font-medium text-grey-400 lg:text-body-3">
        <span className="text-black-500">نظر پزشک :</span> لورم ایپسوم متن
        ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
        است.
      </p>

      <div className="flex items-center justify-between">
        <span className="text-label-2 font-normal text-grey-400">
          دوشنبه 12 بهمن | 1402/04/12
        </span>

        <Button
          rightIcon={<ChevronDown_Outline className="size-[18px]" />}
          variant="text"
          size="sm"
          className="ms-auto text-[#0683C9] hover:bg-[#0683C910] hover:text-[#0683C9]"
        >
          چزئیات بیشتر
        </Button>
      </div>
    </div>
  );
};

export default TurnCard;
