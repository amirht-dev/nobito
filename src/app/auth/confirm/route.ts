import { createClient } from "@/lib/supabase/server";
import { authLogger } from "@/services/winston";
import type { EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const logger = authLogger.child({
    at: "auth/confirm",
  });

  try {
    const token_hash = request.nextUrl.searchParams.get("token_hash");
    const type = request.nextUrl.searchParams.get("type") as EmailOtpType;
    const redirectTo = request.nextUrl.searchParams.get("redirectTo") ?? "/";

    if (!token_hash || !type) {
      return NextResponse.json(
        {
          error: "Missing required parameters",
          details: !token_hash ? "token_hash is required" : "type is required",
        },
        { status: 400 },
      );
    }

    const supabase = await createClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.verifyOtp({
      token_hash,
      type,
      options: {
        redirectTo: redirectTo ?? undefined,
      },
    });

    if (error) {
      const msg = "Failed to verify OTP";
      const details = error.message;

      logger.error(msg, {
        details,
      });

      return NextResponse.json(
        {
          error: msg,
          details,
        },
        { status: 401 },
      );
    }

    logger.info(`User with email ${user?.email} verified OTP`);

    if (redirectTo) {
      return NextResponse.redirect(redirectTo);
    }

    return NextResponse.json(
      {
        success: true,
        data: user,
      },
      { status: 200 },
    );
  } catch (error) {
    const errorMessage = "Internal server error";
    const errorDetails =
      error instanceof Error ? error.message : "Unknown error occurred";

    logger.error(errorMessage, {
      details: errorDetails,
    });

    return NextResponse.json(
      {
        error: errorMessage,
        details: errorDetails,
      },
      { status: 500 },
    );
  }
}
