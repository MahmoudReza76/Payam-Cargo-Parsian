import React from "react";
import CardFeatures from "./CardFeatures";
import {useTranslations, useLocale} from "next-intl";

function Features() {
  const t = useTranslations("features");
  const locale = useLocale();
  return (
    <div className="w-full sm:px-8 px-2 flex flex-col gap-10 md:mt-20 mt-32 ">
      <h1 className=" sm:text-2xl text-base font-semibold relative">
        {t("featuresTitle")}
        <span
          className={`absolute -bottom-3 ${
            locale === "fa" || locale === "ar" ? "right-0" : "left-0"
          } left-0 w-96 h-1 bg-[linear-gradient(to_right,_transparent_0%,_#2563EB_20%,_#1E3A8A_50%,_#2563EB_80%,_transparent_100%)]`}
        ></span>
      </h1>

      <CardFeatures />
    </div>
  );
}

export default Features;
