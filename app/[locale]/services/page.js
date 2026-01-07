"use client";
import React, {useRef, useEffect} from "react";
import {
  Plane,
  Truck,
  Train,
  Ship,
  CheckCircle,
  MapPin,
  Users,
  Award,
  Target,
  Globe,
  Star,
  Clock
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView
} from "framer-motion";

export default function TransportLandingPage() {
  // Refs for scroll-triggered animations
  const heroRef = useRef(null);
  const advantagesRef = useRef(null);
  const solutionsRef = useRef(null);
  const processRef = useRef(null);
  const servicesRef = useRef(null);
  const modesRef = useRef(null);

  // Scroll progress for parallax effects
  const {scrollY} = useScroll();

  // Parallax transformations
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const dotsBgY = useTransform(scrollY, [0, 500], [0, -50]);

  // Animation controls for scroll-triggered sections
  const advantagesControls = useAnimation();
  const solutionsControls = useAnimation();
  const processControls = useAnimation();
  const servicesControls = useAnimation();
  const modesControls = useAnimation();

  // Check if sections are in view
  const advantagesInView = useInView(advantagesRef, {once: false, amount: 0.3});
  const solutionsInView = useInView(solutionsRef, {once: false, amount: 0.3});
  const processInView = useInView(processRef, {once: false, amount: 0.3});
  const servicesInView = useInView(servicesRef, {once: false, amount: 0.3});
  const modesInView = useInView(modesRef, {once: false, amount: 0.3});

  // Trigger animations when sections come into view
  useEffect(() => {
    if (advantagesInView) advantagesControls.start("visible");
    if (solutionsInView) solutionsControls.start("visible");
    if (processInView) processControls.start("visible");
    if (servicesInView) servicesControls.start("visible");
    if (modesInView) modesControls.start("visible");
  }, [
    advantagesInView,
    solutionsInView,
    processInView,
    servicesInView,
    modesInView
  ]);

  // Variants for animations
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.6, ease: "easeOut"}
    }
  };

  const cardVariants = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.7, ease: "easeOut"}
    }
  };

  const competitiveAdvantages = [
    {
      title: "تنوع بینظیر",
      description:
        "ما تنها شرکتی هستیم که تمام شیوه های حمل و نقل را به صورت ترکیبی ارائه می‌دهیم و شما را از سر و کله زدن با چند شرکت مختلف بی‌نیاز می‌کنیم.",
      icon: Users
    },
    {
      title: "پوشش گسترده",
      description:
        "از مبدأ ایران به کلیه کشورهای دنیا و بالعکس، بار شما را با بهترین و بهینه‌ترین روش ارسال می‌کنیم.",
      icon: MapPin
    },
    {
      title: "تجهیزات مدرن و قدرتمند",
      description:
        "با ناوگان 200 تریلی، 600 واگن و کشتی‌های با ظرفیت بالا، هیچ باری برای ما بزرگ نیست!",
      icon: Truck
    },
    {
      title: "تجربه و تخصص",
      description:
        "سال‌ها تجربه در صنعت حمل و نقل، تضمین‌کننده آرامش خاطر شماست.",
      icon: Award
    }
  ];

  const customerSolutions = [
    {
      title: "سرعت",
      description:
        "اگر زمان برایتان حیاتی است، حمل و نقل هوایی ما با هواپیمای باری سریع‌ترین راه برای رسیدن بار شما به مقصد است.",
      icon: Plane
    },
    {
      title: "هزینه",
      description:
        "برای بارهای حجیم و کم‌ارزش، حمل و نقل ریلی یا دریایی می‌تواند به شکل چشمگیری هزینه‌های شما را کاهش دهد.",
      icon: Train
    },
    {
      title: "حجم و نوع بار",
      description:
        "تریلی‌ها و واگن‌های ما آماده حمل بارهای یخچالی، سنگین و خاص هستند.",
      icon: Truck
    },
    {
      title: "امنیت",
      description:
        "با سیستم‌های ردیابی پیشرفته و بیمه کامل، امنیت بار شما در تمام طول مسیر تضمین شده است.",
      icon: CheckCircle
    }
  ];

  const processSteps = [
    "مشاوره تخصصی: نمایندگان ما آماده‌اند تا بهترین و اقتصادی‌ترین مسیر و روش حمل و نقل را پیشنهاد دهند.",
    "استعلام قیمت آسان: با یک تماس یا تکمیل فرم آنلاین، به سرعت استعلام قیمت دریافت کنید.",
    "عقد قرارداد منعطف: قراردادها با توجه به نیازهای خاص شما قابل تنظیم و منعطف هستند."
  ];

  const valueAddedServices = [
    "خدمات گمرکی: پشتیبانی در تمامی مراحل ترخیص گمرکی.",
    "بسته‌بندی و انبارداری: خدمات بسته‌بندی و انبارداری موقت بار.",
    "ردیابی آنلاین: مشاهده موقعیت دقیق بار در هر لحظه."
  ];

  const transportModes = [
    {
      title: "زمینی",
      description:
        "200 تریلی، انواع بار قابل حمل، سرعت در مسافت‌های کوتاه و دسترسی به نقاط دورافتاده.",
      icon: Truck
    },
    {
      title: "ریلی",
      description: "600 واگن، حجم بالا، هزینه کم و سازگار با محیط زیست.",
      icon: Train
    },
    {
      title: "دریایی",
      description:
        "انواع کشتی‌ها با ظرفیت 250 تا 500000 تن، بنادر بندرعباس و انزلی، حجم بسیار بالا و هزینه کم برای مسیرهای طولانی.",
      icon: Ship
    },
    {
      title: "هوایی",
      description:
        "هواپیمای باری و مسافری، سرعت بینظیر برای بارهای حساس به زمان و ارزش بالا.",
      icon: Plane
    }
  ];

  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen">
      {/* Hero Section with Parallax */}
      <section
        className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden"
        ref={heroRef}
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "15px 15px",
            y: dotsBgY
          }}
        />

        <motion.div
          style={{y: heroY, opacity: heroOpacity}}
          className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center gap-8 relative z-10 text-center min-h-screen justify-center"
        >
          <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 0.6}}
            className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-2"
          >
            <Globe className="w-4 h-4" />
            حمل و نقل بین‌المللی پیام بار
          </motion.div>

          <motion.h1
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.4, duration: 0.8}}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            حمل و نقل بین‌المللی
            <motion.span
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.6, duration: 0.6}}
              className="block text-blue-300 mt-2"
            >
              حرفه‌ای
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.8, duration: 0.8}}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            راهکارهای جامع، سریع و امن برای جابجایی بار شما از ایران به سراسر
            جهان.
          </motion.p>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1, duration: 0.6}}
            className="flex flex-wrap gap-4 mt-8"
          >
            <motion.button
              className="bg-white text-blue-900 px-8 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.98}}
            >
              دریافت مشاوره
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-blue-900 transition-colors"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.98}}
            >
              مشاهده خدمات
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating particles for hero background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-20"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.1, 0.2]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </section>

      {/* Competitive Advantages */}
      <motion.section
        ref={advantagesRef}
        className="py-20 bg-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={advantagesControls}
      >
        {/* Parallax background elements */}
        <motion.div
          className="absolute right-0 top-0 w-64 h-64 rounded-full bg-blue-100 opacity-50"
          style={{
            filter: "blur(80px)",
            y: useTransform(scrollY, [300, 800], [0, 100])
          }}
        />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            >
              مزایای رقابتی
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto mb-6"
              initial={{width: 0}}
              whileInView={{width: 96}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            />
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 0.2}}
              viewport={{once: false, amount: 0.8}}
            >
              مزایای منحصر به فرد ما که شما را از سایر شرکت‌های حمل و نقل متمایز
              می‌کند
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.2}}
          >
            {competitiveAdvantages.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 group border border-gray-100"
                variants={cardVariants}
                whileHover={{y: -10, scale: 1.02}}
                transition={{duration: 0.3}}
              >
                <motion.div
                  className="bg-blue-100 p-3 rounded-xl w-fit mb-4"
                  whileHover={{scale: 1.1, backgroundColor: "#dbeafe"}}
                  transition={{duration: 0.3}}
                >
                  <item.icon className="w-8 h-8 text-blue-700" />
                </motion.div>
                <h3 className="font-bold text-lg mb-2 text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Customer Solutions */}
      <motion.section
        ref={solutionsRef}
        className="py-20 bg-blue-50 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={solutionsControls}
      >
        {/* Parallax background elements */}
        <motion.div
          className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-blue-200 opacity-30"
          style={{
            filter: "blur(100px)",
            y: useTransform(scrollY, [800, 1300], [100, 0])
          }}
        />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            >
              راهکارهای متناسب با نیاز مشتری
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto mb-6"
              initial={{width: 0}}
              whileInView={{width: 96}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            />
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 0.2}}
              viewport={{once: false, amount: 0.8}}
            >
              بر اساس نیازهای خاص شما، بهترین راهکار حمل و نقل را انتخاب می‌کنیم
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.2}}
          >
            {customerSolutions.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 group"
                variants={cardVariants}
                whileHover={{y: -10, scale: 1.02}}
                transition={{duration: 0.3}}
              >
                <motion.div
                  className="bg-blue-100 p-3 rounded-xl w-fit mb-4"
                  whileHover={{scale: 1.1, backgroundColor: "#dbeafe"}}
                  transition={{duration: 0.3}}
                >
                  <item.icon className="w-8 h-8 text-blue-700" />
                </motion.div>
                <h3 className="font-bold text-lg mb-2 text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Steps */}
      <motion.section
        ref={processRef}
        className="py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate={processControls}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            >
              فرآیند ساده و شفاف همکاری
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto mb-6"
              initial={{width: 0}}
              whileInView={{width: 96}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            />
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.3}}
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-6 items-start"
                variants={itemVariants}
              >
                <motion.div
                  className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1"
                  whileHover={{scale: 1.1}}
                  transition={{duration: 0.3}}
                >
                  {i + 1}
                </motion.div>
                <motion.div
                  className="bg-blue-50 p-6 rounded-xl flex-1"
                  whileHover={{backgroundColor: "#eff6ff"}}
                  transition={{duration: 0.3}}
                >
                  <p className="text-gray-700 text-lg">{step}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Value Added Services */}
      <motion.section
        ref={servicesRef}
        className="py-20 bg-blue-50 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={servicesControls}
      >
        {/* Animated dots background */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            y: useTransform(scrollY, [1500, 2000], [-30, 30])
          }}
        />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            >
              ارزش‌های افزوده
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto mb-6"
              initial={{width: 0}}
              whileInView={{width: 96}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.3}}
          >
            {valueAddedServices.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4"
                variants={itemVariants}
                whileHover={{x: 10, backgroundColor: "#f8fafc"}}
                transition={{duration: 0.3}}
              >
                <motion.div
                  className="bg-blue-100 p-2 rounded-full flex-shrink-0 mt-1"
                  whileHover={{scale: 1.1, backgroundColor: "#dbeafe"}}
                  transition={{duration: 0.3}}
                >
                  <CheckCircle className="w-5 h-5 text-blue-700" />
                </motion.div>
                <p className="text-gray-700 text-lg">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Transport Modes */}
      <motion.section
        ref={modesRef}
        className="py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate={modesControls}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            >
              معرفی شرکت و ناوگان
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto mb-6"
              initial={{width: 0}}
              whileInView={{width: 96}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            />
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 0.2}}
              viewport={{once: false, amount: 0.8}}
            >
              ناوگان قدرتمند و متنوع ما آماده ارائه خدمات حمل و نقل در تمام
              روش‌ها
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.2}}
          >
            {transportModes.map((mode, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-6 text-white relative overflow-hidden group"
                variants={cardVariants}
                whileHover={{scale: 1.05, rotateY: 5}}
                transition={{duration: 0.3}}
              >
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "15px 15px"
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.1, 0.2]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 2
                  }}
                />

                <motion.div
                  className="relative z-10"
                  whileHover={{y: -5}}
                  transition={{duration: 0.3}}
                >
                  <motion.div
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-xl w-fit mb-4"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.3)"
                    }}
                    transition={{duration: 0.3}}
                  >
                    <mode.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{mode.title}</h3>
                  <p className="text-blue-100">{mode.description}</p>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 flex"
                  initial={{opacity: 0}}
                  whileHover={{opacity: 1}}
                  transition={{duration: 0.3}}
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 text-blue-300 fill-blue-300"
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
