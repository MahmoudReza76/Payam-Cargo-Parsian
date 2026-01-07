"use client";
import React from "react";
import {
  Plane,
  Globe2,
  Package,
  Clock,
  MapPin,
  CheckCircle,
  Mail,
  Phone
} from "lucide-react";

export default function AirTransportPage() {
  const sections = [
    {
      title: "خدمات حمل و نقل هوایی",
      icon: Plane,
      items: [
        "ارائه خدمات سریع و مطمئن حمل هوایی با همکاری خطوط هوایی معتبر.",
        "ارسال بار به مقاصد اروپا (آلمان، فرانسه، ایتالیا، انگلستان)، خاورمیانه (امارات، قطر، عربستان، ترکیه)، و آسیای جنوب شرقی (چین، هند، سنگاپور) و همچنین آمریکا، کانادا، روسیه و کشورهای CIS.",
        "پوشش گسترده بین‌المللی با شبکه‌ای از پروازهای منظم و اختصاصی."
      ]
    },
    {
      title: "انواع محموله‌های قابل حمل",
      icon: Package,
      items: [
        "کالاهای صنعتی و الکترونیکی.",
        "دارو، اسناد و مرسولات حساس.",
        "محصولات غذایی با عمر کوتاه.",
        "کالاهای لوکس و ارزشمند با خدمات ویژه امنیتی."
      ]
    },
    {
      title: "ویژگی‌های خدمات",
      icon: Clock,
      items: [
        "خدمات Door-to-Door (درب تا درب) از مبدأ تا مقصد نهایی.",
        "بیمه کامل برای تمامی محموله‌ها.",
        "امکان رهگیری آنلاین ۲۴ ساعته از طریق سامانه پیام کارگو.",
        "پشتیبانی و مشاوره تخصصی در طول فرآیند حمل."
      ]
    },
    {
      title: "فرودگاه‌ها و ناوگان حمل",
      icon: Globe2,
      items: [
        "خدمات ویژه پاره‌وایی از فرودگاه امام خمینی، مهرآباد و فرودگاه پیام کرج.",
        "استفاده از هواپیمای کارگو بوئینگ 737 با ظرفیت ۱۶ تن.",
        "هواپیمای ایلیوشین با ظرفیت ۲۵ تن برای محموله‌های حجیم‌تر.",
        "انعطاف‌پذیری در برنامه پرواز و مسیرهای اختصاصی."
      ]
    },
    {
      title: "پوشش جغرافیایی و شبکه جهانی",
      icon: MapPin,
      items: [
        "ارائه خدمات به بیش از ۳۰ مقصد بین‌المللی.",
        "همکاری با خطوط هوایی شناخته‌شده مانند Emirates SkyCargo، Turkish Airlines Cargo و Qatar Airways Cargo.",
        "شبکه همکاری قوی در کشورهای مقصد برای تحویل سریع و مطمئن."
      ]
    }
  ];

  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[50vh] bg-blue-900 text-white flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">حمل و نقل هوایی</h1>
        <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
          هلدینگ پیام کارگو با همکاری خطوط هوایی معتبر، خدمات سریع، ایمن و مطمئن
          حمل هوایی را به سراسر جهان ارائه می‌دهد.
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
          برای دریافت اطلاعات بیشتر و رزرو خدمات حمل هوایی
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
