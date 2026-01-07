"use client";

import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {User, Calendar, Eye, ArrowRight} from "lucide-react";
import {useBlog} from "@/hooks/useBlog";
import {useLocale} from "next-intl";
import Link from "next/link";

export default function FeaturedCarousel() {
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const {blogs, isLoadingBlogs, errorBlogs} = useBlog(null, 1, 3);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % blogs.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [blogs]);

  if (isLoadingBlogs) {
    return (
      <div className="text-gray-600 text-center h-[500px]">
        در حال بارگذاری مقالات...
      </div>
    );
  }

  if (errorBlogs) {
    console.error("Error in FeaturedCarousel:", errorBlogs);
    return (
      <div className="text-red-600 text-center h-[500px]">
        خطا در بارگذاری مقالات: {errorBlogs.message}
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-gray-600 text-center h-[500px]">
        هیچ مقاله‌ای یافت نشد.
      </div>
    );
  }

  const featuredPosts = blogs.map((blog) => ({
    id: blog._id,
    title: blog.title || "بدون عنوان",
    excerpt: blog.description
      ? blog.description.replace(/(\*\*|__|\*|_|\+\+)/g, "").substring(0, 150) +
        "..."
      : "بدون توضیحات",
    author: "نویسنده ناشناس",
    date: new Date(blog.createdAt).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    readTime: "۱۰ دقیقه",
    category: "بلاگ",
    views: "۱,۰۰۰",
    image: blog.images && blog.images[0] ? blog.images[0] : "/placeholder.jpg"
  }));

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative mb-16 h-[500px] overflow-hidden rounded-3xl">
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {type: "spring", stiffness: 300, damping: 30},
            opacity: {duration: 0.2}
          }}
          className="absolute w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center p-12 relative"
            style={{
              backgroundImage: `url(${featuredPosts[currentSlide].image})`
            }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            <div className="relative z-10 h-full flex flex-col justify-between text-white">
              <div>
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm mb-6">
                  {featuredPosts[currentSlide].category}
                </span>
                <h2 className="text-4xl font-bold mb-6 max-w-3xl">
                  {featuredPosts[currentSlide].title}
                </h2>
                <p className="text-lg text-gray-100 mb-8 max-w-2xl">
                  {featuredPosts[currentSlide].excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>{featuredPosts[currentSlide].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{featuredPosts[currentSlide].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    <span>{featuredPosts[currentSlide].views} بازدید</span>
                  </div>
                </div>
                <Link
                  href={`/${locale}/blog/${featuredPosts[currentSlide].id}`}
                  className="bg-white text-gray-900 px-6 py-3 rounded-xl flex items-center gap-2 font-medium"
                  onClick={() =>
                    console.log(
                      `Navigating to: /${locale}/blog/${featuredPosts[currentSlide].id}`
                    )
                  }
                >
                  <motion.span
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                  >
                    مطالعه مقاله
                  </motion.span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
