import React from "react";
import {useLocale} from "next-intl";
import enLogo from "@/public/asset/en logo.png";
import faLogo from "@/public/asset/fa logo.png";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  const locale = useLocale();

  return (
    <div className="relative inline-flex flex-col items-center justify-center mt-2">
      <Link href={"/"}>
        {/* Logo Image */}
        <Image
          src={locale === "fa" ? faLogo : enLogo}
          alt="Payam Cargo Logo"
          width={120}
          height={80}
          className="mb-2"
        />
      </Link>
    </div>
  );
}

export default Logo;
