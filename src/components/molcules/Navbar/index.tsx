import Button from "@/components/atoms/buttons/Button";
import IconButton from "@/components/atoms/buttons/IconButton";
import LogoutButton from "@/components/atoms/buttons/LogoutButton";
import { ChevronDown_Outline } from "@/components/atoms/icons/Arrow/ChevronDown";
import { Linkedin_Outline } from "@/components/atoms/icons/Crypto-Company/Linkedin";
import { Youtube_Outline } from "@/components/atoms/icons/Crypto-Company/Youtube";
import { Instagram_Outline } from "@/components/atoms/icons/Essesional/Instagram";
import { Menu_Outline } from "@/components/atoms/icons/Essesional/Menu";
import { Send2_Outline } from "@/components/atoms/icons/Essesional/Send2";
import { Location_Outline } from "@/components/atoms/icons/Location/Location";
import { Notification_Outline } from "@/components/atoms/icons/Notifications/Notification";
import { SearchNormal_Outline } from "@/components/atoms/icons/Search/SearchNormal";
import Logo from "@/components/atoms/Logo";
import NavLink from "@/components/atoms/NavLink";
import SearchSheetContent from "@/components/organisms/SearchSheetContent";
import { dashboardNavItems } from "@/constants/dashboard";
import { createClient } from "@/lib/supabase/server";
import { cn } from "@/utils/helpers";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger } from "../Dialog";
import LogoutDialogContent from "../LogoutDialogContent";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../Sheet";

const Navbar = () => {
  return (
    <header className="py-2 lg:pb-4 lg:pt-6">
      <div className="container flex items-center">
        <Logo variant="with-title-desc" className="w-[133px] lg:w-[180px]" />
        <NavLinks />
        <Buttons />
      </div>
      <hr className="mb-4 mt-6 border border-grey-200 max-lg:hidden" />
      <div className="container hidden items-center justify-between lg:flex">
        <SocialMedias />
        <Menu />
      </div>
    </header>
  );
};

export default Navbar;

async function Buttons() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="ms-auto flex items-center gap-3">
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <SearchNormal_Outline className="size-6" fillPath="#292D32" />
        </SheetTrigger>

        <SearchSheetContent />
      </Sheet>

      <MenuSheet />

      <IconButton className="max-lg:hidden">
        <Notification_Outline className="size-8 text-grey-500" />
      </IconButton>

      {user ? (
        <LogoutButton
          size="lg"
          formProps={{
            className: "max-lg:hidden",
          }}
          pendingMessage="در حال خروج"
        >
          خروج
        </LogoutButton>
      ) : (
        <Button className="max-lg:hidden" size="lg" asChild>
          <Link href="/auth/login">ورود/ثبت نام</Link>
        </Button>
      )}
    </div>
  );
}

async function MenuSheet() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu_Outline className="size-6" fillPath="#292D32" />
      </SheetTrigger>

      <SheetContent className="flex flex-col p-0" dir="rtl">
        <DialogTitle className="sr-only">menu sidebar</DialogTitle>

        <DialogHeader className="border-none p-4 pb-0">
          <Logo variant="with-title-desc" className="w-[156px]" />
        </DialogHeader>

        <hr className="mx-4 mb-6 mt-4 h-px border-grey-100" />

        <Accordion
          type="single"
          className="flex-1 overflow-y-auto px-4"
          collapsible
        >
          <MenuSheetList className="flex flex-col gap-6">
            <MenuSheetItem>
              <Link href="#">نوبت دهی مطب</Link>
            </MenuSheetItem>

            <AccordionItem value="menu-services" className="border-none">
              <AccordionTrigger className="p-0 text-tittle-2 font-normal text-grey-500">
                خدمات
              </AccordionTrigger>
              <AccordionContent className="mt-1">
                under development
              </AccordionContent>
            </AccordionItem>

            <MenuSheetItem>
              <Link href="#">مشاوره آنلاین</Link>
            </MenuSheetItem>

            <MenuSheetItem>
              <Link href="#">مجله سلامت</Link>
            </MenuSheetItem>

            <MenuSheetItem>
              <Link href="#" className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#F9E8E8" />
                  <circle cx="8" cy="8" r="4" fill="#C71A1A" />
                </svg>

                <span>نیکوکاری</span>
              </Link>
            </MenuSheetItem>

            <MenuSheetItem>
              <Link href="#">اعلان ها</Link>
            </MenuSheetItem>
          </MenuSheetList>

          <hr className="my-4 h-px border-grey-100" />

          <MenuSheetList className="flex flex-col gap-6">
            {user && (
              <AccordionItem value="menu-dashboard" className="border-none">
                <AccordionTrigger className="p-0 text-tittle-2 font-normal text-grey-500">
                  داشبورد
                </AccordionTrigger>
                <AccordionContent className="mt-1" asChild>
                  <ul className="mt-4 space-y-2 text-tittle-3">
                    {Object.values(dashboardNavItems).map((item) => (
                      <li key={item.label}>
                        <SheetClose asChild>
                          <NavLink
                            href={item.href}
                            className="text-grey-400 underline-offset-2 data-[state=active]:text-primary-500 data-[state=active]:underline"
                          >
                            {item.label}
                          </NavLink>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}
            <MenuSheetItem>
              <Link href="/about-us">درباره ما</Link>
            </MenuSheetItem>

            <MenuSheetItem>
              <Link href="/contact-us">تماس با ما</Link>
            </MenuSheetItem>

            <MenuSheetItem>
              <Link href="#">سوالات متداول</Link>
            </MenuSheetItem>

            {user && (
              <Dialog>
                <MenuSheetItem className="transition-colors hover:text-error-500">
                  <DialogTrigger>خروج از حساب</DialogTrigger>
                </MenuSheetItem>

                <LogoutDialogContent />
              </Dialog>
            )}
          </MenuSheetList>
        </Accordion>

        <SocialMedias />

        {!user && (
          <Button asChild>
            <Link href="/auth/login" className="text-center">
              ورود/ثبت نام
            </Link>
          </Button>
        )}
      </SheetContent>
    </Sheet>
  );
}

function MenuSheetList({
  className,
  ...props
}: ComponentPropsWithoutRef<"ul">) {
  return <ul {...props} className={cn("flex flex-col gap-6", className)} />;
}

function MenuSheetItem({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"li">) {
  return (
    <li
      {...props}
      className={cn("text-tittle-2 font-normal text-grey-500", className)}
    >
      <SheetClose asChild>{children}</SheetClose>
    </li>
  );
}

function NavLinks() {
  return (
    <nav className="ms-10 max-lg:hidden">
      <ul className="flex items-center gap-6 text-tittle-2 font-normal text-grey-500">
        <li>
          <Link href="#">نوبت دهی مطب</Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-2">
            <span>خدمات</span>
            <ChevronDown_Outline className="size-6" />
          </Link>
        </li>

        <li>
          <Link href="#">مشاوره آنلاین</Link>
        </li>
        <li>
          <Link href="#">مجله سلامت</Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-2">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8.5" r="8" fill="#F9E8E8" />
              <circle cx="8" cy="8.5" r="4" fill="#C71A1A" />
            </svg>
            <span>نیکوکاری</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function SocialMedias() {
  return (
    <ul className="flex px-4 text-grey-500 max-lg:mt-auto max-lg:justify-between lg:gap-6">
      <li title="instagram">
        <Link href="#">
          <Instagram_Outline className="size-8 lg:size-6" />
        </Link>
      </li>
      <li title="twitter">
        <Link href="#">
          <Send2_Outline className="size-8 lg:size-6" />
        </Link>
      </li>
      <li title="youtube">
        <Link href="#">
          <Youtube_Outline className="size-8 lg:size-6" />
        </Link>
      </li>
      <li title="linkedin">
        <Link href="#">
          <Linkedin_Outline className="size-8 lg:size-6" />
        </Link>
      </li>
    </ul>
  );
}

function Menu() {
  return (
    <ul className="flex items-center gap-6 text-tittle-2 font-medium text-grey-500">
      <li>
        <Link href="/about-us">درباره ما</Link>
      </li>
      <li>
        <Link href="/contact-us">تماس با ما</Link>
      </li>
      <li>
        <Link href="#">سوالات متداول</Link>
      </li>
      <li>
        <Link href="#" className="flex items-center gap-2">
          <Location_Outline className="size-4" />
          <span>+ انتخاب آدرس</span>
        </Link>
      </li>
    </ul>
  );
}
