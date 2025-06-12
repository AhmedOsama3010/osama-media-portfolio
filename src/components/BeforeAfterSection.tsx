import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../constants/content';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const BeforeAfterSection = () => {
  const { t } = useLanguage();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="before-after" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title section-title-gradient text-center">
          {t(content.beforeAfter.title.ar, content.beforeAfter.title.en)}
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          {t(content.beforeAfter.description.ar, content.beforeAfter.description.en)}
        </p>

        <div className="space-y-6">
          {content.beforeAfter.examples.map((example) => (
            <div
              key={example.id}
              className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleSection(example.id)}
                className="w-full flex items-center justify-between text-left font-bold text-brand-purple text-xl mb-4"
              >
                <span>{t(example.title.ar, example.title.en)}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openSections[example.id] ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openSections[example.id] && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="w-full mt-2">
                      {example.beforeVideo && example.afterVideo ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
                          <div>
                            <div className={`${example.isReel ? 'aspect-[9/16] max-w-[300px]' : 'aspect-video max-w-[700px]'} mx-auto w-full flex items-center justify-center`}>
                              <iframe
                                src={example.beforeVideo}
                                title={t('قبل', 'Before')}
                                className="w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                            <p className="text-center font-medium">{t('قبل', 'Before')}</p>
                          </div>
                          <div>
                            <div className={`${example.isReel ? 'aspect-[9/16] max-w-[300px]' : 'aspect-video max-w-[700px]'} mx-auto w-full flex items-center justify-center`}>
                              <iframe
                                src={example.afterVideo || example.video}
                                title={t(example.title.ar, example.title.en)}
                                className="w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                            <p className="text-center font-medium">{t('بعد', 'After')}</p>
                          </div>
                        </div>
                      ) : (
                        <div className={`${example.isReel ? 'aspect-[9/16] max-w-[300px]' : 'aspect-video max-w-[700px]'} mx-auto w-full flex items-center justify-center`}>
                          <iframe
                            src={example.afterVideo || example.video}
                            title={t(example.title.ar, example.title.en)}
                            className="w-full h-full rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
