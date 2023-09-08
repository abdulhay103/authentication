import { TokenCookie } from "@/app/utils/TokenCookie";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JSON = await req.json();
  let otp = JSON["otp"];

  if (otp === "123") {
    let tokenCookie = await TokenCookie(otp);
    return NextResponse.json(
      {
        status: true,
        msg: "Login Success",
      },
      { status: 201, headers: tokenCookie }
    );
  } else {
    return NextResponse.json(
      { status: false, msg: "Login Fail" },
      { status: 401 }
    );
  }
}
