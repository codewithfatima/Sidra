import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const  VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const NewsList = () => {
  const { t, i18n } = useTranslation();
  const [newsList, setNewsList] = useState([]);
  const currentLang = i18n.language || "en";

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await fetch(`${ VITE_API_URL}/api/news`);
      const data = await res.json();
      setNewsList(data);
    } catch (err) {
      console.error("Failed to fetch news", err);
    }
  };

  const formatDate = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString(currentLang, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr?.split("T")[0] || "";
    }
  };

  const getExcerpt = (text) => {
    if (!text) return "";
    return text.length > 100 ? text.slice(0, 100) + "…" : text;
  };

  const isArabic = currentLang === "ar";

  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal overflow */}
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3 mt-24"
      >
        {t("latestNews")}
      </motion.h1>

      <span className="bg-yellow-500 w-16 h-1 rounded-full mx-auto block mb-6"></span>

      <div className="bg-yellow-500 pb-10">
        <div
          className="max-w-5xl mx-auto py-10 px-4 space-y-6"
          dir={currentLang === "ar" ? "rtl" : "ltr"}
        >
          {newsList.length === 0 ? (
            <p className="text-center text-gray-600">{t("No news available.")}</p>
          ) : (
            newsList.map((news) => {
              const title = currentLang === "ar" ? news.title_ar : news.title_en;
              const desc = currentLang === "ar" ? news.desc_ar : news.desc_en;
              const imageUrl = news.image ? `${API_URL}/uploads/${news.image}` : null;
              const videoUrl = news.video ? `${API_URL}/uploads/${news.video}` : null;

              return (
                <div
                  key={news._id}
                  className={`flex flex-col ${isArabic ? 'md:flex-row-reverse' : 'md:flex-row'} items-start md:items-center gap-4 md:gap-6 bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
                >
                  {(imageUrl || videoUrl) && (
                    imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={title}
                        className="w-full sm:w-40 md:w-48 h-auto max-h-40 object-cover rounded-md flex-shrink-0"
                      />
                    ) : (
                      <video
                        src={videoUrl}
                        controls
                        className="w-full sm:w-40 md:w-48 h-auto max-h-40 object-cover rounded-md flex-shrink-0"
                      />
                    )
                  )}

                  <div className="flex flex-col flex-grow w-full overflow-hidden ">
                    <span className="text-sm text-black bg-yellow-500 w-fit px-3 py-1 rounded-xl shadow-md mb-2">
                      {formatDate(news.date)}
                    </span>
                    <h2 className="font-semibold text-lg sm:text-xl mb-1">{title}</h2>
                    <hr className="border-gray-300 mb-2" />
                    <p className="text-gray-700 mb-3">{getExcerpt(desc)}</p>
                    <Link
                      to={`/news-detail/${news._id}`}
                      className="text-red-600 font-semibold hover:underline"
                    >
                      {t("Read more")}
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
