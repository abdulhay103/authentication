export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/login")) {
    console.log("Middleware from Login page");
  } else if (req.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("Middleware from Dashboard");
  }
}
