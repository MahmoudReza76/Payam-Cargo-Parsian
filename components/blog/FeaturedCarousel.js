import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {User, Calendar, Eye, ArrowRight} from "lucide-react";

const featuredPosts = [
  {
    id: 1,
    title: "تحول در صنعت حمل و نقل با ورود کارگوهای هوشمند",
    excerpt:
      "بررسی تکنولوژی‌های نوین در صنعت کارگو و حمل و نقل هوشمند: از ردیابی لحظه‌ای محموله‌ها تا بهینه‌سازی مسیرهای حمل و نقل با هوش مصنوعی...",
    author: "محمد امینی",
    date: "۲۳ بهمن ۱۴۰۲",
    readTime: "۸ دقیقه",
    category: "تکنولوژی کارگو",
    views: "۹,۴۵۶",
    gradient: "from-purple-600 to-blue-500"
  },
  {
    id: 2,
    title: "راهنمای جامع قوانین گمرکی برای صادرکنندگان",
    excerpt:
      "آشنایی با آخرین قوانین و مقررات گمرکی برای صادرات کالا، نحوه اخذ مجوزها و مراحل ترخیص کارگو از گمرک به زبان ساده",
    author: "سارا حسینی",
    date: "۲۱ بهمن ۱۴۰۲",
    readTime: "۱۰ دقیقه",
    category: "قوانین گمرکی",
    views: "۸,۸۷۲",
    gradient: "from-pink-500 to-orange-400"
  },
  {
    id: 3,
    title: "بهترین مسیرهای حمل کارگو هوایی در سال ۲۰۲۴",
    excerpt:
      "مقایسه مسیرهای مختلف حمل کارگو هوایی از نظر هزینه، زمان و امنیت. راهنمای انتخاب بهترین مسیر برای محموله‌های تجاری شما.",
    author: "رضا کریمی",
    date: "۱۹ بهمن ۱۴۰۲",
    readTime: "۱۲ دقیقه",
    category: "حمل و نقل هوایی",
    views: "۱۱,۲۳۰",
    gradient: "from-green-500 to-teal-400"
  }
];

export default function FeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative mb-16 h-[500px] overflow-hidden rounded-3xl">
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {type: "spring", stiffness: 300, damping: 30},
            opacity: {duration: 0.2}
          }}
          className="absolute w-full h-full"
        >
          <div
            className={`w-full h-full bg-gradient-to-r ${featuredPosts[currentSlide].gradient} p-12 relative`}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
            <div className="relative z-10 h-full flex flex-col justify-between text-white">
              <div>
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm mb-6">
                  {featuredPosts[currentSlide].category}
                </span>
                <h2 className="text-4xl font-bold mb-6 max-w-3xl">
                  {featuredPosts[currentSlide].title}
                </h2>
                <p className="text-lg text-gray-100 mb-8 max-w-2xl">
                  {featuredPosts[currentSlide].excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>{featuredPosts[currentSlide].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{featuredPosts[currentSlide].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    <span>{featuredPosts[currentSlide].views} بازدید</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="bg-white text-gray-900 px-6 py-3 rounded-xl flex items-center gap-2 font-medium"
                >
                  مطالعه مقاله
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
