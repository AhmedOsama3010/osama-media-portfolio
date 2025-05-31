
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../constants/content';
import { FileText } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const AboutSection = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title section-title-gradient text-center">
          {t(content.about.title.ar, content.about.title.en)}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4 text-brand-purple">
              {t('من أنا؟', 'Who am I?')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t(content.about.description.ar, content.about.description.en)}
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-bold mb-4">
                {t(content.about.services.title.ar, content.about.services.title.en)}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {content.about.services.list.ar.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-brand-purple mr-2"></div>
                    <span>{t(service, content.about.services.list.en[index])}</span>
                  </div>
                ))}
              </div>
            </div>

            <a 
              href="#" 
              className="btn-secondary inline-flex"
              onClick={(e) => {
                e.preventDefault();
                alert(t('سيتم تنزيل السيرة الذاتية قريباً', 'CV download will be available soon'));
              }}
            >
              <FileText size={20} />
              <span>{t(content.about.resume.ar, content.about.resume.en)}</span>
            </a>
          </div>
          
          <div className="animate-fade-in [animation-delay:200ms]">
            <h3 className="text-xl font-bold mb-6 text-brand-purple">
              {t(content.about.skills.title.ar, content.about.skills.title.en)}
            </h3>
            
            <div className="space-y-6">
              {content.about.skills.list.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
