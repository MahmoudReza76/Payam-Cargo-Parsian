"use client";

import React from "react";
import {Clock, Eye, Bookmark, Share2, ChevronRight} from "lucide-react";
import {useBlog} from "@/hooks/useBlog";
import {useLocale} from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function RecentPosts({page = 1, limit = 6}) {
  const locale = useLocale();
  const {blogs, isLoadingBlogs, errorBlogs} = useBlog(null, page, limit);

  if (isLoadingBlogs) {
    return (
      <div className="text-gray-600 text-center">در حال بارگذاری مقالات...</div>
    );
  }

  if (errorBlogs) {
    console.error("Error in RecentPosts:", errorBlogs);
    return (
      <div className="text-red-600 text-center">
        خطا در بارگذاری مقالات: {errorBlogs.message}
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-gray-600 text-center">هیچ مقاله‌ای یافت نشد.</div>
    );
  }

  const posts = blogs.map((blog, index) => ({
    _id: blog._id,
    title: blog.title || "بدون عنوان",
    excerpt: blog.description
      ? blog.description.replace(/(\*\*|__|\*|_|\+\+)/g, "").substring(0, 100) +
        "..."
      : "بدون توضیحات",
    category: "بلاگ",
    author: "نویسنده ناشناس",
    date: new Date(blog.createdAt).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    readTime: "۱۰ دقیقه",
    views: "۱,۰۰۰",
    isNew: index === 0,
    image: blog.images && blog.images[0] ? blog.images[0] : "/placeholder.jpg"
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <div className="h-48 relative overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={192}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() =>
                console.error(`Failed to load image for blog: ${post.title}`)
              }
            />
            {post.isNew && (
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-sm">جدید</span>
              </div>
            )}
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-blue-600 text-sm font-medium">
                {post.category}
              </span>
              <div className="flex gap-3">
                <button className="text-gray-400 hover:text-gray-600">
                  <Bookmark className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-6 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Eye className="h-4 w-4" />
                  <span>{post.views}</span>
                </div>
              </div>
              <Link
                href={`/${locale}/blog/${post._id}`}
                className="text-blue-600 flex items-center gap-1 hover:gap-2 transition-all group-hover:text-blue-700"
                onClick={() =>
                  console.log(`Navigating to: /${locale}/blog/${post._id}`)
                }
              >
                <span>ادامه مطلب</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
