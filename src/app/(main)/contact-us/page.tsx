import { ResponsiveButton } from "@/components/atoms/buttons/Button";
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
import { Field, FieldLabel, Input, Textarea } from "@/components/atoms/Input";
import Image from "next/image";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <div className="container mb-12 mt-10 space-y-11 lg:mb-16 lg:space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_505px] lg:grid-rows-[auto_auto_1fr]">
        <h2 className="self-start text-tittle-1 font-bold leading-155 text-black-400 max-lg:order-1 max-lg:text-center lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:text-headline-2">
          اگر انتقادو پیشنهادی دارید میتونید با ما درمیون بزارید
        </h2>

        <p className="mt-6 self-start text-body-3 font-normal leading-144 text-grey-500 max-lg:order-2 max-lg:text-center lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 lg:text-body-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان لازم است،
        </p>

        <div className="relative mx-4 aspect-[505/689] rounded-2xl bg-primary-500 bg-pattern3 bg-[length:400px] bg-center bg-repeat max-lg:order-3 max-lg:mt-10 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4 lg:ms-8 lg:rounded-[32px]">
          <Image
            src="/contact-us.png"
            fill
            className="object-contain object-center"
            alt=""
          />
        </div>

        <form className="z-10 -mt-10 self-start rounded-2xl bg-white-100 px-4 py-8 shadow max-lg:order-4 max-lg:space-y-4 lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 lg:me-10 lg:mt-12 lg:grid lg:w-[110%] lg:grid-cols-2 lg:gap-6 lg:rounded-3xl lg:p-6">
          <Field id="name">
            <FieldLabel>نام</FieldLabel>
            <Input fullWidth />
          </Field>

          <Field id="fname">
            <FieldLabel>نام خانوادگی</FieldLabel>
            <Input fullWidth />
          </Field>

          <Field id="email">
            <FieldLabel>ایمیل</FieldLabel>
            <Input fullWidth />
          </Field>

          <Field id="phone-number">
            <FieldLabel>شماره تلفن</FieldLabel>
            <Input fullWidth />
          </Field>

          <Field id="description" className="col-span-2">
            <FieldLabel>توضیحات</FieldLabel>
            <Textarea className="resize-none" rows={5} />
          </Field>

          <div className="col-span-1 flex gap-4 max-lg:flex-col lg:col-span-2 lg:items-center lg:justify-between">
            <p className="text-body-3 font-normal leading-155 text-grey-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
            </p>

            <ResponsiveButton
              size={{ DEFAULT: "md", lg: "lg" }}
              className="lg:px-8"
            >
              ارسال پیغام
            </ResponsiveButton>
          </div>
        </form>
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
    </div>
  );
}
