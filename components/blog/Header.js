import React from "react";
import {motion} from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      className="text-center flex flex-col justify-center gap-2 mb-9"
    >
      <h1 className="text-3xl font-black text-gray-900  tracking-tight">
        <span className="bg-clip-text text-transparent  bg-blue-600">
          آخرین مقالات تخصصی
        </span>
      </h1>
      <p className="text-lg font-semibold text-gray-500 max-w-2xl mx-auto">
        جدیدترین مقالات در حوزه برنامه‌نویسی، طراحی و تکنولوژی
      </p>
    </motion.div>
  );
}
