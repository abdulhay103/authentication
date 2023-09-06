import { TokenCookie } from "@/app/utils/TokenCookie";
import { NextResponse } from "next/server";
import { headers } from "../../../../../next.config";

export async function POST(req, res) {
  const JSON = await req.json();
  let otp = JSON["otp"];
  // let email = JSON["email"];

  //
  // const resHeaders = headers();
  // const cookiesEmail = req.cookies.get("email");
  // let headerEmail = resHeaders.get("email");
  console.log(otp);

  if (otp === "123") {
    let tokenCookie = await TokenCookie(otp);
    return NextResponse.json(
      {
        status: true,
        msg: "Login Success",
      },
      { status: 200, headers: tokenCookie },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { status: false, msg: "Login Fail" },
      { status: 401 }
    );
  }
}

export async function GET(req, res) {
  req.cookies.delete("token");
  return NextResponse.json({ status: true, msg: "Logout Seccess" });
}
