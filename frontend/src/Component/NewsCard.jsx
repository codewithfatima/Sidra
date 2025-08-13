import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const ITEMS_PER_PAGE = 6;

const NewsCard = () => {
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

  // Calculate total pages
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  // Slice data for current page
  const currentData = newsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handlers for page change
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center text-black mb-10">Latest News</h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentData.length === 0 ? (
          <p className="text-center col-span-full">No news available.</p>
        ) : (
          currentData.map((item, idx) => (
            <motion.div
              key={item._id || idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 bg-gray-300 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-yellow-400 text-black font-bold px-4 py-1 rounded-full text-sm shadow-md">
                  <FaCalendarAlt className="inline-block mr-2" />
                  {item.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#151f4b] mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-3">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
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
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default NewsCard;
