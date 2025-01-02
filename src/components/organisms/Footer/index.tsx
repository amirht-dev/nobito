import Button from "@/components/atoms/buttons/Button";
import { ArrowCircleLeft_Outline } from "@/components/atoms/icons/Arrow/ArrowCircleLeft";
import { Building4_Bold } from "@/components/atoms/icons/Building/Building4";
import { CallCalling_Bold } from "@/components/atoms/icons/Call/CallCalling";
import { Linkedin_bold } from "@/components/atoms/icons/Crypto-Company/Linkedin";
import { Youtube_Bold } from "@/components/atoms/icons/Crypto-Company/Youtube";
import { SMS_Bold } from "@/components/atoms/icons/Emails-Messages/SMS";
import { Instagram_bold } from "@/components/atoms/icons/Essesional/Instagram";
import { Send2_Bold } from "@/components/atoms/icons/Essesional/Send2";
import Logo from "@/components/atoms/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/molcules/Accordion";
import Image from "next/image";
import Link from "next/link";
import { footerMenuItems } from "./index.constants";
import { Copyright_Outline } from "@/components/atoms/icons/Content-Edit/Copyright";

const Footer = () => {
  return (
    <footer className="bg-white-50 py-6 lg:py-12">
      <div className="container space-y-12">
        <div className="flex flex-col gap-6 max-lg:text-center lg:flex-row">
          <>
            <Logo variant="simple" className="mx-auto w-[104px] lg:hidden" />
            <Logo variant="with-title" className="w-[112px] max-lg:hidden" />
          </>

          <div className="flex-1 space-y-6">
            <h4 className="text-body-1 font-bold leading-155 text-[#494949]">
              تلاش ما دسترسی آسان تر شما به خدمات پزشکی است
            </h4>

            <p className="text-body-4 font-normal leading-155 text-grey-500 lg:text-body-2">
              با افتخار به شما پلتفرم نوبیتو را معرفی میکنیم. ما با افتخار به
              عنوان یک پلتفرم جامع ارائه دهنده خدمات پزشکی مثل نوبت‌دهی آنلاین،
              خدمات مشاوره حضوری و غیرحضوری و خدمات پزشکی در منزل را ارائه
              می‌دهیم. از اختصاص نوبت‌های پزشکی تا امکان مشاوره آنلاین و حضوری،
              همه چیز در اینجاست تا به شما یک تجربه درمانی راحت و بی دردسر ارائه
              دهیم.تمام تلاش و سعی ما بر این باور است که دغدغه های دسترسی و
              درمان را برای بیماران و همراهانشان کمتر کنیم،امیدواریم نوبیتو در
              روزهای ناخوش احوالی همراه و همیار شما باشد.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <AccordionMenu />
          <Menu />
          <Newsletter />
        </div>

        <div className="flex gap-11 max-lg:flex-col lg:justify-between">
          <Communication />
          <Certificates />
        </div>

        <div className="mt-12 flex max-lg:flex-col lg:flex-wrap lg:justify-between">
          <SocialMedias />

          <hr className="order-2 mt-6 border-grey-100 lg:order-1 lg:my-6 lg:flex-[0_0_100%]" />

          <div className="order-3 flex items-center gap-2 text-grey-500 max-lg:mt-6 lg:order-2">
            <Copyright_Outline className="size-6" />
            <p className="text-body-4 font-normal lg:text-body-2">
              تمامی حقوق این وبسایت متعلق به شرکت نوبیتو است
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function AccordionMenu() {
  return (
    <Accordion type="single" collapsible className="space-y-4 lg:hidden">
      {footerMenuItems.map(({ group, items }) => {
        const id = `menu-${group}`;
        return (
          <AccordionItem value={id} key={id} className="">
            <AccordionTrigger className="p-0 pb-4 text-tittle-2 font-medium text-black-400">
              {group}
            </AccordionTrigger>
            <AccordionContent asChild>
              <ul className="space-y-2 ps-2">
                {items.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="block text-tittle-3 font-normal text-grey-500 hover:underline"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

function Menu() {
  return (
    <div className="max-lg:hidden">
      <ul className="flex gap-16">
        {footerMenuItems.map(({ group, items }) => (
          <li className="space-y-8" key={group}>
            <h4 className="text-tittle-1 font-bold text-black-400">{group}</h4>
            <ul className="space-y-4">
              {items.map(({ href, title }, idx) => (
                <li key={idx}>
                  <Link
                    href={href}
                    className="text-tittle-2 font-normal text-grey-500"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Newsletter() {
  return (
    <div>
      <h4 className="text-tittle-2 font-bold text-black-400">خبرنامه</h4>
      <p className="mt-2 text-label-2 font-normal text-grey-500">
        برای اینکه از جدیدترین اخبار نوبیتو جا نمونید...
      </p>
      <form className="mt-4 flex flex-col">
        <div className="flex gap-4">
          <input
            type="email"
            className="w-[336px] flex-1 rounded-lg border border-grey-400 p-3 outline-[3px] outline-offset-1 outline-primary-500 focus:outline"
            placeholder="ایمیل خود را اینجا وارد کنید"
          />

          <Button
            rightIcon={<ArrowCircleLeft_Outline />}
            size="lg"
            className="max-lg:hidden"
          >
            ارسال
          </Button>
        </div>
        <p className="order-2 mt-4 text-label-2 font-normal text-grey-400 lg:order-3">
          تلاش ما ارائه بهترین خدمات ممکن به شما همراهان نوبیتو است.
        </p>
        <Button
          rightIcon={<ArrowCircleLeft_Outline />}
          size="md"
          className="order-3 mt-4 self-end lg:order-2 lg:hidden"
        >
          ارسال
        </Button>
      </form>
    </div>
  );
}

function Communication() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-2">
        <CallCalling_Bold className="size-6 text-primary-500" />
        <span className="text-balance text-body-3 font-normal text-black-400">
          تماس با پشتیبانی : <Link href="tel:02112345678">۱۲۳۴۵۶۷۸-۰۲۱</Link> |{" "}
          <Link href="tel:02112345678">۱۲۳۴۵۶۷۸-۰۲۱</Link>
        </span>
      </div>

      <div className="flex items-start gap-2">
        <SMS_Bold className="size-6 text-primary-500" />
        <span className="text-balance text-body-3 font-normal text-black-400">
          نشانی پست الکترونیک :{" "}
          <Link href="mailto:smartix@yahoo.com">smartix@yahoo.com</Link>
        </span>
      </div>

      <div className="flex items-start gap-2">
        <Building4_Bold className="size-6 text-primary-500" />
        <span className="text-body-3 font-normal text-black-400">
          نشانی : تهران _ میدان آرژانتین _ خیابان لاله _ کوچه صاد _ پلاک 18
        </span>
      </div>
    </div>
  );
}

function Certificates() {
  return (
    <div className="space-y-6 lg:max-w-min">
      <div className="flex gap-6">
        <div className="relative aspect-square flex-1 lg:size-20 lg:flex-initial">
          <Image
            src="/certificate/certificate.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative aspect-square flex-1 lg:size-20 lg:flex-initial">
          <Image
            src="/certificate/certificate-1.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative aspect-square flex-1 lg:size-20 lg:flex-initial">
          <Image
            src="/certificate/certificate-2.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative aspect-square flex-1 lg:size-20 lg:flex-initial">
          <Image
            src="/certificate/certificate-3.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      <p className="text-center text-body-3 font-normal text-grey-500">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
      </p>
    </div>
  );
}

function SocialMedias() {
  return (
    <ul className="order-1 flex justify-evenly gap-4 text-grey-500 lg:order-3">
      <li>
        <Link href="">
          <Linkedin_bold className="size-8" />
        </Link>
      </li>
      <li>
        <Link href="">
          <Instagram_bold className="size-8" />
        </Link>
      </li>
      <li>
        <Link href="">
          <Send2_Bold className="size-8" />
        </Link>
      </li>
      <li>
        <Link href="">
          <Youtube_Bold className="size-8" />
        </Link>
      </li>
    </ul>
  );
}
