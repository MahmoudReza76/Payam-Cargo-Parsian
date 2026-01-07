import React from "react";
import {
  Plane,
  Package,
  Globe,
  Shield,
  Headset,
  Clock,
  Headphones,
  Container
} from "lucide-react";
import {useTranslations} from "next-intl";

function CardFeatures() {
  const t = useTranslations("features");
  const features = [
    {
      icon: <Container className="w-12 h-12 text-blue-500" />,
      title: t("card1Title"),
      description: t("card1Description"),
      stats: t("card1Label")
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: t("card2Title"),
      description: t("card2Description"),
      stats: t("card2Label")
    },
    {
      icon: <Headset className="w-12 h-12 text-blue-500" />,
      title: t("card3Title"),
      description: t("card3Description"),
      stats: t("card3Label")
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group relative bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-md"
        >
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <div className="relative">
            {/* Icon with background effect */}
            <div className="mb-6 flex justify-center">
              <div className="inline-block p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                {feature.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="sm:text-xl text-base font-semibold text-gray-800 mb-3 text-center">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 sm:text-base text-sm mb-4 line-height-relaxed text-center">
              {feature.description}
            </p>

            {/* Stats/Highlight */}
            <div className="pt-4 border-t border-gray-100 flex justify-center">
              <span className="sm:text-base text-sm font-medium text-blue-600">
                {feature.stats}
              </span>
            </div>

            {/* Hover effect indicator */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[linear-gradient(to_right,_transparent_0%,_#EC4899_40%,_#2563EB_60%,_transparent_100%)] group-hover:w-full transition-all duration-300 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardFeatures;
