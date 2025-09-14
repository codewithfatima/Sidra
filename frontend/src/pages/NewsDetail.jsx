import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const  VITE_API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const NewsDetail = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentLang = i18n.language || "en";

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const res = await fetch(`${VITE_API}/api/news/${id}`);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setNewsItem(data);
      } catch (err) {
        console.error("Failed to fetch news detail", err);
        setNewsItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

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
console.log("Fetching news detail for ID:", id);
console.log(`${API_URL}/api/news/${id}`);

  const isArabic = currentLang === "ar";

  if (loading) return <p className="text-center mt-10">{t("Loading")}...</p>;
  if (!newsItem) return <p className="text-center mt-10 text-red-600 mt-50">{t("News not found.")}</p>;

  const title = isArabic ? newsItem.title_ar : newsItem.title_en;
  const desc = isArabic ? newsItem.desc_ar : newsItem.desc_en;
  const imageUrl = newsItem.image ? `${API_URL}/uploads/${newsItem.image}` : null;
  const videoUrl = newsItem.video ? `${API_URL}/uploads/${newsItem.video}` : null;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 mt-20" dir={isArabic ? "rtl" : "ltr"}>
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← {t("Back to News List")}
      </Link>

      <span className="text-sm text-black block mb-4 bg-yellow-500 w-30 px-3 py-2 rounded-lg ">{formatDate(newsItem.date)}</span>
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-md mb-6"
        />
      )}
      {videoUrl && (
        <video
          src={videoUrl}
          controls
          className="w-full h-auto rounded-md mb-6"
        />
      )}

      <p className="text-gray-800 leading-relaxed whitespace-pre-line text-base md:text-lg">
        {desc}
      </p>
    </div>
  );
};

export default NewsDetail;
