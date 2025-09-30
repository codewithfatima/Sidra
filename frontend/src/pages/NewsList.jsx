import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from 'react-icons/fa';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const NewsList = () => {
  const { t, i18n } = useTranslation();
  const [newsList, setNewsList] = useState([]);
  const currentLang = i18n.language || "en";

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await fetch(`${API_URL}/api/news`);
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

  return (
    <div>

      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900
         mb-3 mt-25 "
      >
        {t("latestNews")}
      </motion.h1>
      <span className="bg-yellow-500 w-16 h-1 rounded-full mx-auto block "></span>
      <div className="bg-yellow-500 mb-10">


        <div
          className="max-w-5xl mx-auto py-10 px-4 space-y-6 mt-15"
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



              const isArabic = currentLang === "ar";

              return (
                // <div
                //   key={news._id}
                //   className={`flex items-center gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
                //   style={{ flexDirection: isArabic ? "row-reverse" : "row" }}
                // >
                //   {(imageUrl || videoUrl) && (
                //     imageUrl ? (
                //       <img
                //         src={imageUrl}
                //         alt={title}
                //         className="w-48 h-32 object-cover rounded-md flex-shrink-0"
                //       />
                //     ) : (
                //       <video
                //         src={videoUrl}
                //         controls
                //         className="w-48 h-32 object-cover rounded-md flex-shrink-0"
                //       />
                //     )
                //   )}

                //   <div className="flex flex-col flex-grow">

                //     <span className="flex items-center text-sm text-black bg-yellow-500 w-fit px-3 py-1 rounded-xl shadow-md mb-4 space-x-2">
                //       <FaRegCalendarAlt className="text-black" />
                //       <span>{formatDate(news.date)}</span>
                //     </span>


                //     <h2 className="font-semibold text-xl mb-1 ">{title}</h2>
                //     <hr className="border-gray-300 mb-2" />
                //     <p className="text-gray-700 mb-3 truncate">{getExcerpt(desc)}</p>
                //     <Link
                //       to={`/news-detail/${news._id}`}
                //       className="text-red-600 font-semibold hover:underline self-start"
                //     >
                //       {t("Read more")}
                //     </Link>
                //   </div>
                // </div>


 

<div
  key={news._id}
  className={`flex bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300
    flex-col-reverse md:flex-row items-start gap-6`}
  style={{ flexDirection: isArabic ? undefined : undefined }} // remove inline flexDirection
>
  {/* Text content first on mobile because of flex-col-reverse */}
  <div className="flex flex-col flex-grow">

    <span className="flex items-center text-sm text-black bg-yellow-500 w-fit px-3 py-1 rounded-xl shadow-md mb-4 space-x-2">
      <FaRegCalendarAlt className="text-black" />
      <span>{formatDate(news.date)}</span>
    </span>

    <h2 className="font-semibold text-xl mb-1">{title}</h2>
    <hr className="border-gray-300 mb-2" />
    <p className="text-gray-700 mb-3">{getExcerpt(desc)}</p>
    <Link
      to={`/news-detail/${news._id}`}
      className="text-red-600 font-semibold self-start"
    >
      {t("Read more")}
    </Link>
  </div>

  {/* Image or video below text on mobile, side by side on desktop */}
  {(imageUrl || videoUrl) && (
    imageUrl ? (
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md flex-shrink-0 md:w-48 md:h-32"
      />
    ) : (
      <video
        src={videoUrl}
        controls
        className="w-full h-48 object-cover rounded-md flex-shrink-0 md:w-48 md:h-32"
      />
    )
  )}
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
