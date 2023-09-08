import { CreateToken } from "./JWTHelper";

export async function TokenCookie(email) {
  let token = await CreateToken(email);
  return {
    // "Set-Cookie": `token=${token}; Path=/; Max-Age=7200; Secure; HttpOnly; SameSite=Strict`,
    "Set-Cookie": `token=${token}; Path=/`,
  };
}
