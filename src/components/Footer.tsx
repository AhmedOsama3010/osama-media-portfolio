
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../constants/content';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              {t(content.hero.title.ar, content.hero.title.en)}
            </h3>
            <p className="text-gray-400">
              {t(content.hero.subtitle.ar, content.hero.subtitle.en)}
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              {t(content.footer.copyright.ar, content.footer.copyright.en)}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
