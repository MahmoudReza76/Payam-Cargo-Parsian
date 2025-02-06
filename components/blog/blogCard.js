import React from "react";
import {ArrowRight, Clock, Calendar} from "lucide-react";
import Image from "next/image";
function BlogCard() {
  const blogs = [
    {
      id: 1,
      title: "Modern Logistics Solutions",
      excerpt:
        "Exploring innovative approaches to modern logistics and supply chain management...",
      date: "Feb 15, 2024",
      readTime: "5 min",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23E2E8F0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%2564748B'%3ELogistics Image%3C/text%3E%3C/svg%3E"
    },
    {
      id: 2,
      title: "International Shipping Guide",
      excerpt:
        "A comprehensive guide to understanding international shipping procedures...",
      date: "Feb 12, 2024",
      readTime: "4 min",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23E2E8F0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%2564748B'%3EShipping Image%3C/text%3E%3C/svg%3E"
    },
    {
      id: 3,
      title: "Supply Chain Optimization",
      excerpt:
        "Key strategies for optimizing your supply chain efficiency and performance...",
      date: "Feb 10, 2024",
      readTime: "6 min",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23E2E8F0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%2564748B'%3ESupply Chain Image%3C/text%3E%3C/svg%3E"
    },
    {
      id: 4,
      title: "Digital Freight Solutions",
      excerpt:
        "How digital transformation is reshaping the freight industry...",
      date: "Feb 8, 2024",
      readTime: "5 min",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23E2E8F0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%2564748B'%3EDigital Image%3C/text%3E%3C/svg%3E"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row h-full">
            {/* Image Section */}
            <div className="sm:w-2/5 relative overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={400}
                className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="sm:w-3/5 p-4 flex flex-col">
              <div className="flex items-center text-sm text-gray-500 mb-2 gap-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {blog.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {blog.readTime}
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {blog.excerpt}
              </p>

              <div className="mt-auto">
                <button className="inline-flex items-center text-sm text-blue-500 hover:text-blue-700 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogCard;
