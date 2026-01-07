"use client";

import React from "react";
import {ArrowLeft, Calendar} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {useLocale} from "next-intl";
import {useBlog} from "@/hooks/useBlog";

function BlogCard() {
  const locale = useLocale();
  const {blogs, isLoadingBlogs, errorBlogs} = useBlog();

  if (isLoadingBlogs) {
    return (
      <div className="text-gray-600 text-center">
        در حال بارگذاری بلاگ‌ها...
      </div>
    );
  }

  if (errorBlogs) {
    return (
      <div className="text-red-600 text-center">
        خطا: {errorBlogs.message}
        <br />
        لطفاً کنسول مرورگر یا سرور را برای جزئیات بررسی کنید.
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-gray-600 text-center">
        هیچ بلاگی یافت نشد. لطفاً مطمئن شوید که بلاگ‌های منتشرشده در دیتابیس
        وجود دارند.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row h-full">
            {/* بخش تصویر */}
            <div className="sm:w-2/5 relative overflow-hidden">
              <Image
                src={blog.images[0] || "/placeholder.jpg"}
                alt={blog.title || "بدون عنوان"}
                width={400}
                height={400}
                className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={() =>
                  console.error(`Failed to load image for blog: ${blog.title}`)
                }
              />
            </div>

            {/* بخش محتوا */}
            <div className="sm:w-3/5 p-4 flex flex-col">
              <div className="flex items-center text-sm text-gray-500 mb-2 gap-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(blog.createdAt).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                {blog.title || "بدون عنوان"}
              </h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {blog.description || "بدون توضیحات"}
              </p>

              <div className="mt-auto">
                <Link
                  href={`/${locale}/blog/${blog._id}`}
                  className="inline-flex items-center text-sm text-blue-500 hover:text-blue-700 transition-colors"
                >
                  مطالعه بیشتر
                  <ArrowLeft className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogCard;
