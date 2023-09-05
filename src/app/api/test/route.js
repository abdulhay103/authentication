import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  let user = "abdulhay.me@gmail.com";
  let userId = "1234";

  if (user === "abdulhay.me@gmail.com" && userId === "1234") {
    const payload = { user: user };
    const key = new TextEncoder().encode("123-ABC");

    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setIssuer("http://localhost:3000")
      .setExpirationTime("2h")
      .sign(key);
    return NextResponse.json(
      { JWT_Token: token },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      { status: "Fail", massage: "Invalid User" },
      { status: 401 }
    );
  }
}
