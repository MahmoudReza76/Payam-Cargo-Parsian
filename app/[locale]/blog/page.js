// pages/BlogPage.jsx
"use client";
import React from "react";
import Header from "@/components/blog/Header";
import SearchBar from "@/components/blog/SearchBar";
import FeaturedCarousel from "@/components/blog/FeaturedCarousel";
import RecentPosts from "@/components/blog/RecentPosts";
import LoadMoreButton from "@/components/blog/LoadMoreButton";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        <FeaturedCarousel />
        <Header />
        <SearchBar />
        <RecentPosts />
        <LoadMoreButton />
      </div>
    </div>
  );
}
