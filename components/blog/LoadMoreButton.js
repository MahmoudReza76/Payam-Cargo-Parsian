"use client";

import React from "react";
import {motion} from "framer-motion";

export default function LoadMoreButton({page, totalPages, setPage}) {
  if (page >= totalPages) {
    return null;
  }

  return (
    <div className="text-center mt-16">
      <motion.button
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        onClick={() => setPage(page + 1)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
      >
        مشاهده مقالات بیشتر
      </motion.button>
    </div>
  );
}
