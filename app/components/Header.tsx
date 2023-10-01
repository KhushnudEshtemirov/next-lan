"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

const Header = () => {
  const t = useTranslations("header");
  const pathname = usePathname();

  const languages = [
    { name: "Uz", code: "uz" },
    { name: "En", code: "en" },
    { name: "Ru", code: "ru" },
  ];

  return (
    <div className="bg-gray-300 p-5">
      <ul className="flex gap-10">
        <li>
          <Link href="/">{t("home")}</Link>
        </li>
        <li>
          <Link href="/blogs">{t("blogs")}</Link>
        </li>
        <li>
          <Link href="/">{t("signIn")}</Link>
        </li>
        {languages.map((language) => (
          <li key={language.code}>
            <Link href={pathname} locale={language.code}>
              {language.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
