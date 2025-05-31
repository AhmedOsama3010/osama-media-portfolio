import React, { useState, useEffect, useRef } from 'react';
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useLanguage } from '../contexts/LanguageContext';

export type Country = {
  name: { ar: string; en: string };
  code: string;
  dial_code: string;
  flag: string;
};

const countries: Country[] = [
  { name: { ar: "مصر", en: "Egypt" }, code: "EG", dial_code: "+20", flag: "🇪🇬" },
  { name: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" }, code: "SA", dial_code: "+966", flag: "🇸🇦" },
  { name: { ar: "الإمارات العربية المتحدة", en: "United Arab Emirates" }, code: "AE", dial_code: "+971", flag: "🇦🇪" },
  { name: { ar: "قطر", en: "Qatar" }, code: "QA", dial_code: "+974", flag: "🇶🇦" },
  { name: { ar: "الكويت", en: "Kuwait" }, code: "KW", dial_code: "+965", flag: "🇰🇼" },
  { name: { ar: "البحرين", en: "Bahrain" }, code: "BH", dial_code: "+973", flag: "🇧🇭" },
  { name: { ar: "عمان", en: "Oman" }, code: "OM", dial_code: "+968", flag: "🇴🇲" },
  { name: { ar: "الأردن", en: "Jordan" }, code: "JO", dial_code: "+962", flag: "🇯🇴" },
  { name: { ar: "لبنان", en: "Lebanon" }, code: "LB", dial_code: "+961", flag: "🇱🇧" },
  { name: { ar: "العراق", en: "Iraq" }, code: "IQ", dial_code: "+964", flag: "🇮🇶" },
  { name: { ar: "سوريا", en: "Syria" }, code: "SY", dial_code: "+963", flag: "🇸🇾" },
  { name: { ar: "فلسطين", en: "Palestine" }, code: "PS", dial_code: "+970", flag: "🇵🇸" },
  { name: { ar: "المغرب", en: "Morocco" }, code: "MA", dial_code: "+212", flag: "🇲🇦" },
  { name: { ar: "الجزائر", en: "Algeria" }, code: "DZ", dial_code: "+213", flag: "🇩🇿" },
  { name: { ar: "تونس", en: "Tunisia" }, code: "TN", dial_code: "+216", flag: "🇹🇳" },
  { name: { ar: "ليبيا", en: "Libya" }, code: "LY", dial_code: "+218", flag: "🇱🇾" },
  { name: { ar: "السودان", en: "Sudan" }, code: "SD", dial_code: "+249", flag: "🇸🇩" },
  { name: { ar: "الصومال", en: "Somalia" }, code: "SO", dial_code: "+252", flag: "🇸🇴" },
  { name: { ar: "جيبوتي", en: "Djibouti" }, code: "DJ", dial_code: "+253", flag: "🇩🇯" },
  { name: { ar: "اليمن", en: "Yemen" }, code: "YE", dial_code: "+967", flag: "🇾🇪" },
];

interface CountrySelectProps {
  value: Country;
  onValueChange: (value: Country) => void;
  placeholder?: string;
  onPhoneInputFocus?: () => void;
}

const CountrySelect = ({ value, onValueChange, placeholder, onPhoneInputFocus }: CountrySelectProps) => {
  const { t, language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const popoverRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredCountries = countries.filter((country) => {
    const query = searchQuery.toLowerCase();
    return (
      country.name.en.toLowerCase().includes(query) ||
      country.name.ar.toLowerCase().includes(query) ||
      country.dial_code.toLowerCase().includes(query)
    );
  });

  // Focus search input when dropdown opens
  useEffect(() => {
    if (open && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [open]);

  // Handle click outside to close popover
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (country: Country) => {
    onValueChange(country);
    setOpen(false);
    setSearchQuery("");
  };

  return (
    <div ref={popoverRef}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between font-normal"
            onClick={() => {
              setOpen(!open);
              onPhoneInputFocus?.();
            }}
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="text-xl">{value.flag}</span>
              <span className="whitespace-nowrap">{value.dial_code}</span>
              <span className="truncate text-muted-foreground">
                {language === 'ar' ? value.name.ar : value.name.en}
              </span>
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-[var(--radix-popover-trigger-width)] p-0" 
          align="start"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <div className="flex flex-col h-[300px]">
            <div className="sticky top-0 z-10 bg-background border-b p-2">
              <div className="flex items-center px-2 py-1 rounded-md bg-muted">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  ref={searchInputRef}
                  className="ml-2 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  placeholder={t("ابحث عن الدولة...", "Search country...")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="overflow-y-auto flex-1">
              {filteredCountries.length === 0 ? (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  {t("لم يتم العثور على دولة", "No country found")}
                </div>
              ) : (
                <div className="p-1">
                  {filteredCountries.map((country) => (
                    <div
                      key={country.code}
                      onClick={() => handleCountrySelect(country)}
                      className={cn(
                        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                        value.code === country.code && "bg-accent"
                      )}
                    >
                      <div className="flex items-center flex-1 gap-2">
                        <span className="text-xl">{country.flag}</span>
                        <span className="font-medium">{country.dial_code}</span>
                        <span className="truncate">
                          {language === 'ar' ? country.name.ar : country.name.en}
                        </span>
                      </div>
                      {value.code === country.code && (
                        <Check className="h-4 w-4 opacity-100" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CountrySelect;
