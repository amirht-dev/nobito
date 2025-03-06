"use server";

import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

export type SignInData<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };

const credentialSchema = z
  .string({ required_error: "ایمیل الزامی است" })
  .email("ایمیل معتبر نیست");

export async function signInAction(
  _: unknown,
  formData: FormData,
): Promise<
  SignInData<{
    name: string;
  }>
> {
  const credential = credentialSchema.safeParse(formData.get("credential"));

  if (!credential.success)
    return { success: false, error: credential.error.errors[0].message };

  const supabase = await createClient();

  const res = await supabase.auth.signInWithOtp({
    email: credential.data,
  });

  return {
    success: true,
    data: {
      name: "user name",
    },
  };
}
