// components/LoadMoreButton.jsx
import React from "react";
import {motion} from "framer-motion";

export default function LoadMoreButton() {
  return (
    <div className="text-center mt-16">
      <motion.button
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
      >
        مشاهده مقالات بیشتر
      </motion.button>
    </div>
  );
}
