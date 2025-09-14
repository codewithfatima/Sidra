import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaEdit, FaTrashAlt, FaPlusCircle, FaSave } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from 'react-i18next';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function AdminNewsPage() {
  const { t, i18n } = useTranslation();
  const [newsList, setNewsList] = useState([]);

  const [title_en, setTitleEn] = useState("");
  const [title_ar, setTitleAr] = useState("");
  const [desc_en, setDescEn] = useState("");
  const [desc_ar, setDescAr] = useState("");
  const [date, setDate] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState("add");

  const currentLang = i18n.language || "en";

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await fetch(`${API_URL}/api/news`);
      const data = await res.json();
      console.log("Fetched news:", data);  // debug
      setNewsList(data);
    } catch (err) {
      console.error("fetchNews error:", err);
      toast.error(t("Failed to fetch news."));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // **Debug logging**
    console.log("Submitting with values:", { 
      title_en, title_ar, desc_en, desc_ar, date, editingId 
    });

    // require all fields
    if (!title_en.trim() || !title_ar.trim() || !desc_en.trim() || !desc_ar.trim() || !date) {
      toast.error(t("Please fill out all Title, Description, and Date fields."));
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title_en", title_en);
      formData.append("title_ar", title_ar);
      formData.append("desc_en", desc_en);
      formData.append("desc_ar", desc_ar);
      formData.append("date", date);

      if (imageFile) formData.append("image", imageFile);
      if (videoFile) formData.append("video", videoFile);

      const method = editingId ? "PUT" : "POST";
      const url = editingId
        ? `${API_URL}/api/news/${editingId}`
        : `${API_URL}/api/news`;

      const token = localStorage.getItem("adminToken");

      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (res.ok) {
        toast.success(editingId ? t("News updated!") : t("News created!"));
        resetForm();
        fetchNews();
        setActiveTab("list");
      } else {
        const dataResp = await res.json();
        console.error("Error response:", dataResp);
        toast.error(dataResp.message || t("Error submitting news."));
      }
    } catch (err) {
      console.error("submit error:", err);
      toast.error(t("Server error"));
    }
  };

  const handleEdit = (news) => {
    console.log("Editing news item:", news); // debug
    setTitleEn(news.title_en || "");
    setTitleAr(news.title_ar || "");
    setDescEn(news.desc_en || "");
    setDescAr(news.desc_ar || "");
    setDate(news.date ? news.date.split("T")[0] : "");
    setEditingId(news._id);
    setImageFile(null);
    setVideoFile(null);
    setActiveTab("add");
  };

  const handleDelete = async (id) => {
    if (!window.confirm(t("Are you sure you want to delete this news?"))) return;

    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`${API_URL}/api/news/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        toast.success(t("News deleted!"));
        fetchNews();
      } else {
        const dataResp = await res.json();
        toast.error(dataResp.message || t("Delete failed."));
      }
    } catch (err) {
      console.error("delete error:", err);
      toast.error(t("Server error"));
    }
  };

  const resetForm = () => {
    setTitleEn("");
    setTitleAr("");
    setDescEn("");
    setDescAr("");
    setDate("");
    setImageFile(null);
    setVideoFile(null);
    setEditingId(null);
  };

  return (
  <div className="min-h-screen py-12 px-4 max-w-4xl mx-auto text-gray-800">
    <h1 className="text-4xl font-extrabold mb-10 text-center text-yellow-500 mt-10">
      {t("Admin - News Panel")}
    </h1>

    {/* Tabs */}
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => setActiveTab("add")}
        className={`px-6 py-2 rounded-md font-semibold transition duration-200 ${
          activeTab === "add"
            ? "bg-yellow-500 text-white shadow"
            : "bg-gray-200 text-gray-700 hover:bg-yellow-100"
        }`}
      >
        {t("Add News")}
      </button>
      <button
        onClick={() => setActiveTab("list")}
        className={`px-6 py-2 rounded-md font-semibold transition duration-200 ${
          activeTab === "list"
            ? "bg-yellow-500 text-white shadow"
            : "bg-gray-200 text-gray-700 hover:bg-yellow-100"
        }`}
      >
        {t("All News")}
      </button>
    </div>

    {/* Add/Edit Form */}
    {activeTab === "add" ? (
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md space-y-6 border border-gray-200"
        dir={currentLang === "ar" ? "rtl" : "ltr"}
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          {editingId ? t("Edit News") : t("Add News")}
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder={t("News Title (English)")}
            value={title_en}
            onChange={(e) => setTitleEn(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />

          <input
            type="text"
            placeholder={t("News Title (Arabic)")}
            value={title_ar}
            onChange={(e) => setTitleAr(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />

          <textarea
            placeholder={t("News Description (English)")}
            value={desc_en}
            onChange={(e) => setDescEn(e.target.value)}
            rows={4}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />

          <textarea
            placeholder={t("News Description (Arabic)")}
            value={desc_ar}
            onChange={(e) => setDescAr(e.target.value)}
            rows={4}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />

          <div>
            <label className="block mb-1 font-semibold text-gray-600">{t("Image (optional)")}</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-600">{t("Video (optional)")}</label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded-md flex items-center justify-center gap-2 shadow-md transition duration-200"
        >
          {editingId ? <><FaSave /> {t("Update News")}</> : <><FaPlusCircle /> {t("Create News")}</>}
        </button>
      </form>
    ) : (
      // News List
      <div className="space-y-6" dir={currentLang === "ar" ? "rtl" : "ltr"}>
        {newsList.length === 0 ? (
          <p className="text-gray-500 text-center">{t("No news available.")}</p>
        ) : (
          newsList.map((news) => (
            <div
              key={news._id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 space-y-2"
            >
              <h3 className="font-bold text-xl text-yellow-600">
                {currentLang === "ar"
                  ? news.title_ar || news.title_en
                  : news.title_en || news.title_ar}
              </h3>
              <p className="text-gray-800">
                {currentLang === "ar"
                  ? news.desc_ar || news.desc_en
                  : news.desc_en || news.desc_ar}
              </p>
              <p className="text-sm text-gray-500">{t("Date")}: {news.date?.split("T")[0]}</p>

              {news.image && (
                <img
                  src={`${API_URL}/uploads/${news.image}`}
                  alt="news-img"
                  className="h-40 object-cover rounded-md w-full"
                />
              )}

              {news.video && (
                <video controls className="mt-2 w-full rounded-md">
                  <source src={`${API_URL}/uploads/${news.video}`} type="video/mp4" />
                  {t("Your browser does not support the video tag.")}
                </video>
              )}

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleEdit(news)}
                  className="bg-blue-100 text-blue-600 hover:bg-blue-200 px-4 py-1 rounded-md flex items-center gap-2 transition"
                >
                  <FaEdit /> {t("Edit")}
                </button>
                <button
                  onClick={() => handleDelete(news._id)}
                  className="bg-red-100 text-red-600 hover:bg-red-200 px-4 py-1 rounded-md flex items-center gap-2 transition"
                >
                  <FaTrashAlt /> {t("Delete")}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    )}

    <ToastContainer position="top-right" />
  </div>
);

}
