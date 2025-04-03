import NextAuth from "next-auth";
import authConfig from "@/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  console.log("Logged In:", isLoggedIn);
  console.log("url:", nextUrl.pathname);

  const isApiRoute = nextUrl.pathname.startsWith("/api");
  if (isApiRoute) {
    return;
  }

  // redirect not logged in user to login page
  if (!isLoggedIn && nextUrl.pathname !== "/signin") {
    return Response.redirect(new URL("/signin", nextUrl));
  }

  if (nextUrl.pathname === "/signin" && isLoggedIn) {
    return Response.redirect(new URL("/", nextUrl));
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
