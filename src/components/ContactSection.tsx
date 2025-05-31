
import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../constants/content';
import { MessageSquare, Instagram, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import CountrySelect, { Country } from './CountrySelect';
import { Input } from "@/components/ui/input";

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [country, setCountry] = useState<Country>({
    name: { ar: "مصر", en: "Egypt" },
    code: "EG",
    dial_code: "+20",
    flag: "🇪🇬"
  });

  // Get phone format example based on selected country
  const getPhoneExample = (code: string) => {
    switch (code) {
      // دول الخليج
      case "EG": return "1012345678";   // مصر
      case "SA": return "512345678";    // السعودية
      case "AE": return "501234567";    // الإمارات
      case "QA": return "33123456";     // قطر
      case "KW": return "50123456";     // الكويت
      case "BH": return "36123456";     // البحرين
      case "OM": return "91234567";     // عمان
      
      // بلاد الشام
      case "JO": return "791234567";    // الأردن
      case "LB": return "71123456";     // لبنان
      case "IQ": return "7712345678";   // العراق
      case "SY": return "944123456";    // سوريا
      case "PS": return "599123456";    // فلسطين
      
      // شمال أفريقيا
      case "MA": return "612345678";    // المغرب
      case "DZ": return "661234567";    // الجزائر
      case "TN": return "20123456";     // تونس
      case "LY": return "912345678";    // ليبيا
      
      // القرن الأفريقي
      case "SD": return "912345678";    // السودان
      case "SO": return "712345678";    // الصومال
      case "DJ": return "77123456";     // جيبوتي
      
      // شبه الجزيرة العربية
      case "YE": return "712345678";    // اليمن
      
      default: return "1012345678";     // افتراضي: مصر
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message for WhatsApp
    const fullPhone = country.dial_code + formData.phone.replace(/^0+/, '');
    const message = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${fullPhone}\nMessage: ${formData.message}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/201151338581?text=${message}`, '_blank');
    
    toast({
      title: t('تم إرسال الرسالة بنجاح!', 'Message sent successfully!'),
      description: t('سنتواصل معك قريباً', 'We will get back to you soon'),
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const focusPhoneInput = () => {
    if (phoneInputRef.current) {
      setTimeout(() => {
        phoneInputRef.current?.focus();
      }, 100);
    }
  };

  const handleCountryChange = (selectedCountry: Country) => {
    setCountry(selectedCountry);
    // Focus the phone input after selecting a country
    if (phoneInputRef.current) {
      setTimeout(() => {
        phoneInputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title section-title-gradient text-center">
          {t(content.contact.title.ar, content.contact.title.en)}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">
                  {t(content.contact.name.ar, content.contact.name.en)}
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">
                  {t(content.contact.email.ar, content.contact.email.en)}
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 font-medium">
                  {t('رقم الهاتف', 'Phone Number')}
                </label>
                <div className="flex flex-col gap-2">
                  <CountrySelect 
                    value={country} 
                    onValueChange={handleCountryChange}
                    onPhoneInputFocus={focusPhoneInput}
                  />
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={getPhoneExample(country.code)}
                    ref={phoneInputRef}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  {t(content.contact.message.ar, content.contact.message.en)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full justify-center"
              >
                <Send size={20} />
                <span>{t(content.contact.submit.ar, content.contact.submit.en)}</span>
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center animate-fade-in [animation-delay:200ms]">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-brand-purple">
                {t('تواصل معي مباشرة', 'Contact Me Directly')}
              </h3>
              <p className="text-gray-700 mb-6">
                {t('يمكنك التواصل معي مباشرة عبر وسائل التواصل الاجتماعي', 'You can contact me directly through social media')}
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/201151338581" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4 rtl:ml-4 rtl:mr-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold">{t(content.contact.whatsapp.ar, content.contact.whatsapp.en)}</h4>
                  <p className="text-gray-600">+201151338581</p>
                </div>
              </a>
              
              <a 
                href="https://www.instagram.com/bimbo0_o/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow transition-shadow"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mr-4 rtl:ml-4 rtl:mr-0">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-bold">{t(content.contact.instagram.ar, content.contact.instagram.en)}</h4>
                  <p className="text-gray-600">@Ahmed Osama</p>
                </div>
              </a>
              
              <a 
                href="https://www.tiktok.com/@ai.edit7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow transition-shadow"
              
              >
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 mr-4 rtl:ml-4 rtl:mr-0">
                <img 
    src="https://www.svgrepo.com/show/447151/tiktok-outline.svg" 
    alt="TikTok" 
    className="w-6 h-6" 
  />
                </div>
                 <div>
                  <h4 className="font-bold">{t(content.contact.tiktok.ar, content.contact.tiktok.en)}</h4>
                  <p className="text-gray-600">@ai.edits</p>
                </div>
              </a>
              
              <a 
                href="https://www.youtube.com/channel/UCf5ITUu5kf2GvOjCTBvYIFQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow transition-shadow"
              
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-gray-800 mr-4 rtl:ml-4 rtl:mr-0">
                <img 
    src="https://www.svgrepo.com/show/13671/youtube.svg" 
    alt="TikTok" 
    className="w-6 h-6" 
  />
                </div>
                
                <div>
                  <h4 className="font-bold">{t(content.contact.ytp.ar, content.contact.ytp.en)}</h4>
                  <p className="text-gray-600">@ahmed visuals</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
