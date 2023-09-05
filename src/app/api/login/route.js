import { TokenCookie } from "@/app/utils/TokenCookie";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JSON = await req.json();
  let email = JSON["email"];
  let password = JSON["password"];

  if (email === "email@email.com" && password === "123") {
    let tokenCookie = await TokenCookie(email);
    return NextResponse.next(
      {
        status: true,
        msg: "Login Success",
      },
      { status: 200, headers: tokenCookie }
    );
  } else {
    return NextResponse.next({ status: false, msg: "Login Fail" });
  }
}

export async function GET(req, res) {
  cookies.delete("token");
  return NextResponse.next({ status: true, msg: "Logout Seccess" });
}
