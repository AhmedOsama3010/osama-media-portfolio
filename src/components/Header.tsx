
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../constants/content';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const navItems = [
    { label: t(content.nav.home.ar, content.nav.home.en), href: '#home' },
    { label: t(content.nav.about.ar, content.nav.about.en), href: '#about' },
    { label: t(content.nav.portfolio.ar, content.nav.portfolio.en), href: '#portfolio' },
    { label: t(content.nav.beforeAfter.ar, content.nav.beforeAfter.en), href: '#before-after' },
    { label: t(content.nav.testimonials.ar, content.nav.testimonials.en), href: '#testimonials' },
    { label: t(content.nav.contact.ar, content.nav.contact.en), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-brand-purple">
          {t(content.hero.title.ar, content.hero.title.en)}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-brand-purple transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 rtl:space-x-reverse text-brand-purple bg-brand-light-purple/20 px-3 py-1.5 rounded-md"
          >
            <Globe size={16} />
            <span>{t(content.nav.language.ar, content.nav.language.en)}</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="text-brand-purple bg-brand-light-purple/20 p-2 rounded-md"
          >
            <Globe size={20} />
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-700 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-3">
            <nav className="flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="py-3 px-4 text-gray-700 hover:text-brand-purple border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
