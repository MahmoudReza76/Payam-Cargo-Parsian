import React from "react";
import {
  Truck,
  Package,
  Globe,
  Shield,
  Clock,
  Headphones,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import {useTranslations, useLocale} from "next-intl";

function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  return (
    <footer
      dir={locale === "fa" || locale === "ar" ? "rtl" : "ltr"}
      className="bg-gradient-to-br mt-10 from-gray-900 to-gray-800 text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Services */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-b border-gray-700">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <Truck className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold">{t("label1Title")}</h3>
              <p className="text-sm text-gray-400">{t("label1Description")}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold">{t("label2Title")}</h3>
              <p className="text-sm text-gray-400">{t("label2Description")}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <Headphones className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold">{t("label3Title")}</h3>
              <p className="text-sm text-gray-400">{t("label3Description")}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold">{t("label4Title")}</h3>
              <p className="text-sm text-gray-400">{t("label4Description")}</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Payam Cargo</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("section1Title")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("section1Item1")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("section1Item2")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("section1Item3")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("section1Item4")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("section2Title")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("section2Item1")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("section2Item2")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("section2Item3")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("section2Item4")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("section3Title")}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">{t("section3Item1")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">{t("section3Item1b")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <p dir="ltr" className="text-gray-400">
                  {t("section3Item2")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <p dir="ltr" className="text-gray-400">
                  {t("section3Item2b")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <p dir="ltr" className="text-gray-400">
                  {t("section3Item2c")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400">{t("section3Item3")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
          <p>{t("Copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
