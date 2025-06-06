
import { useState } from "react";
import { StatsBar } from "../components/StatsBar";
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../constants/content.ts';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PortfolioSection = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("youtube");

  const filteredItems = content.portfolio.items.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  // البيانات الثابتة للإحصائيات
  const statsData = {
    videos: content.portfolio.items.length,
    views: 57680,
    likes: 2250,
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title section-title-gradient text-center">
          {t(content.portfolio.title.ar, content.portfolio.title.en)}
        </h2>

        {/* ✅ البار الخاص بالإحصائيات */}
        <div className="mb-10">
          <StatsBar language={language} stats={statsData} />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {content.portfolio.categories.ar.slice(1).map((category, index) => {
            const value =
              content.portfolio.categories.en.slice(1)[index].toLowerCase();
            return (
              <button
                key={index}
                className={`px-4 py-2 rounded-full border transition-all ${
                  activeCategory === value
                    ? "bg-brand-purple text-white border-brand-purple"
                    : "bg-white text-gray-700 border-gray-300 hover:border-brand-purple"
                }`}
                onClick={() => setActiveCategory(value)}
              >
                {t(category, content.portfolio.categories.en.slice(1)[index])}
              </button>
            );
          })}
        </div>

        {/* Portfolio Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fade-in h-full">
                    <div className="relative">
                      <div
                        className={`relative ${
                          item.category === "reels"
                            ? "aspect-[9/16] mx-auto max-w-[280px]"
                            : "aspect-video w-full"
                        }`}
                      >
                        {item.isNew && (
                          <div className="absolute top-0 right-0 overflow-hidden w-20 h-20 z-30">
                            <div className="absolute transform rotate-45 bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500 text-white text-[12px] font-bold py-1 w-[130%] text-center shadow-md right-[-35%] top-[15%]">
                              {t("جديد 🔥", "NEW 🔥")}
                            </div>
                          </div>
                        )}
                        <iframe
                          src={`${item.videoUrl}?rel=0`}
                          title={t(item.title.ar, item.title.en)}
                          className="w-full h-full rounded-xl shadow-md"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
                        {t(item.title.ar, item.title.en)}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {t(item.description.ar, item.description.en)}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-white/80 hover:bg-white border border-gray-200 shadow-lg" />
            <CarouselNext className="hidden md:flex -right-4 bg-white/80 hover:bg-white border border-gray-200 shadow-lg" />
          </Carousel>
        </div>

        {/* Mobile swipe hint */}
        <div className="text-center mt-4 md:hidden">
          <p className="text-sm text-gray-500">
            {t("اسحب للتنقل بين الفيديوهات", "Swipe to navigate videos")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
