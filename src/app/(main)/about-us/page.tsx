import IconButton from "@/components/atoms/buttons/IconButton";
import { Building4_Bold } from "@/components/atoms/icons/Building/Building4";
import {
  CallCalling_Bold,
  CallCalling_Outline,
} from "@/components/atoms/icons/Call/CallCalling";
import { Youtube_Outline } from "@/components/atoms/icons/Crypto-Company/Youtube";
import { SMS_Bold } from "@/components/atoms/icons/Emails-Messages/SMS";
import { Instagram_Outline } from "@/components/atoms/icons/Essesional/Instagram";
import { Send2_Outline } from "@/components/atoms/icons/Essesional/Send2";
import Logo from "@/components/atoms/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/molcules/Accordion";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="container my-10 mb-12 mt-10 space-y-11 lg:mb-16 lg:space-y-20">
      <div className="flex gap-10 max-lg:flex-col lg:flex-row-reverse lg:items-start">
        <div className="relative aspect-[329/379] w-full max-w-[486px] rounded-2xl bg-primary-500 bg-pattern3 bg-[size:400px] bg-center bg-repeat lg:rounded-[32px]">
          <Image
            src="/about-us.png"
            alt=""
            fill
            className="object-contain object-center"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-tittle-1 font-medium text-black-400 lg:text-headline-2 lg:font-bold">
            سوالات متداول
          </h2>

          <p className="mt-6 text-body-3 font-normal leading-144 text-grey-400 lg:text-body-2 lg:leading-155">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطر آنچنان لازم است،
          </p>

          <Accordion
            type="single"
            collapsible
            className="mt-10 flex flex-col gap-6 lg:mt-16"
          >
            {Array.from({ length: 5 }, (_, idx) => (
              <AccordionItem
                value={idx.toString()}
                className="rounded-lg border border-grey-100 bg-white-100 lg:rounded-xl"
              >
                <AccordionTrigger className="p-3 text-body-3 font-medium text-black-400 lg:p-4 lg:text-body-2">
                  چطور میتونم نوبت آنلاین بگیرم؟
                </AccordionTrigger>

                <AccordionContent className="p-3 text-body-3 font-normal leading-155 lg:p-4 lg:text-body-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div>
        <h1 className="text-center text-tittle-1 font-bold text-black-400 lg:text-headline-1 lg:font-medium">
          ما را در شیکه ها اجتماعی دنبال کنید
        </h1>

        <div className="mx-auto mt-12 flex max-w-xl items-center justify-between">
          <IconButton asChild>
            <Link href="#" className="rounded-full max-lg:bg-primary-500">
              <Instagram_Outline className="size-8 text-white-100 lg:size-10 lg:text-primary-500" />
            </Link>
          </IconButton>

          <IconButton asChild>
            <Link href="#" className="rounded-full max-lg:bg-primary-500">
              <CallCalling_Outline className="size-8 text-white-100 lg:size-10 lg:text-primary-500" />
            </Link>
          </IconButton>

          <IconButton asChild>
            <Link href="#" className="rounded-full max-lg:bg-primary-500">
              <Send2_Outline className="size-8 text-white-100 lg:size-10 lg:text-primary-500" />
            </Link>
          </IconButton>

          <IconButton asChild>
            <Link href="#" className="rounded-full max-lg:bg-primary-500">
              <Youtube_Outline className="size-8 text-white-100 lg:size-10 lg:text-primary-500" />
            </Link>
          </IconButton>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 max-lg:grid-rows-3 lg:mt-12 lg:grid-cols-3 lg:gap-11">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-black-400 p-6">
            <Building4_Bold className="size-10 text-primary-500" />
            <p className="text-center text-body-3 font-medium text-black-400">
              نشانی : تهران _ میدان آرژانتین _ خیابان لاله _ کوچه صاد _ پلاک 18
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-2xl border border-black-400 p-6">
            <SMS_Bold className="size-10 text-primary-500" />
            <p className="text-center text-body-3 font-medium text-black-400">
              نشانی پست الکترونیک : smartix@yahoo.com
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-2xl border border-black-400 p-6">
            <CallCalling_Bold className="size-10 text-primary-500" />
            <p className="text-center text-body-3 font-medium text-black-400">
              تماس با پشتیبانی : ۱۲۳۴۵۶۷۸-۰۲۱ | ۱۲۳۴۵۶۷۸-۰۲۱
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-10 lg:space-y-16">
        <Logo
          variant="with-title-desc"
          className="mx-auto w-[255px] lg:w-[427px]"
        />

        <p className="text-center text-body-2 font-normal leading-155 text-grey-400 lg:text-body-1">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستونو سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          درشصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
          وشرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
    </div>
  );
}
