"use client";

import React, {useState} from "react";
import Header from "@/components/blog/Header";
import SearchBar from "@/components/blog/SearchBar";
import FeaturedCarousel from "@/components/blog/FeaturedCarousel";
import RecentPosts from "@/components/blog/RecentPosts";
import LoadMoreButton from "@/components/blog/LoadMoreButton";
import {useBlog} from "@/hooks/useBlog";

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const limit = 6;
  const {totalPages, isLoadingBlogs, errorBlogs} = useBlog(null, page, limit);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        <FeaturedCarousel />
        <Header />
        <SearchBar />
        <RecentPosts page={page} limit={limit} />
        {errorBlogs ? (
          <div className="text-red-600 text-center mt-8">
            خطا در بارگذاری مقالات: {errorBlogs.message}
          </div>
        ) : isLoadingBlogs ? (
          <div className="text-gray-600 text-center mt-8">
            در حال بارگذاری...
          </div>
        ) : (
          <LoadMoreButton
            page={page}
            totalPages={totalPages || 1}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
}
