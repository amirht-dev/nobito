import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import Button from "@/components/atoms/buttons/Button";
import Calendar from "@/components/atoms/Calendar";
import Chip from "@/components/atoms/Chip";
import { ArrowLeft_Outline } from "@/components/atoms/icons/Arrow/ArrowLeft";
import { Location_Bold } from "@/components/atoms/icons/Location/Location";
import { Stethoscope } from "@/components/atoms/icons/Medical/Stethoscope";
import { Like1_Bold } from "@/components/atoms/icons/Support-Like-Question/Like1";
import {
  CircularProgress,
  CircularProgressIndicator,
  CircularProgressValue,
} from "@/components/atoms/Progress/CircularProgress";
import {
  ProgressLine,
  ProgressLineIndicator,
} from "@/components/atoms/Progress/ProgressLine";
import Rating from "@/components/atoms/Rating";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/Tabs";
import UserCommentCard from "@/components/molcules/cards/UserCommentCard";
import VisitCard from "@/components/molcules/cards/VisitCard";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { visitTypes, type VisitType } from "./index.constants";

export default async function DoctorProfilePage({
  searchParams,
}: NextPageProps<"id", "visit-type">) {
  const _searchParams = await searchParams;

  const visitType: VisitType =
    ((Array.isArray(_searchParams["visit-type"])
      ? _searchParams["visit-type"][0]
      : _searchParams["visit-type"]) as VisitType) ?? "in-person";

  console.log({ visitType });

  return (
    <div className="container mt-6 flex flex-col gap-12 lg:mt-12 lg:flex-row lg:gap-8">
      <div className="flex-1">
        <DoctorDesktopInfo />
        <div className="space-y-6 divide-y divide-grey-200 lg:mt-20 lg:space-y-10 [&>div:not(:first-child)]:pt-6 lg:[&>div:not(:first-child)]:pt-10">
          <AboutDoctor />
          <ClinicLocation />
          <UserExperiences />
        </div>
      </div>

      <div className="order-first w-full max-w-max lg:order-last">
        <DoctorMobileInfo />
        <Tabs
          defaultValue={"in-person" satisfies VisitType}
          value={visitType}
          dir="rtl"
        >
          <div className="space-y-6 rounded-2xl border border-grey-200 px-4 py-6 lg:space-y-8 lg:rounded-3xl lg:py-8">
            <h3 className="text-center text-headline-3 font-medium text-black-400 lg:text-headline-1">
              ملاقات با پزشک
            </h3>

            <TabsList className="flex items-stretch justify-between gap-4 border-none lg:gap-6">
              {visitTypes.map(({ type, icon, label }) => (
                <TabsTrigger value={type} asChild>
                  <Link
                    href={{ query: { "visit-type": type } }}
                    className="group flex flex-1 flex-col gap-3 border-none disabled:cursor-not-allowed lg:gap-4"
                  >
                    <div
                      className={clsx(
                        "flex aspect-square items-center justify-center rounded-lg border border-grey-400 p-3 text-grey-400 transition-all lg:rounded-[10px] lg:p-5",
                        "group-data-[state=active]:border-primary-500 group-data-[state=active]:bg-primary-500 group-data-[state=active]:text-white-100",
                      )}
                    >
                      <icon.inactive className="h-10 w-10 group-data-[state=active]:hidden lg:h-16 lg:w-16" />
                      <icon.active className="h-10 w-10 group-data-[state=inactive]:hidden lg:h-16 lg:w-16" />
                    </div>

                    <span className="text-center text-body-2 text-grey-400 group-data-[state=active]:text-primary-500">
                      {label}
                    </span>
                  </Link>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent
            value={"by-phone" satisfies VisitType}
            className="mt-6 lg:mt-10"
          >
            <ul className="flex flex-col gap-6">
              {Array.from({ length: 3 }, (_, idx) => (
                <VisitCard key={idx} />
              ))}
            </ul>
          </TabsContent>
          <TabsContent
            value={"in-person" satisfies VisitType}
            className="mt-6 lg:mt-10"
          >
            <ul className="flex flex-col gap-6">
              {Array.from({ length: 3 }, (_, idx) => (
                <VisitCard key={idx} />
              ))}
            </ul>

            <div className="mt-12 rounded-2xl bg-primary-500 bg-pattern2 px-4 py-6 lg:px-6 lg:py-7">
              <h3 className="text-headline-3 font-medium text-white-100 max-lg:text-center">
                ملاحظات قبل از مراجعه
              </h3>

              <ul className="mt-6 flex flex-col gap-6 text-white-100 lg:mt-5 lg:gap-5">
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-white-100" />
                  <p className="flex-1 text-body-2 font-normal text-white-100">
                    حتما در زمان نوبت دهی حاضر باشید چرا که امکان ارفاق وجود
                    ندارد.
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-white-100" />
                  <p className="flex-1 text-body-2 font-normal text-white-100">
                    اگر قبلا پرونده پزشکی مرتبط دارید حتما همراه خود داشته
                    باشید.
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-white-100" />
                  <p className="flex-1 text-body-2 font-normal text-white-100">
                    بعداز مراجعه به پزشک اطلاعات شما در پرونده مجازی شما ثبت شده
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-12 max-w-min">
              <h2 className="text-headline-2 font-medium text-black-400">
                روز مشاوره خود را پیدا کنید
              </h2>

              <p className="mt-8 text-body-2 font-normal leading-[170%] text-grey-500">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است چاپگره ا و متون بلکه روزنامه و مجله
                در ستون و
              </p>

              <Calendar className="mt-10" range />
            </div>
          </TabsContent>
          <TabsContent
            value={"online" satisfies VisitType}
            className="mt-6 lg:mt-10"
          >
            <ul className="flex flex-col gap-6">
              {Array.from({ length: 3 }, (_, idx) => (
                <VisitCard key={idx} />
              ))}
            </ul>
          </TabsContent>
          <TabsContent
            value={"textual" satisfies VisitType}
            className="mt-6 lg:mt-10"
          >
            <ul className="flex flex-col gap-6">
              {Array.from({ length: 3 }, (_, idx) => (
                <VisitCard key={idx} />
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function DoctorMobileInfo() {
  return (
    <div className="mb-10 flex flex-col items-center gap-4 lg:hidden">
      <Avatar className="size-[1em] border border-grey-400 bg-transparent p-2 text-[128px]">
        <AvatarImage src="https://i.pravatar.cc/300" className="rounded-full" />
        <AvatarFallback className="bg-grey-200">BM</AvatarFallback>
      </Avatar>

      <div>
        <span className="text-body-1 font-medium text-black-400">
          بهرام میرزایی
        </span>{" "}
        <span className="text-body-3 font-normal text-grey-500">
          (متخصص مغز و اعصاب)
        </span>
      </div>

      <span className="text-body-2 font-medium text-black-400">
        کد نظام پزشکی : 50558
      </span>

      <span className="text-body-1 font-normal text-grey-500">تهران</span>

      <Rating value={2} readonly />
    </div>
  );
}

function DoctorDesktopInfo() {
  return (
    <div className="flex items-center gap-4 max-lg:hidden">
      <Avatar className="size-[1em] border border-grey-400 bg-transparent p-2 text-[128px] lg:text-[192px]">
        <AvatarImage src="https://i.pravatar.cc/300" className="rounded-full" />
        <AvatarFallback className="bg-grey-200">BM</AvatarFallback>
      </Avatar>

      <div className="flex flex-1 flex-col gap-4">
        <h3 className="text-headline-3 font-medium text-black-400">
          بهرام میرزایی
        </h3>

        <span className="text-tittle-2 font-normal text-grey-500">
          متخصص مغز و اعصاب
        </span>

        <span className="text-tittle-2 font-normal text-grey-500">تهران</span>

        <span className="text-tittle-1 font-medium text-black-400">
          کد نظام پزشکی : 50558
        </span>
      </div>

      <Rating count={5} value={2} readonly className="self-end" />
    </div>
  );
}

function AboutDoctor() {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
        <h3 className="text-headline-3 font-medium text-black-400 lg:text-headline-2">
          درباره پزشک
        </h3>

        <div className="flex items-center gap-2">
          <Like1_Bold className="size-6 text-success-600" />
          <span className="text-body-2 font-normal text-grey-500">
            835نفر / از 970 از پزشک راضی بوده اند
          </span>
        </div>
      </div>

      <p className="mt-6 text-body-3 font-normal leading-144 text-grey-500 lg:text-body-2">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگره ا و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت.لورم
        ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
        طراحان گرافیک
      </p>

      <div className="mt-12 flex flex-col items-center gap-4 lg:mt-10 lg:flex-row lg:items-start lg:gap-2">
        <div className="w-fit rounded-full border border-primary-500 p-3 text-primary-500 lg:border-none">
          <Stethoscope className="size-8 lg:size-10" />
        </div>

        <div className="mt-4 text-center text-body-1">
          <span className="font-normal text-grey-500">تخصص پزشکی :</span>{" "}
          <span className="font-medium text-primary-500">جراج مغز و اعصاب</span>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-2 lg:justify-start lg:gap-4">
        {Array.from({ length: 10 }, (_, idx) => (
          <Chip className="border-grey-500 text-grey-500" key={idx}>
            جراحی مغز
          </Chip>
        ))}
      </div>
    </div>
  );
}

function ClinicLocation() {
  return (
    <div className="space-y-8 lg:space-y-6">
      <h3 className="text-headline-3 font-medium text-black-400 lg:text-headline-2">
        موقعیت مکانی مطب
      </h3>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-4">
        <div className="space-y-6 lg:flex-1">
          <div className="space-y-4">
            <h4 className="text-body-1 font-medium text-black-400 lg:text-headline-3">
              آدرس :
            </h4>

            <p className="text-body-3 font-normal text-grey-500 lg:text-body-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان لازم است، و برای شرایط فعلی تکنولوژی مورد.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-body-1 font-medium text-black-400 lg:text-headline-3">
              تلفن :
            </h4>

            <div className="text-body-3 font-normal text-grey-500 lg:text-body-2">
              <Link href="tel:0219389837">021-9389837</Link>
              {" | "}
              <Link href="tel:02183937848">021-83937848</Link>
            </div>
          </div>
        </div>

        <button className="h-[120px] w-full rounded-full border border-grey-400 p-2 lg:order-first lg:h-[240px] lg:w-[144px]">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full">
            <Image
              src="/tehran-map.jpg"
              alt="map"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-primary-500/60" />
            <Location_Bold className="relative size-10 text-white-100" />
          </div>
        </button>
      </div>
    </div>
  );
}

function UserExperiences() {
  return (
    <div className="flex flex-col">
      <h3 className="text-headline-3 font-medium text-black-400 lg:text-headline-2">
        تجربیات کاربران
      </h3>

      <p className="mt-6 border-s border-grey-200 ps-2 text-body-3 font-normal text-grey-500 lg:mt-10 lg:ps-4 lg:text-body-2">
        در ادامه می‌توانید تجربه مراجعه‌ی کاربران دیگر به دکتر بهروز مقدادی را
        بخوانید.در صورتی که شما هم از بیماران دکتر بهروز مقدادی بوده‌اید
        می‌توانید نظر خود را ثبت کنید
      </p>

      <Button
        className="mt-6 self-end px-6 py-2 lg:mt-8 lg:py-3"
        size="md"
        rightIcon={<ArrowLeft_Outline />}
      >
        ثبت بازخورد
      </Button>

      <div className="mt-12 rounded-2xl border border-grey-200 bg-white-100 px-4 py-6 lg:rounded-3xl lg:p-6">
        <p className="text-center text-body-3 font-normal leading-144 text-black-400 lg:text-body-2 lg:leading-155">
          از میان 14865 کاربر که تحت درمان دکتر بهرام میرزایی قرار گرفته اند ،
          1325 کاربر این پزشک را پیشنهاد می کنند.
        </p>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row">
          <CircularProgress className="mx-auto">
            <CircularProgressIndicator value={0.75} />
            <CircularProgressValue value={0.75} />
          </CircularProgress>

          <div className="grid content-start items-center gap-4 border-grey-200 max-lg:border-t max-lg:pt-6 lg:flex-1 lg:grid-cols-[auto_1fr] lg:border-s lg:ps-[18px]">
            <div className="text-body-2 font-medium text-black-400 lg:text-body-3 lg:font-normal">
              زمان انتظار در مطب
            </div>
            <ProgressLine>
              <ProgressLineIndicator value={0.5} dir="rtl" />
            </ProgressLine>

            <div className="text-body-2 font-medium text-black-400 lg:text-body-3 lg:font-normal">
              تشخیص درست
            </div>
            <ProgressLine>
              <ProgressLineIndicator value={0.2} dir="rtl" />
            </ProgressLine>

            <div className="text-body-2 font-medium text-black-400 lg:text-body-3 lg:font-normal">
              امکانات رفاهی
            </div>
            <ProgressLine>
              <ProgressLineIndicator value={0.6} dir="rtl" />
            </ProgressLine>

            <div className="text-body-2 font-medium text-black-400 lg:text-body-3 lg:font-normal">
              نظافت مطب
            </div>
            <ProgressLine>
              <ProgressLineIndicator value={0.9} dir="rtl" />
            </ProgressLine>

            <div className="text-body-2 font-medium text-black-400 lg:text-body-3 lg:font-normal">
              رفتار مناسب
            </div>
            <ProgressLine>
              <ProgressLineIndicator value={0.1} dir="rtl" />
            </ProgressLine>
          </div>
        </div>

        <hr className="my-6 h-px border-grey-200" />

        <div className="gap flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <p className="text-body-2 font-medium text-black-400 lg:text-body-1">
            70 درصد کاربران این پزشک را پیشنهاد می‌کنند
          </p>

          <Rating value={3} readonly />
        </div>
      </div>

      <ul className="mt-6 flex flex-col gap-6 lg:mt-10">
        {Array.from({ length: 3 }, (_, idx) => (
          <UserCommentCard key={idx} />
        ))}
      </ul>
    </div>
  );
}
