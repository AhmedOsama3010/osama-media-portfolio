import { useEffect, useRef, useState } from "react";
import { StatsBar } from "../components/StatsBar";
import { useLanguage } from "../contexts/LanguageContext";
import { content as staticContent } from "../constants/content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_KEY = "AIzaSyD5dxF_mD1JKd8Az3U94ufPanbBFNqYnlw";

interface PortfolioItem {
  id: number;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  videoUrl: string;
  category: string;
  isNew?: boolean;
  stats?: {
    views: number;
    likes: number;
  };
}

const PortfolioSection = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("youtube");
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(staticContent.portfolio.items);
  const [statsData, setStatsData] = useState({
    videos: 0,
    views: 0,
    likes: 0,
  });

  const swiperRef = useRef<SwiperCore>();
  const iframePlayingRef = useRef(false);

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (typeof data === "object" && data?.event === "infoDelivery" && data?.info) {
        if (data.info.playerState === 1) {
          swiperRef.current?.autoplay?.stop();
          iframePlayingRef.current = true;
        } else if (data.info.playerState === 2 && iframePlayingRef.current) {
          swiperRef.current?.autoplay?.start();
          iframePlayingRef.current = false;
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    async function fetchVideoStats() {
      const videoIds = staticContent.portfolio.items.map(item =>
        item.videoUrl.split("/embed/")[1]
      ).join(",");

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${API_KEY}`
      );
      const data = await response.json();

      let totalViews = 0;
      let totalLikes = 0;

      const enrichedItems = staticContent.portfolio.items.map((item, index) => {
        const stats = data.items[index]?.statistics || {};
        const views = Number(stats.viewCount || 0);
        const likes = Number(stats.likeCount || 0);
        totalViews += views;
        totalLikes += likes;

        return {
          ...item,
          stats: {
            views,
            likes
          }
        };
      });

      setStatsData({
        videos: enrichedItems.length,
        views: totalViews,
        likes: totalLikes,
      });

      setPortfolioItems(enrichedItems);
    }

    fetchVideoStats();
  }, []);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title section-title-gradient text-center">
          {t(staticContent.portfolio.title.ar, staticContent.portfolio.title.en)}
        </h2>

        <div className="mb-10">
          <StatsBar language={language} stats={statsData} />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {staticContent.portfolio.categories.ar.slice(1).map((category, index) => {
            const value = staticContent.portfolio.categories.en.slice(1)[index].toLowerCase();
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
                {t(category, staticContent.portfolio.categories.en.slice(1)[index])}
              </button>
            );
          })}
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {filteredItems.map((item) => (
              <SwiperSlide key={item.id}>
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
                        src={`${item.videoUrl}?rel=0&enablejsapi=1`}
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
                    <p className="text-xs mt-2 text-gray-500">
                      👁️ {item.stats?.views?.toLocaleString()} | ❤️ {item.stats?.likes?.toLocaleString()}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev hidden md:flex group-hover:flex items-center justify-center 
              -left-4 bg-white/80 hover:bg-white border border-gray-200 shadow-lg w-10 h-10 rounded-full absolute top-1/2 -translate-y-1/2 z-10 transition-all duration-300">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next hidden md:flex group-hover:flex items-center justify-center 
              -right-4 bg-white/80 hover:bg-white border border-gray-200 shadow-lg w-10 h-10 rounded-full absolute top-1/2 -translate-y-1/2 z-10 transition-all duration-300">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Swiper>
        </div>

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
