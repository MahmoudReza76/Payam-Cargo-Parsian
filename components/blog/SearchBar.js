import React, {useState} from "react";
import {motion} from "framer-motion";
import {Search} from "lucide-react";

export default function SearchBar() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <motion.div
      className={`max-w-3xl mx-auto mb-16 transition-all duration-300 ${
        searchFocused ? "scale-105" : ""
      }`}
    >
      <div className="relative">
        <input
          type="text"
          placeholder="جستجو در بین مقالات..."
          className="w-full px-8 py-5 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg shadow-lg bg-white/80 backdrop-blur-sm"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
      </div>
    </motion.div>
  );
}
