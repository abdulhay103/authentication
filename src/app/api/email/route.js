import { NextResponse } from "next/server";

export async function GET(req, res) {
  // const JSON = await req.json();
  // let email = JSON["email"];
  let ab = "abd";
  return NextResponse.json({
    msg: ab,
  });
}
