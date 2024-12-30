import Button from "@/components/atoms/buttons/Button";
import { WalletMinus_Bold } from "@/components/atoms/icons/Money/WalletMinus";
import Image from "next/image";

const LandingBanner = () => {
  return (
    <div className="container bg-white-50 py-8 lg:container lg:rounded-3xl lg:p-12">
      {/* wrapper */}
      <div className="flex gap-8 max-lg:flex-col lg:flex-row-reverse lg:gap-12">
        <div className="relative aspect-[328/200] overflow-hidden rounded-xl lg:w-[362px]">
          <Image
            src="/landing_banner.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col lg:flex-1">
          <h1 className="text-[20px] font-semibold leading-[170%] text-[#3B3B3B] max-lg:text-center lg:text-headline-1 lg:font-bold">
            بیمه دکترتو در روزهای سخت همراه شماست
          </h1>

          <p className="mt-4 text-[14px] text-body-3 font-normal leading-normal text-grey-500 lg:mt-8 lg:text-body-2 lg:leading-155">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد،
          </p>

          <Button
            size="md"
            color="black"
            variant="outline"
            className="ms-auto mt-8 max-lg:w-full lg:mt-10"
          >
            مطالعه بیشتر
          </Button>
        </div>
      </div>

      <div className="mt-12 flex gap-8 max-lg:flex-col lg:gap-20">
        {Array.from({ length: 3 }, (_, idx) => (
          <div className="flex flex-col" key={idx}>
            <div
              className="inline-block aspect-square w-fit rounded-lg bg-primary-500 p-3 text-white-50 max-lg:mx-auto"
              key={idx}
            >
              <WalletMinus_Bold className="size-8" />
            </div>

            <h3 className="mt-4 text-tittle-2 font-semibold max-lg:text-center lg:font-bold">
              بیمه دکترتو در روزهای سخت همراه
            </h3>

            <p className="mt-3 text-body-4 leading-[170%] text-grey-500 max-lg:text-center lg:leading-144">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با ا
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingBanner;
