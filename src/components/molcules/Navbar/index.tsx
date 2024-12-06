import Button from "@/components/atoms/buttons/Button";
import IconButton from "@/components/atoms/buttons/IconButton";
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
import Link from "next/link";

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

function Buttons() {
  return (
    <div className="ms-auto flex items-center gap-3">
      <button className="lg:hidden">
        <SearchNormal_Outline className="size-6" fillPath="#292D32" />
      </button>
      <button className="lg:hidden">
        <Menu_Outline className="size-6" fillPath="#292D32" />
      </button>

      <IconButton className="max-lg:hidden">
        <Notification_Outline className="size-8 text-grey-500" />
      </IconButton>

      <Button className="max-lg:hidden" size="lg" asChild>
        <Link href="#">ورود/ثبت نام</Link>
      </Button>
    </div>
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
    <ul className="flex items-center gap-6 text-grey-500">
      <li title="instagram">
        <Link href="#">
          <Instagram_Outline />
        </Link>
      </li>
      <li title="twitter">
        <Link href="#">
          <Send2_Outline />
        </Link>
      </li>
      <li title="youtube">
        <Link href="#">
          <Youtube_Outline />
        </Link>
      </li>
      <li title="linkedin">
        <Link href="#">
          <Linkedin_Outline />
        </Link>
      </li>
    </ul>
  );
}

function Menu() {
  return (
    <ul className="flex items-center gap-6 text-tittle-2 font-medium text-grey-500">
      <li>
        <Link href="#">درباره ما</Link>
      </li>
      <li>
        <Link href="#">تماس با ما</Link>
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
