export const content = {
  hero: {
    title: {
      ar: "أحمد أسامة",
      en: "Ahmed Osama"
    },
    subtitle: {
      ar: "مونتير فيديو محترف",
      en: "Professional Video Editor"
    },
    description: {
      ar: "أقدم خدمات مونتاج فيديو احترافية لمنصات السوشيال ميديا, اليوتيوب، إعلانات السوشيال، والريلز",
      en: "Providing professional video editing services for social media platforms, YouTube, Social ads, and reels"
    },
    cta: {
      ar: "تواصل معي على واتساب",
      en: "Contact me on WhatsApp"
    }
  },
  about: {
    title: {
      ar: "نبذة عني",
      en: "About Me"
    },
    description: {
      ar: "مونتير فيديو محترف بخبرة واسعة في مجال المونتاج. أتخصص في إنشاء محتوى جذاب وعالي الجودة لمنصات التواصل الاجتماعي والإعلانات. أهتم بالتفاصيل وأسعى دائماً لتقديم أفضل النتائج التي تلبي احتياجات عملائي.",
      en: "Professional video editor with extensive experience in the field. I specialize in creating engaging, high-quality content for social media platforms and advertisements. I pay attention to details and always strive to deliver the best results that meet my clients' needs."
    },
    skills: {
      title: {
        ar: "مهاراتي",
        en: "My Skills"
      },
      list: [
        {
          name: "CapCut Pro",
          level: 95
        },
        
        {
          name: "Adobe After Effects",
          level: 80
        },
        {
          name: "DaVinci Resolve",
          level: 80
        },
        {
          name: "Design visual elements with Canva",
          level: 90
        }
      ]
    },
    services: {
      title: {
        ar: "خدماتي",
        en: "My Services"
      },
      list: {
        ar: ["مونتاج فيديوهات يوتيوب", "مونتاج إعلانات", "مونتاج ريلز", "تصحيح الألوان", "مؤثرات بصرية"],
        en: ["YouTube Video Editing", "Advertisement Editing", "Reels Editing", "Color Correction", "Visual Effects"]
      }
    },
    resume: {
      ar: "تحميل السيرة الذاتية",
      en: "Download CV"
    }
  },
  portfolio: {
    title: {
      ar: "معرض أعمالي",
      en: "My Portfolio"
    },
    categories: {
      ar: ["الكل", "يوتيوب", "إعلانات", "ريلز"],
      en: ["All", "YouTube", "Advertisements", "Reels"]
    },
    items: [{
    id: 1,
    title: { ar: "مين قال الموسيقي حرام؟", en: "Who said music is haram?" },
    description: { ar: "مونتاج لتجربة شخصية بتحكي عن تأثير الموسيقى ونظرة الدين والعلم ليها", en: "A montage of a personal experience that talks about the impact of music and the views of religion and science on it." },
    videoUrl: "https://www.youtube.com/embed/EdPQOtlDtXw",
    category: "youtube",
    isNew: true // ← لازم دي تكون موجودة لو عايز العلامة تظهر 
  },
      {
        id: 2,
        title: {
          ar: "الرياضة ستغـيـر حيـاتـك | هكذا يـُصنع الأبطال 🔥",
          en: "Sports will change your life | This is how champions are made 🔥"
        },
        description: {
          ar: "مونتاج وثائقي عن تطور الرياضة وفوايدها الجسدية والنفسية.",
          en: "A documentary montage about the development of sports and its physical and psychological benefits."
        },
        category: "youtube",
        videoUrl: "https://www.youtube.com/embed/7D2c2t6dD5U"
      },
      {
        id: 3,
        title: {
          ar: "كيف يؤثر النوم على حياتك ؟",
          en: "How does sleep affect your life?"
        },
        description: {
          ar:  "مونتاج إلكتروني يستعرض تأثير النوم على صحتك الجسدية والعقلية، وأضرار قلة النوم، وأهمية العادات الصحية للنوم من أجل حياة أفضل.",
          en: "electronic-style montage exploring how sleep affects your physical and mental health, the dangers of sleep deprivation, and the importance of healthy sleep habits for a better life."
        },
        category: "youtube",
        videoUrl: "https://www.youtube.com/embed/jujHz3rwmJ0"
      },
      {
        id: 4,
        title: {
          ar: "لماذا انت لست سعيدا ؟",
          en: "Why are you not happy?"
        },
        description: {
          ar: "مونتاج إلكتروني لفيديو توعوي عن إدمان الدوبامين الزائف وتأثيره على السلوك والصحة النفسية.",
          en: "An electronic montage of an awareness video about fake dopamine addiction and its effects on behavior and mental health."
        },
        category: "youtube",
        videoUrl: "https://www.youtube.com/embed/AcFl7c1UHH0"
      },
      {
        id: 5,
        title: {
          ar: "توقف عن العمل من أجل المال | أجعل المال يعمل لديك!",
          en: "Stop working for money | Make money work for you!"
        },
        description: {
          ar: "ملخص لأهم أفكار الجزء الأول من كتاب الأب الغني والأب الفقير: الأثرياء لا يعملون من أجل المال، بل يجعلون المال يعمل من أجلهم.",
          en: "Summary of the main ideas from part one of Rich Dad Poor Dad: the wealthy don’t work for money, they make money work for them."
        },
        category: "youtube",
        videoUrl: "https://www.youtube.com/embed/_667Lg-6qiA"
      },
      {
        id: 6,
        title: {
          ar: "كيف تبدأ عملك الخاص | هذا ما يفعله الأثرياء !",
          en: "How to Start Your Own Business | This is What the Wealthy Do!"
        },
        description: {
          ar: "مونتاج وثائقي يلخص أهم دروس كتاب الأب الغني والأب الفقير حول كيفية بدء مشروعك الخاص وبناء الثروة في 3 خطوات.",
          en: "documentary-style montage summarizing the key lessons from 'Rich Dad Poor Dad' on how to start your own business and build wealth in 3 steps."
        },
        category: "youtube",
        videoUrl: "https://www.youtube.com/embed/cOVA22NxBF0"
      },  {
        id: 7,
        title: {
          ar: "ريلز ترفيهي",
          en: "Entertainment Reel"
        },
        description: {
          ar: "مونتاج ريلز قصير مع تأثيرات صوتية ومرئية جذابة",
          en: "Short reel editing with attractive audio and visual effects"
        },
        category: "reels",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }, {
        id: 8,
        title: {
          ar: "ريلز موسيقي",
          en: "Music Reel"
        },
        description: {
          ar: "مونتاج ريلز موسيقي مع تزامن دقيق للصوت والصورة",
          en: "Music reel editing with precise audio-visual synchronization"
        },
        category: "reels",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  },
  beforeAfter: {
    title: {
      ar: "قبل وبعد",
      en: "Before & After"
    },
    description: {
      ar: "شاهد تأثير المونتاج على جودة الفيديوهات",
      en: "See the impact of editing on video quality"
    },
    examples: [
      {
        id: 1,
        title: {
          ar: "تصحيح الألوان",
          en: "Color Correction"
        },
        beforeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        afterVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 2,
        title: {
          ar: "تحسين الصوت",
          en: "Audio Enhancement"
        },
        beforeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        afterVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  },
  testimonials: {
    title: {
      ar: "آراء العملاء",
      en: "Testimonials"
    },
    items: [
      {
        id: 1,
        name: {
          ar: "محمد أحمد",
          en: "Mohammed Ahmed"
        },
        position: {
          ar: "صانع محتوى يوتيوب",
          en: "YouTube Content Creator"
        },
        text: {
          ar: "تعاملت مع أحمد في مونتاج العديد من فيديوهات قناتي على يوتيوب، وكانت النتائج رائعة. احترافية عالية ودقة في التنفيذ والالتزام بالمواعيد.",
          en: "I worked with Ahmed on editing many videos for my YouTube channel, and the results were amazing. High professionalism, precise execution, and commitment to deadlines."
        }
      },
      {
        id: 2,
        name: {
          ar: "سارة محمود",
          en: "Sara Mahmoud"
        },
        position: {
          ar: "مالكة متجر إلكتروني",
          en: "E-commerce Store Owner"
        },
        text: {
          ar: "أحمد قام بعمل إعلانات رائعة لمنتجات متجري، ساهمت بشكل كبير في زيادة المبيعات. أسلوبه في المونتاج مميز وجذاب.",
          en: "Ahmed created amazing advertisements for my store products, which greatly contributed to increasing sales. His editing style is distinctive and attractive."
        }
      },
      {
        id: 3,
        name: {
          ar: "خالد عبدالله",
          en: "Khaled Abdullah"
        },
        position: {
          ar: "مؤثر على وسائل التواصل",
          en: "Social Media Influencer"
        },
        text: {
          ar: "تعاونت مع أحمد في عمل ريلز لحسابي على إنستجرام وتيك توك، وكانت النتائج أكثر من رائعة. محترف ويفهم متطلبات العمل بسرعة.",
          en: "I collaborated with Ahmed on creating reels for my Instagram and TikTok accounts, and the results were more than amazing. He's professional and quickly understands work requirements."
        }
      }
    ]
  },
  contact: {
    title: {
      ar: "تواصل معي",
      en: "Contact Me"
    },
    name: {
      ar: "الاسم",
      en: "Name"
    },
    email: {
      ar: "البريد الإلكتروني",
      en: "Email"
    },
    message: {
      ar: "الرسالة",
      en: "Message"
    },
    submit: {
      ar: "إرسال",
      en: "Submit"
    },
    whatsapp: {
      ar: "واتساب",
      en: "WhatsApp"
    },
    instagram: {
      ar: "إنستجرام",
      en: "Instagram"
    },
    tiktok: {
      ar: "تيك توك",
      en: "TikTok"
    },
    ytp :{
      ar: "يوتيوب",
      en: "Youtupe"
    }
  },
  popup: {
    title: {
      ar: "هل تحتاج لمونتير محترف؟",
      en: "Need a Professional Editor?"
    },
    description: {
      ar: "تواصل معي الآن على واتساب للحصول على خدمات مونتاج احترافية",
      en: "Contact me now on WhatsApp for professional editing services"
    },
    whatsapp: {
      ar: "تواصل عبر واتساب",
      en: "Contact via WhatsApp"
    },
    social: {
      ar: "تابعني على",
      en: "Follow me on"
    },
    close: {
      ar: "إغلاق",
      en: "Close"
    }
  },
  footer: {
    copyright: {
      ar: "© 2025 أحمد أسامة. جميع الحقوق محفوظة",
      en: "© 2025 Ahmed Osama. All rights reserved"
    }
  },
  nav: {
    home: {
      ar: "الرئيسية",
      en: "Home"
    },
    about: {
      ar: "عني",
      en: "About"
    },
    portfolio: {
      ar: "أعمالي",
      en: "Portfolio"
    },
    beforeAfter: {
      ar: "قبل وبعد",
      en: "Before & After"
    },
    testimonials: {
      ar: "آراء العملاء",
      en: "Testimonials"
    },
    contact: {
      ar: "تواصل",
      en: "Contact"
    },
    language: {
      ar: "English",
      en: "العربية"
    }
  }
};
