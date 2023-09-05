import { CheckCookieAuth } from "./app/utils/MiddlewareUtility";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await CheckCookieAuth(req);
  }
}
