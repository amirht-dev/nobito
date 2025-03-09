"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { authLogger } from "../winston";

type SignInData =
  | {
      success: true;
      data: null;
    }
  | {
      success: false;
      error: string;
    };

export async function signInAction(
  redirectTo: string | null,
  prevState: unknown,
  formData: FormData,
): Promise<SignInData> {
  const credential = z
    .string({ required_error: "ایمیل الزامی است" })
    .email("ایمیل معتبر نیست")
    .safeParse(formData.get("credential"));

  if (!credential.success)
    return { success: false, error: credential.error.errors[0].message };

  const supabase = await createClient();

  const res = await supabase.auth.signInWithOtp({
    email: credential.data,
    options: {
      emailRedirectTo: redirectTo ?? undefined,
    },
  });

  const logger = authLogger.child({
    at: "signinAction",
  });

  if (res.error) {
    logger.error(`User with email ${credential.data} failed to sign in`, {
      details: res.error.message,
    });

    return {
      success: false,
      error: res.error.message,
    };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("signinAction", user);

  logger.info(
    `${user?.email_confirmed_at ? "Magic Link" : "Confirmation"} send to ${credential.data}`,
  );

  return {
    success: true,
    data: null,
  };
}

export async function logoutAction(redirectPath?: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase.auth.signOut();

  const logger = authLogger.child({
    at: "logoutAction",
  });

  if (error) {
    logger.error(`User with email ${user?.email} failed to logout`, {
      details: error.message,
    });
  }

  revalidatePath("*");

  logger.info(`User with email ${user?.email} logged out`);

  if (redirectPath) {
    return redirect(redirectPath);
  }

  return redirect("/");
}
