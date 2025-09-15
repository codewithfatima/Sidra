import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";


export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 sec timeout

  try {
    const res = await fetch(`${API_URL}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId); // Clear timeout if request finishes

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('adminToken', data.token);
      toast.success('Admin login successful!');
      setTimeout(() => {
        navigate('/add-news');
      }, 1000);
    } else {
      setError(data.message || 'Login failed');
    }
  } catch (err) {
    console.error('Login error:', err);
    if (err.name === 'AbortError') {
      setError('Login timed out. Please try again.');
    } else {
      setError('Server error');
    }
  }
};

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError('');

//   try {
//     const res = await fetch(`${API_URL}/api/admin/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       localStorage.setItem('adminToken', data.token);
//       toast.success('Admin login successful!');
//       setTimeout(() => {
//         navigate('/add-news');
//       }, 1000);
//     } else {
//       setError(data.message || 'Login failed');
//     }
//   } catch (err) {
//     console.error('Login error:', err);
//     setError('Server error');
//   }
// };

const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 bg-white shadow-lg rounded-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Admin Login</h2>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
           type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Login
        </button>
      </form>

      <ToastContainer position="top-center" />
    </div>
  );
}
