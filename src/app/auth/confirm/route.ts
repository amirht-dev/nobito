import { createClient } from "@/lib/supabase/server";
import type { EmailOtpType } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const GET: RouteHandler = async (request) => {
  const token_hash = request.nextUrl.searchParams.get("token_hash") as
    | string
    | null;
  const type = request.nextUrl.searchParams.get("type") as EmailOtpType;

  if (!token_hash || !type)
    return NextResponse.json(
      { error: "invalid token hash or type to confirm email otp" },
      { status: 400 },
    );

  const supabase = await createClient();

  const redirectTo =
    request.nextUrl.searchParams.get("redirectTo") ?? undefined;

  const res = await supabase.auth.verifyOtp({
    token_hash,
    type,
    options: {
      redirectTo,
    },
  });

  if (res.error)
    return NextResponse.json(
      { error: "failed to verify otp" },
      { status: 401 },
    );

  if (redirectTo) return NextResponse.redirect(redirectTo);

  return NextResponse.json({ data: res.data }, { status: 200 });
};
