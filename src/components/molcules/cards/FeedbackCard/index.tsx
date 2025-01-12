import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import Chip from "@/components/atoms/Chip";
import { TickCircle_Outline } from "@/components/atoms/icons/Essesional/TickCircle";
import { More_Outline } from "@/components/atoms/icons/Settings/More";
import { Like1_Outline } from "@/components/atoms/icons/Support-Like-Question/Like1";
import { Frame_Outline } from "@/components/atoms/icons/Users/Frame";

const FeedbackCard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center">
        <Avatar className="size-14 rounded-full lg:size-[72px]">
          <AvatarImage src="https://i.pravatar.cc/300" alt="" />
          <AvatarFallback>AT</AvatarFallback>
        </Avatar>

        <div className="ms-3 space-y-2 lg:ms-4 lg:space-y-3">
          <h4 className="text-body-2 font-normal text-black-400 lg:text-body-1">
            بهرام میرزایی
          </h4>

          <span className="text-body-4 font-normal text-grey-500">
            متخصص مغز و اعصاب
          </span>
        </div>

        <Chip className="ms-auto border-primary-500 text-primary-500">
          تائید شده
        </Chip>

        <button className="ms-2">
          <More_Outline className="size-[18px] rotate-90 lg:size-6" />
        </button>
      </div>

      <p className="text-label-2 font-medium leading-normal text-grey-500 lg:text-tittle-3">
        <span className="text-black-400">نظرپزشک :</span> متن ساختگی با تولید
        سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.لورم ایپسوم
        متن ساختگی با
      </p>

      <div className="flex flex-wrap items-center gap-4">
        {Array.from({ length: 4 }, (_, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <TickCircle_Outline className="size-[18px] text-primary-500" />
            <span className="text-tittle-3 font-normal text-black-400">
              رفتار محترمانه
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center border-y border-grey-100 py-3 lg:py-4">
        <span className="text-label-2 font-medium text-black-400">12 بهمن</span>

        <div className="ms-3 flex items-center gap-2 text-primary-500">
          <Frame_Outline className="size-6" />
          <span className="text-body-3 font-medium">مراجعه حضوری</span>
        </div>

        <div className="ms-auto flex items-center gap-2 text-black-400">
          <Like1_Outline className="size-[16px]" />
          <span className="text-label-2 font-medium lg:hidden">10</span>
          <span className="text-label-2 font-medium max-lg:hidden">
            این نظر برای 10 نفر مفید بود
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
