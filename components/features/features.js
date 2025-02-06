import React from "react";
import CardFeatures from "./CardFeatures";
import {useTranslations, useLocale} from "next-intl";

function Features() {
  const t = useTranslations("features");
  const locale = useLocale();
  return (
    <div className="w-full px-8 flex flex-col gap-10 md:mt-20 mt-32 ">
      <h1 className=" text-2xl font-semibold relative">
        {t("featuresTitle")}
        <span
          className={`absolute -bottom-3 ${
            locale === "fa" || locale === "ar" ? "right-0" : "left-0"
          } left-0 w-96 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent`}
        ></span>
      </h1>

      <CardFeatures />
    </div>
  );
}

export default Features;
