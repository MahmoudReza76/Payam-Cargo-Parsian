import React from "react";
import {Clock, Eye, Bookmark, Share2, ChevronRight} from "lucide-react";

const recentPosts = [
  {
    title: "راهنمای جامع حمل و نقل کارگو هوایی",
    excerpt:
      "آشنایی با مراحل ارسال، قوانین و مقررات، و نکات مهم در حمل و نقل کارگو هوایی...",
    category: "حمل و نقل هوایی",
    author: "علی محمدی",
    date: "۱۸ بهمن ۱۴۰۲",
    readTime: "۱۲ دقیقه",
    views: "۵,۴۳۲",
    isNew: true,
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    title: "محاسبه هزینه‌های کارگو بین‌المللی",
    excerpt:
      "بررسی فاکتورهای موثر در قیمت‌گذاری و نحوه محاسبه هزینه‌های حمل کارگو...",
    category: "هزینه و تعرفه",
    author: "مریم کریمی",
    date: "۱۷ بهمن ۱۴۰۲",
    readTime: "۸ دقیقه",
    views: "۴,۸۹۱",
    isNew: true,
    gradient: "from-purple-400 to-pink-500"
  },
  {
    title: "مدارک مورد نیاز برای ارسال کارگو",
    excerpt:
      "راهنمای کامل اسناد و مدارک ضروری برای ارسال کارگو به مقاصد مختلف...",
    category: "مستندات",
    author: "حسین رضایی",
    date: "۱۶ بهمن ۱۴۰۲",
    readTime: "۱۰ دقیقه",
    views: "۳,۷۶۵",
    isNew: false,
    gradient: "from-green-400 to-emerald-500"
  }
];

export default function RecentPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recentPosts.map((post, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <div
            className={`h-48 bg-gradient-to-r ${post.gradient} relative overflow-hidden transition-all duration-300`}
          >
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
              <button className="text-blue-600 flex items-center gap-1 hover:gap-2 transition-all group-hover:text-blue-700">
                <span>ادامه مطلب</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
