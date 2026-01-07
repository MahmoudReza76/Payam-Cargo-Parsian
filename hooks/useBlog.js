import {useQuery} from "@tanstack/react-query";
import {useLocale} from "next-intl";

const fetchBlogs = async (locale, page = 1, limit = 6) => {
  console.log(
    `Fetching blogs for locale: ${locale}, page: ${page}, limit: ${limit}`
  );
  const res = await fetch(`/api/blogs?page=${page}&limit=${limit}`, {
    cache: "no-store",
    headers: {
      "Accept-Language": locale
    }
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "خطا در دریافت بلاگ‌ها");
  }
  return res.json();
};

const fetchBlogById = async (id, locale) => {
  console.log(`Fetching blog with id: ${id} for locale: ${locale}`);
  const res = await fetch(`/api/blog/${id}`, {
    cache: "no-store",
    headers: {
      "Accept-Language": locale
    }
  });
  if (!res.ok) {
    const errorData = await res.json();
    console.error("API error response:", errorData);
    throw new Error(errorData.message || "خطا در دریافت بلاگ");
  }
  return res.json();
};

export function useBlog(id = null, page = 1, limit = 6) {
  const locale = useLocale();
  console.log("useBlog called with id:", id, "page:", page, "limit:", limit);

  // دریافت همه بلاگ‌ها
  const blogsQuery = useQuery({
    queryKey: ["blogs", locale, page, limit],
    queryFn: () => fetchBlogs(locale, page, limit),
    enabled: !id
  });

  // دریافت بلاگ خاص با id
  const blogQuery = useQuery({
    queryKey: ["blog", id, locale],
    queryFn: () => fetchBlogById(id, locale),
    enabled: !!id && typeof id === "string"
  });

  return {
    blogs: blogsQuery.data?.blogs,
    total: blogsQuery.data?.total,
    page: blogsQuery.data?.page,
    limit: blogsQuery.data?.limit,
    totalPages: blogsQuery.data?.totalPages,
    isLoadingBlogs: blogsQuery.isLoading,
    errorBlogs: blogsQuery.error,
    blog: blogQuery.data,
    isLoadingBlog: blogQuery.isLoading,
    errorBlog: blogQuery.error
  };
}
