import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="lg:pt-[260px]">
      <div className="container flex items-center justify-between bg-primary-500 text-headline-2 font-bold leading-155 max-lg:flex-col max-lg:px-6 max-lg:pt-8 lg:h-[180px]">
        <h2 className="text-accent-500 lg:order-2">
          بیمه های طرف قرارداد نوبیتو
        </h2>

        <div className="flex justify-center gap-6 max-lg:container max-lg:mt-8 max-lg:flex-wrap lg:order-3">
          <div className="relative size-[88px] lg:size-[112px]">
            <Image
              src="/insurance/insurance1.png"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative size-[88px] lg:size-[112px]">
            <Image
              src="/insurance/insurance2.png"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative size-[88px] lg:size-[112px]">
            <Image
              src="/insurance/insurance3.png"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative size-[88px] lg:size-[112px]">
            <Image
              src="/insurance/insurance4.png"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative size-[88px] lg:size-[112px]">
            <Image
              src="/insurance/insurance5.png"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="relative h-[340px] w-[234px] lg:order-1 lg:mb-[260px] lg:h-[439px] lg:w-[303px]">
          <Image
            src="/people1.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
