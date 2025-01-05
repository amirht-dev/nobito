import Button from "@/components/atoms/buttons/Button";
import {
  Embla,
  EmblaContainer,
  EmblaSlide,
  EmblaWrapper,
} from "@/components/atoms/Embla";
import { ArrowCircleLeft_Outline } from "@/components/atoms/icons/Arrow/ArrowCircleLeft";

const Banners = () => {
  return (
    <Embla direction="rtl">
      <EmblaWrapper className="container select-none overflow-hidden">
        <EmblaContainer className="[--gap:16px] [--slide-per-view:1.1] lg:[--gap:24px] lg:[--slide-per-view:2]">
          <EmblaSlide className="flex rounded-lg bg-[#A8035C] bg-[url(/doctor/doctor2.png)] bg-[length:48%] bg-left-bottom bg-no-repeat px-4 py-5 lg:rounded-3xl lg:bg-[length:36%] lg:px-10 lg:py-8">
            <div className="flex w-2/3 flex-col">
              <h5 className="text-[16px] font-semibold leading-normal text-white-50 lg:text-tittle-1 lg:font-medium">
                خدمات پزشکی رو برای شما در دسترس تر کردیم
              </h5>
              <p className="mb-8 mt-4 text-[12px] font-normal leading-[170%] text-white-50 lg:text-tittle-3 lg:leading-normal">
                فقط با چند کلیک به خدمات پزشکی مورد نیاز افراد کم توان جسمی
                (حرکتی)دسترسی پیدا میکنید.
              </p>

              <Button
                color="white"
                rightIcon={<ArrowCircleLeft_Outline />}
                className="mt-auto self-end max-lg:hidden"
              >
                مشاهده خدمات
              </Button>
            </div>
          </EmblaSlide>
          <EmblaSlide className="flex rounded-lg bg-[#11749E] bg-[url(/doctor/doctor1.png)] bg-[length:37%] bg-[16px_bottom] bg-no-repeat px-4 py-5 lg:rounded-3xl lg:bg-[length:27%] lg:bg-[40px_bottom] lg:px-10 lg:py-8">
            <div className="flex w-2/3 flex-col">
              <h5 className="text-[16px] font-semibold leading-normal text-white-50 lg:text-tittle-1 lg:font-medium">
                مشغله زندگی نمیزاره بیایی دکتر؟ مشاوره غیر حضوری بگیر
              </h5>
              <p className="mb-8 mt-4 text-[12px] font-normal leading-[170%] text-white-50 lg:text-tittle-3 lg:leading-normal">
                اگر زمان کافی برای مراجعه به پزشک رو ندارید میتونید از طریق
                مشاوره غیرحضوری با پزشک صحبت کنید
              </p>

              <Button
                color="white"
                rightIcon={<ArrowCircleLeft_Outline />}
                className="mt-auto self-end max-lg:hidden"
              >
                نوبت بگیر
              </Button>
            </div>
          </EmblaSlide>
        </EmblaContainer>
      </EmblaWrapper>
    </Embla>
  );
};

export default Banners;
