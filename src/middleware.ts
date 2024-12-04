import createMiddleware from "next-intl/middleware";
import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["ar", "en"],
  defaultLocale: "ar",
});

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/uploadthing",
    "/(ar|en)/sign-in",
    "/sitemap-ar.xml",
    "/sitemap-en.xml",
  ],

  async beforeAuth(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith("/api/")) {
      return NextResponse.next();
    }

    if (
      req.nextUrl.pathname === "/sitemap-ar.xml" ||
      req.nextUrl.pathname === "/sitemap-en.xml"
    ) {
      return NextResponse.next();
    }
  },

  async afterAuth(auth, req: NextRequest) {
    const url = req.nextUrl;

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-pathname", req.nextUrl.pathname);

    const locale = url.pathname.split("/")[1];

    if (req.nextUrl.pathname.startsWith("/api/")) {
      return NextResponse.next();
    }

    const isAdminDashboard = url.pathname.startsWith(
      `/${locale}/admin-dashboard`
    );

    if (!auth.userId && isAdminDashboard) {
      const signInUrl = new URL(`/${locale}/sign-in`, req.url);
      return NextResponse.redirect(signInUrl);
    }

    //if (auth.userId) {
     // if (isAdminDashboard && auth?.sessionClaims?.metadata?.role !== "admin") {
    ////    const homeUrl = new URL(`/${locale}/`, req.url);
      //  return NextResponse.redirect(homeUrl);
    //  }
   // }

    return intlMiddleware(req);
  },
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/(ar|en)/:path*",
  ],
};
