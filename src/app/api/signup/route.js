import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JSON = await req.json();
  let email = JSON["email"];

  if (email) {
    return NextResponse.json(
      {
        status: true,
        msg: "Signup Success",
      },
      {
        status: 201,
        headers: {
          email: email,
        },
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
