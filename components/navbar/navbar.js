import React from "react";
import NavigationNavbar from "./navigationNavbar";
import Logo from "./logo";
import Register from "./register";
import MobileNavigation from "./MobileNavigation";
import LanguageSelector from "../LanguageSwitcher";
import {useLocale} from "next-intl";

function Navbar() {
  const locale = useLocale();
  return (
    <div
      dir={locale === "fa" || locale === "ar" ? "rtl" : "ltr"}
      className="w-full flex flex-row md:justify-around justify-between items-center py-2 px-4"
    >
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationNavbar />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileNavigation Logo={Logo} Register={Register} />
      </div>

      {/* Register and Language Selector (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <LanguageSelector />
        <Register />
      </div>
    </div>
  );
}

export default Navbar;
