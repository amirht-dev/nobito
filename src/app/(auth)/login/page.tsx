"use client";

import Button from "@/components/atoms/buttons/Button";
import { Input } from "@/components/atoms/Input";
import Logo from "@/components/atoms/Logo";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [value, setValue] = useState("");

  return (
    <main className="relative flex min-h-dvh items-center justify-center">
      <div className="absolute inset-x-0 top-1/2 h-[200px] -translate-y-1/2 bg-repeat bg-pattern-mobile lg:h-[242px] lg:bg-pattern-desktop" />

      <div className="relative mx-4 flex w-full max-w-md flex-col rounded-xl border border-grey-100 bg-white-100 px-4 py-6 lg:rounded-3xl">
        <Logo className="w-[112px] self-center lg:w-[144px]" variant="simple" />
        <h1 className="mt-6 text-center text-tittle-1 font-medium leading-155 text-black-400 lg:text-headline-1">
          ورود/ثبت نام
        </h1>
        <p className="mb-12 mt-3 text-center text-tittle-3 font-normal text-grey-500 lg:text-tittle-1">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </p>

        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          fullWidth
        />
        <p className="mt-2 text-label-2 font-normal text-primary-500 lg:text-tittle-3">
          لطفا این قسمت را خالی نگذارید
        </p>

        <Button size="lg" className="mt-6">
          ورود
        </Button>

        <p className="mt-6 text-center text-label-2 font-normal text-grey-500 lg:text-tittle-3">
          ورود شما به معنای پذیرش شرایط و{" "}
          <Link href="#" className="text-primary-500">
            قوانین نوبیتو
          </Link>{" "}
          <Link href="#" className="text-primary-500">
            و حریم خصوصی
          </Link>{" "}
          است
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
