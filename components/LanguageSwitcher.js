"use client";

import React from "react";
import {useState} from "react";
import {useRouter, usePathname} from "next/navigation";
import {Earth} from "lucide-react";
import {useLocale} from "next-intl";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // Define the languages array
  const [languages] = useState([
    {LanguageCode: "en", LanguageName: "English"},
    {LanguageCode: "fa", LanguageName: "فارسی"},
    {LanguageCode: "ar", LanguageName: "العربية"}
  ]);

  const handleLanguageChange = (newLocale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    const newPath = `/${newLocale.toLowerCase()}${pathWithoutLocale}`;
    router.replace(newPath);
  };

  return (
    <Select
      className="text-neutral-950"
      onValueChange={handleLanguageChange}
      value={locale}
    >
      <SelectTrigger className="w-[70px] bg-inherit text-neutral-950 border-0">
        <SelectValue>
          <Earth className="text-neutral-600" />
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem
            key={lang.LanguageCode}
            value={lang.LanguageCode.toLowerCase()}
            className="outline-none"
          >
            {lang.LanguageName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
