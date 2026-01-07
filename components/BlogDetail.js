"use client";

import React from "react";
import Image from "next/image";
import {Calendar} from "lucide-react";
import ReactMarkdown from "react-markdown";
import {useLocale} from "next-intl";
import {useBlog} from "@/hooks/useBlog";

export default function BlogDetail({id}) {
  const locale = useLocale();
  const blogContent = useBlog();

  const blog = blogContent?.blogs?.find((blog) => blog?._id === id);

  if (!blog) {
    return (
      <div className="text-red-600 text-center">
        بلاگ یافت نشد. لطفاً مطمئن شوید که بلاگ با این ID وجود دارد.
      </div>
    );
  }

  return (
    <div className="w-full sm:px-8 px-2 py-10">
      <h1 className="text-3xl font-bold mb-4">{blog?.title || "بدون عنوان"}</h1>
      <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(blog?.createdAt).toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </div>
      </div>
      {blog?.images && blog?.images[0] ? (
        <Image
          src={blog?.images[0]}
          alt={blog?.title || "بدون عنوان"}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      ) : (
        <div className="text-gray-600 text-center mb-4">بدون تصویر</div>
      )}
      <div className="markdown-body">
        <ReactMarkdown>{blog?.description || "بدون توضیحات"}</ReactMarkdown>
      </div>
    </div>
  );
}
