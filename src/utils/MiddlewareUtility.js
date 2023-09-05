import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req, res) {
  try {
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token);
    const reqHeaders = new Headers(req.headers);
    reqHeaders.set(payload["email"]);
    return NextResponse.next({
      request: {
        headers: reqHeaders,
      },
    });
  } catch (e) {
    return NextResponse.next(new URL("/login", req.url));
  }
}
