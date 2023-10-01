import createIntlMiddleware from "next-intl/middleware";

export default createIntlMiddleware({
  locales: ["uz", "en", "ru"],
  defaultLocale: "uz",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
