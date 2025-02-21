import React from "react";
import BlogCard from "./blogCard";
import {useTranslations, useLocale} from "next-intl";

function Blog() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <div className="w-full px-8 flex flex-col gap-10 mt-32">
      <h1 className="text-2xl  font-semibold relative">
        {t("blogTitle")}
        <span
          className={`absolute -bottom-3 ${
            locale === "fa" || locale === "ar" ? "right-0" : "left-0"
          } left-0 w-96 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent`}
        ></span>
      </h1>
      <BlogCard />
    </div>
  );
}

export default Blog;
