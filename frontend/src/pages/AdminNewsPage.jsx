import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function AdminNewsPage() {
  const [newsList, setNewsList] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  
  const fetchNews = async () => {
    try {
      const res = await fetch(`${API_URL}/api/news`);
      const data = await res.json();
      setNewsList(data);
    } catch (err) {
      toast.error("Failed to fetch news.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("date", date);
      if (imageFile) {
        formData.append("image", imageFile);
      }

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
        toast.success(editingId ? "News updated successfully!" : "News created!");
        setTitle("");
        setDesc("");
        setDate("");
        setImageFile(null);
        setEditingId(null);
        fetchNews();
      } else {
        const data = await res.json();
        toast.error(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  const handleEdit = (news) => {
    setTitle(news.title);
    setDesc(news.desc);
    setDate(news.date);
    setEditingId(news._id);
    setImageFile(null);
  };

  return (
    <div className="min-h-screen pt-30 p-8 text-blue-900 max-w-3xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-6">
        {editingId ? "Edit News" : "Create News"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-900 p-6 rounded-md"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        />

        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={4}
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        />

        <input
          type="text"
          placeholder="Date (e.g. 02 Aug)"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="text-white"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-md font-semibold text-white"
        >
          {editingId ? "Update News" : "Create News"}
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4 text-white">All News</h2>
        {newsList.length === 0 ? (
          <p className="text-gray-300">No news available.</p>
        ) : (
          <ul className="space-y-4">
            {newsList.map((news) => (
              <li
                key={news._id}
                className="bg-gray-800 p-4 rounded-md border border-gray-700"
              >
                <h3 className="font-semibold text-lg">{news.title}</h3>
                <p className="text-gray-300">{news.desc}</p>
                <p className="text-gray-400 text-sm">Date: {news.date}</p>

                {news.image && (
                  <img
                    src={`${API_URL}/uploads/${news.image}`}
                    alt={news.title}
                    className="mt-2 h-40 w-full object-cover rounded-md"
                  />
                )}

                <button
                  onClick={() => handleEdit(news)}
                  className="mt-2 text-blue-400 hover:underline"
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

    <ToastContainer position="top-right" />

    </div>
  );
}
