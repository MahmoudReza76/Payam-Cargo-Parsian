"use client";

import BlogDetail from "@/components/BlogDetail";
import {useParams} from "next/navigation";
export default function BlogPost() {
  const params = useParams();
  console.log("params", params);
  const {id} = params;

  if (!id) {
    return (
      <div className="text-center text-red-600">
        خطا: ID بلاگ ارائه نشده است. لطفاً مسیر URL را بررسی کنید.
      </div>
    );
  }

  return <BlogDetail id={id} />;
}
