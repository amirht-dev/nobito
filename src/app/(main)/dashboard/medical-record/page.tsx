import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import Chip from "@/components/atoms/Chip";
import {
  Embla,
  EmblaContainer,
  EmblaSlide,
  EmblaWrapper,
} from "@/components/atoms/Embla";
import DrugCard from "@/components/molcules/cards/DrugCard";
import ExperimentCard from "@/components/molcules/cards/ExperimentCard";
import config from "@/config.json";
import { type PropsWithChildren } from "react";

export default function DashboardMedicalRecordPage() {
  return (
    <div className="space-y-6 rounded-2xl border border-grey-200 bg-white-100 p-6 lg:space-y-12">
      <div className="flex gap-6 max-lg:flex-col max-lg:items-center lg:justify-between">
        <Avatar className="size-[1em] rounded-full text-[128px] lg:hidden">
          <AvatarImage src="https://i.pravatar.cc/300" alt="" />
          <AvatarFallback>AT</AvatarFallback>
        </Avatar>

        <div className="flex flex-col items-center gap-4">
          <h4 className="text-body-1 font-medium text-black-900">
            سیاوش ایرانی
          </h4>
          <span className="text-tittle-2 font-normal text-grey-400">
            09177283030
          </span>
          <span className="text-tittle-2 font-normal text-grey-400">
            عمل جراحی قلب باز
          </span>
        </div>

        <span className="text-tittle-2 font-normal text-grey-400 max-lg:hidden">
          ویرایش شده در 1402/08/23
        </span>
      </div>

      <hr className="h-px border-grey-100 max-lg:hidden" />

      <MedicalRecordSection title="شرح حال بیمار">
        <p className="text-label-2 font-normal leading-normal text-grey-500 lg:text-body-2 lg:leading-155">
          "بیمار، که اخیراً عمل جراحی قلب باز داشته است، در حال حاضر در دوره
          بهبودی قرار دارد. عمل جراحی به منظور رفع مشکلات قلبی و بهبود عملکرد
          قلب انجام شد. پزشکان و تیم درمانی با دقت به جزئیات بیماری فعلی و
          تاریخچه پزشکی بیمار پرداخته و اقدامات لازم را انجام داده‌اند. بیمار در
          حال مراقبت‌های پس اعملایی است و تحت نظر پزشکان و پرسنل متخصص بهبودی
          خود را طی می‌کند. در این دوران حیاتی، اهمیت نظارت مستمر بر علایم و
          عملکرد قلب، مدیریت درد، و حفظ سلامتی عمومی بیمار بسیار مهم است. برای
          اطمینان از بهبودی بهتر و پایدار، بیمار نیاز به رعایت دقیق توصیه‌های
          پزشک، داروها و توجه به علایم و نشانه‌هایی مثل تغییرات در ضربان قلب،
          کمبود نفس یا درد ناگهانی دارد. تیم درمانی در تمامی مراحل در کنار بیمار
          است تا حمایت لازم را فراهم کرده و به او کمک کند تا به سرعت و به نحو
          امن به شفا برسد."
        </p>
      </MedicalRecordSection>

      <hr className="h-px border-grey-100" />

      <MedicalRecordSection title="سابقه بیماری قلبی">
        <div className="flex flex-wrap gap-4">
          <Chip className="border-primary-500 text-primary-500">آنجوگرافی</Chip>
          <Chip className="border-primary-500 text-primary-500">جراحی قلب</Chip>
          <Chip className="border-primary-500 text-primary-500">تست ورزش</Chip>
          <Chip className="border-primary-500 text-primary-500">
            مصرف دارو روزانه
          </Chip>
        </div>
      </MedicalRecordSection>

      <MedicalRecordSection title="داروهای در حال مصرف">
        <div className="space-y-4">
          {Array.from({ length: 3 }, (_, idx) => (
            <DrugCard key={idx} />
          ))}
        </div>
      </MedicalRecordSection>

      <MedicalRecordSection title="آزمایشات">
        <Embla
          active={false}
          axis="y"
          direction="rtl"
          breakpoints={{
            [`(min-width: ${config.screens.lg})`]: {
              active: true,
              axis: "x",
            },
          }}
        >
          <EmblaWrapper>
            <EmblaContainer className="flex-col max-lg:gap-4 lg:flex-row lg:[--gap:24px] lg:[--slide-size:fit-content]">
              {Array.from({ length: 3 }, (_, idx) => (
                <EmblaSlide key={idx} asChild>
                  <ExperimentCard />
                </EmblaSlide>
              ))}
            </EmblaContainer>
          </EmblaWrapper>
        </Embla>
        <div className="space-y-4"></div>
      </MedicalRecordSection>
    </div>
  );
}

function MedicalRecordSection({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div className="space-y-6 lg:space-y-8">
      <h3 className="text-tittle-1 font-medium text-black-400 lg:text-headline-3 lg:font-bold">
        {title}:
      </h3>

      {children}
    </div>
  );
}
