import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from './variants'
import { FaCalendarAlt } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const ITEMS_PER_PAGE = 6;

const NewsCard = ({ language = "en" }) => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${API_URL}/api/news`);
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();

        const newsWithFullImagePath = data.map((item) => ({
          ...item,
          image: item.image
            ? (item.image.startsWith("http") ? item.image : `${API_URL}/uploads/${item.image}`)
            : null,
        }));

        setNewsData(newsWithFullImagePath);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNews();
  }, []);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const currentData = newsData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="bg-[#d67a0aff] py-16 px-4 md:px-20" dir={language === "ar" ? "rtl" : "ltr"}>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="text-3xl font-bold text-center text-black mb-10 font-poppins">
        {language === "ar" ? "آخر الأخبار" : "Latest News"}

        <span className="block w-20 h-1 rounded-lg mx-auto bg-black mt-3 "></span>
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {currentData.length === 0 ? (
          <p className="text-center col-span-full">
            {language === "ar" ? "لا توجد أخبار متاحة." : "No news available."}
          </p>
        ) : (
          currentData.map((item, idx) => (
            <div
              key={item._id || idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="relative">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={language === "ar" ? item.title_ar || item.title : item.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 bg-gray-300 flex items-center justify-center text-gray-500">
                    {language === "ar" ? "لا توجد صورة" : "No Image"}
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-yellow-400 text-black font-bold px-4 py-1 rounded-full text-sm shadow-md flex items-center">
                  <FaCalendarAlt className="inline-block mr-2" />
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#151f4b] mb-2">
                  {language === "ar" ? item.title_ar || item.title : item.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {language === "ar" ? item.desc_ar || item.desc : item.desc}
                </p>
              </div>
            </div>
          ))
        )}
      </motion.div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-3">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-300 disabled:opacity-50"
          >
            {language === "ar" ? "السابق" : "Prev"}
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-300 disabled:opacity-50"
          >
            {language === "ar" ? "التالي" : "Next"}
          </button>
        </div>
      )}
    </section>
  );
};

export default NewsCard;
