import { SignJWT, jwtVerify } from "jose";

// JWT Token create
export async function CreateToken() {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let token = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPAIRATION)
    .sign(secret);
}

// JWT Token Verify
export async function VerifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let verifiedToken = await jwtVerify(token, secret);
  return verifiedToken["payload"];
}
