import React from "react";
import BlogCard from "./blogCard";
import {useTranslations, useLocale} from "next-intl";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

function Blog() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <div className="w-full sm:px-8 px-2 flex flex-col gap-10 mt-32">
      <div className="flex flex-row justify-between">
        <h1 className="sm:text-2xl text-base font-semibold relative">
          {t("blogTitle")}
          <span
            className={`absolute -bottom-3 ${
              locale === "fa" || locale === "ar" ? "right-0" : "left-0"
            } w-96 h-1 bg-[linear-gradient(to_right,_transparent_0%,_#2563EB_20%,_#1E3A8A_50%,_#2563EB_80%,_transparent_100%)]`}
          ></span>
        </h1>
        <Link
          href="/blog"
          className="inline-flex items-center sm:text-lg text-sm font-semibold text-blue-500 hover:text-blue-700 transition-colors"
        >
          ادامه مطلب
          <ArrowLeft className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <BlogCard />
    </div>
  );
}

export default Blog;
