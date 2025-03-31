import { auth } from "@/auth";

export default auth((req) => {
  const isLoggedIn = req.auth;
  console.log(isLoggedIn);
  console.log(req.nextUrl.pathname);
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
