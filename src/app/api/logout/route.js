import { NextResponse } from "next/server";
export async function GET() {
  const response = NextResponse.next({
    headers: {
      cookie: request.headers.get("cookie"),
    },
  });

  response.cookies.delete("token");

  return response;
}
