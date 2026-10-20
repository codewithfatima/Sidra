
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// export default function AdminLogin() {
//   const [form, setForm] = useState({
//     username: '',
//     password: ''
//   });

//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await fetch(`${API_URL}/api/admin/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Invalid credentials");
//         return;
//       }

//       localStorage.setItem("adminToken", data.token);

//       toast.success("Login successful!");

//       setTimeout(() => {
//         navigate("/add-news");
//       }, 1000);

//     } catch (err) {
//       console.error(err);
//       setError("Server not reachable");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">

//       <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 bg-white shadow-lg rounded-md space-y-6">

//         <h2 className="text-2xl font-bold text-center">Admin Login</h2>

//         {error && <p className="text-red-600 text-center">{error}</p>}

//         <input
//           name="username"
//           type="text"
//             dir="ltr"
//           placeholder="Username"
//           value={form.username}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded"
//           required
//         />

//         <div className="relative">
//           <input
//             name="password"
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />

//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-2 text-sm"
//           >
//             {showPassword ? "Hide" : "Show"}
//           </button>
//         </div>

//         <button className="w-full bg-black text-white py-2 rounded cursor-pointer">
//           Login
//         </button>

//       </form>

//       <ToastContainer position="top-center" />
//     </div>
//   );
// }





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function AdminLogin() {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const isArabic = i18n.resolvedLanguage?.startsWith("ar");

  const changeLanguage = async () => {
    const newLanguage = isArabic ? "en" : "ar";

    await i18n.changeLanguage(newLanguage);

    document.documentElement.lang = newLanguage;
    document.documentElement.dir =
      newLanguage === "ar" ? "rtl" : "ltr";
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || t("invalidCredentials"));
        return;
      }

      localStorage.setItem("adminToken", data.token);

      toast.success(t("loginSuccess"));

      setTimeout(() => {
        navigate("/add-news");
      }, 1000);
    } catch (err) {
      console.error(err);
      setError(t("serverError"));
    }
  };

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 bg-white shadow-lg rounded-md space-y-6"
      >
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold">
            {t("adminLogin")}
          </h2>

          <button
            type="button"
            onClick={changeLanguage}
            className="text-sm text-blue-600 hover:underline"
          >
            {isArabic ? "English" : "العربية"}
          </button>
        </div>

        {error && (
          <p role="alert" className="text-red-600 text-center">
            {error}
          </p>
        )}

        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium"
          >
            {t("username")}
          </label>

          <input
            id="username"
            name="username"
            type="text"
            dir="ltr"
            placeholder={t("username")}
            value={form.username}
            onChange={handleChange}
            autoComplete="username"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium"
          >
            {t("password")}
          </label>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              dir="ltr"
              placeholder={t("password")}
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              className="w-full px-4 py-2 pe-11 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={
                showPassword
                  ? t("hidePassword")
                  : t("showPassword")
              }
              aria-pressed={showPassword}
              className={`absolute top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-black ${
                isArabic ? "left-3" : "right-3"
              }`}
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer"
        >
          {t("login")}
        </button>
      </form>

      <ToastContainer position="top-center" />
    </div>
  );
}
