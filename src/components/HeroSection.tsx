
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../constants/content';
import { MessageSquare, Circle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const { t, dir } = useLanguage();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 section-padding overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 -z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-purple/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`w-full md:w-1/2 ${dir === 'rtl' ? 'md:order-1' : 'md:order-2'}`}>
            <div 
              className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full cursor-pointer group"
              onClick={() => setIsProfileOpen(true)}
            >
              {/* Story Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-500 p-1.5 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-white p-1.5">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="/lovable-uploads/d92efc56-544d-47a7-b2ea-0d8366bcb6fc.avif" 
                      loading="lazy"
                      alt="Ahmed Osama" 
                      className="object-cover"
                    />
                    <AvatarFallback>AO</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              {/* Online Indicator - Updated to solid green circle */}
              <div className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-lg">
                <Circle size={18} className="text-green-500 fill-green-500" />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-white font-medium">{t('عرض الملف الشخصي', 'View Profile')}</span>
              </div>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 mt-8 md:mt-0 animate-fade-in ${dir === 'rtl' ? 'md:order-2' : 'md:order-1'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t(content.hero.title.ar, content.hero.title.en)}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-brand-purple">
              {t(content.hero.subtitle.ar, content.hero.subtitle.en)}
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-lg">
              {t(content.hero.description.ar, content.hero.description.en)}
            </p>
            <a 
              href="https://wa.me/201151338581" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageSquare size={20} />
              <span>{t(content.hero.cta.ar, content.hero.cta.en)}</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Profile Dialog */}
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-brand-purple">
              {t('نبذة عني', 'About Me')}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {t('معلومات عني', 'Information about me')}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col items-center space-y-4 py-4">
            <Avatar className="w-24 h-24 border-2 border-brand-purple">
              <AvatarImage 
                src="/lovable-uploads/d92efc56-544d-47a7-b2ea-0d8366bcb6fc.avif"
                loading="lazy"
                alt="Ahmed Osama" 
              />
              <AvatarFallback>AO</AvatarFallback>
            </Avatar>
            
            <h3 className="text-lg font-bold">{t('أحمد أسامة', 'Ahmed Osama')}</h3>
            
            <p className="text-center text-gray-700 max-w-sm">
              {t(
                'مونتير فيديو محترف متخصص في مونتاج الريلز والإعلانات وفيديوهات اليوتيوب. أعمل على تحويل أفكارك إلى محتوى مرئي عالي الجودة.',
                'Professional video editor specializing in reels, ads, and YouTube videos. I transform your ideas into high-quality visual content.'
              )}
            </p>
            
            <a 
              href="https://wa.me/201151338581" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageSquare size={20} />
              <span>{t('تواصل معي على واتساب', 'Contact me on WhatsApp')}</span>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
