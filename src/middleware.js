import { CheckCookieAuth } from "./utils/MiddlewareUtility";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("dashboardMiddleware");
    return CheckCookieAuth(req);
  }
}
