
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppPopup from '../components/WhatsAppPopup';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { dir } = useLanguage();
  
  return (
    <div className={dir === 'rtl' ? 'rtl' : 'ltr'}>
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default Index;
