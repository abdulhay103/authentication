import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req) {
  try {
    // let token = req.cookies.get("token")["value"];
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token);
    const reqHeaders = new Headers(req.headers);
    reqHeaders.set("email", payload["email"]);
    return NextResponse.next({
      request: {
        headers: reqHeaders,
      },
    });
  } catch (e) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
