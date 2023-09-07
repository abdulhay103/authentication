import { SendMailReq } from "@/app/utils/sendMailReq";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JSON = await req.json();
  let email = JSON["email"];
  console.log(email);
  SendMailReq(email);
  if (email) {
    return NextResponse.json(
      {
        status: true,
        msg: "Signup Success",
        email: email,
      },
      {
        status: 201,
        headers: {},
      }
    );
  } else {
    return NextResponse.json(
      {
        status: false,
        msg: "Signup Fail",
      },
      { status: 203 }
    );
  }
}

export async function GET(req, res) {
  req.cookies.delete("token");
  return NextResponse.json({
    status: true,
    msg: "Logout Success",
  });
}
