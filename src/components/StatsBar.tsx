import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

interface StatsBarProps {
  language: "ar" | "en";
  stats: {
    videos: number;
    views: number;
    likes: number;
  };
}

// ترجمة مختصرة للأرقام (1.2M, 2.4K ...)
const formatSuffix = (num: number): string => {
  if (num >= 1_000_000) return "M";
  if (num >= 1_000) return "K";
  return "";
};

const formatBase = (num: number): number => {
  if (num >= 1_000_000) return parseFloat((num / 1_000_000).toFixed(1));
  if (num >= 1_000) return parseFloat((num / 1_000).toFixed(1));
  return num;
};

export const StatsBar: React.FC<StatsBarProps> = ({ language, stats }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-100 p-6 rounded-2xl shadow-xl flex flex-col sm:flex-row justify-around items-center gap-6"
    >
      <StatBox
        value={stats.videos}
        label={language === "ar" ? "فيديو" : "Videos"}
        color="text-purple-600"
      />
      <StatBox
        value={stats.views}
        label={language === "ar" ? "مشاهدة" : "Views"}
        color="text-pink-500"
      />
      <StatBox
        value={stats.likes}
        label={language === "ar" ? "إعجاب" : "Likes"}
        color="text-red-500"
      />
    </motion.div>
  );
};

const StatBox = ({
  value,
  label,
  color,
}: {
  value: number;
  label: string;
  color: string;
}) => {
  const displayValue = formatBase(value);
  const suffix = formatSuffix(value);
  const showDecimal = suffix !== ""; // لو الرقم فيه K أو M، نعرض كسر

  return (
    <div className="text-center">
      <p className={`text-3xl sm:text-4xl font-bold ${color}`}>
        <CountUp
          end={displayValue}
          duration={5.5}
          decimals={showDecimal ? 1 : 0}
        />
        {suffix}
      </p>
      <p className="text-base sm:text-lg text-gray-600">{label}</p>
    </div>
  );
};
