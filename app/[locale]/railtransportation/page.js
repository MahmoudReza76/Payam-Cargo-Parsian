"use client";
import React from "react";
import {
  TrainFront,
  Package,
  Factory,
  Globe2,
  CheckCircle,
  Mail,
  Phone,
  Network
} from "lucide-react";

export default function RailTransportPage() {
  const sections = [
    {
      title: "خدمات حمل‌ونقل ریلی",
      icon: TrainFront,
      items: [
        "هلدینگ پیام کارگو با در اختیار داشتن بیش از ۷۰۰ دستگاه واگن لبه‌کوتاه، لبه‌بلند و بانه‌ارم با ظرفیت‌های ۶۵ و ۱۰۵ تن، یکی از پیشروان صنعت حمل‌ونقل ریلی در منطقه است.",
        "این ناوگان مدرن امکان جابجایی ایمن و بهینه انواع کالاهای فله، صنعتی و سنگین را فراهم می‌سازد.",
        "با بهره‌گیری از فناوری‌های نوین، مسیرهای ریلی بین‌المللی با سرعت و امنیت بالا مدیریت می‌شوند."
      ]
    },
    {
      title: "مقاصد بین‌المللی",
      icon: Globe2,
      items: [
        "ارائه خدمات ریلی به کشورهای کلیدی منطقه از جمله ترکیه، روسیه، قزاقستان، آذربایجان، ارمنستان، ازبکستان، ترکمنستان و گرجستان.",
        "برقراری مسیرهای مستقیم و ترکیبی برای حمل کالا از ایران به کشورهای CIS.",
        "امکان ترانزیت بین‌المللی از بنادر جنوبی ایران تا اروپا از طریق شبکه ریلی."
      ]
    },
    {
      title: "انواع محموله‌های قابل حمل",
      icon: Package,
      items: [
        "سنگ‌آهن، زغال‌سنگ، محصولات پتروشیمی، پلاستیکی، سیمان، کلینکر و فولاد.",
        "میلگرد، مقاطع فلزی و تجهیزات صنعتی سنگین.",
        "محصولات کشاورزی نظیر گندم و ذرت.",
        "مواد شیمیایی، مایعات صنعتی و فرآورده‌های نفتی.",
        "کالاهای کانتینری و محموله‌های فله معدنی."
      ]
    },
    {
      title: "ویژگی‌های فنی و لجستیکی",
      icon: Factory,
      items: [
        "استفاده از سیستم‌های مدرن مدیریت زنجیره تأمین (SCM).",
        "رهگیری آنلاین محموله‌ها در تمام مراحل حمل.",
        "امکان بارگیری و تخلیه سریع با تجهیزات تخصصی ریلی.",
        "برنامه‌ریزی دقیق برای تحویل در زمان مقرر و کاهش هزینه‌های حمل."
      ]
    },
    {
      title: "تعهد ما",
      icon: Network,
      items: [
        "تضمین حمل ایمن، دقیق و اقتصادی برای تمامی مشتریان.",
        "ارائه راهکارهای لجستیکی هوشمند، انعطاف‌پذیر و متناسب با نیاز هر پروژه.",
        "پشتیبانی تخصصی از مرحله سفارش تا تحویل نهایی در مقصد."
      ]
    }
  ];

  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[50vh] bg-blue-900 text-white flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">حمل‌ونقل ریلی</h1>
        <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
          هلدینگ پیام کارگو با ناوگانی پیشرفته و تجربه‌ای گسترده در حمل‌ونقل
          ریلی، خدمات سریع، ایمن و مقرون‌به‌صرفه را در مسیرهای داخلی و
          بین‌المللی ارائه می‌دهد.
        </p>
      </section>

      {/* Content Sections */}
      <section className="py-16 max-w-5xl mx-auto px-4 space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <section.icon className="w-6 h-6 text-blue-700" />
              <h2 className="text-xl font-bold text-blue-900">
                {section.title}
              </h2>
            </div>
            <ul className="list-disc pr-6 text-gray-700 space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="bg-blue-900 py-16 text-white text-center">
        <h3 className="text-2xl font-bold mb-6">
          برای دریافت اطلاعات بیشتر و رزرو خدمات حمل‌ونقل ریلی
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6" />
            <a
              href="mailto:info@payamcargo.com"
              className="text-blue-200 hover:text-white transition"
            >
              info@payamcargo.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <a
              href="tel:09058337011"
              className="text-blue-200 hover:text-white transition"
            >
              09058337011
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
