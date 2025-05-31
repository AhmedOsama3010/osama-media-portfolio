
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../constants/content';
import { X, MessageSquare, Instagram } from 'lucide-react';

const WhatsAppPopup = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div className="relative max-w-md w-full mx-4 bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 text-white bg-black/20 hover:bg-black/30 rounded-full transition-colors z-10"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        
        {/* Popup Header */}
        <div className="bg-gradient-purple-blue p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">
            {t(content.popup.title.ar, content.popup.title.en)}
          </h3>
          <p>
            {t(content.popup.description.ar, content.popup.description.en)}
          </p>
        </div>
        
        {/* Popup Content */}
        <div className="p-6">
          <div className="flex flex-col space-y-4">
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/201151338581" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors"
            >
              <MessageSquare size={20} />
              <span>{t(content.popup.whatsapp.ar, content.popup.whatsapp.en)}</span>
            </a>
            
            {/* Social Media */}
            <div className="pt-4 border-t">
              <p className="text-gray-700 mb-4 text-center">
                {t(content.popup.social.ar, content.popup.social.en)}
              </p>
              <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                <a 
                  href="#" 
                  className="p-3 bg-pink-100 rounded-full text-pink-600 hover:bg-pink-200 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-black rounded-full text-white hover:bg-gray-800 transition-colors"
                  aria-label="TikTok"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12.2L11 14.5L16 9.5" />
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPopup;
