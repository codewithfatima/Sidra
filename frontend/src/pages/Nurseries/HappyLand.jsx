import React from 'react';
import { FaChild, FaChalkboardTeacher, FaPaintBrush, FaTree } from 'react-icons/fa';

const features = [
  {
    title: 'Creative Learning',
    icon: <FaPaintBrush />,
    desc: 'Art, music & play-based learning activities.',
    color: 'bg-pink-200',
  },
  {
    title: 'Outdoor Playground',
    icon: <FaTree />,
    desc: 'Safe outdoor spaces for fun and exercise.',
    color: 'bg-green-200',
  },
  {
    title: 'Caring Teachers',
    icon: <FaChalkboardTeacher />,
    desc: 'Qualified and loving early-years staff.',
    color: 'bg-yellow-200',
  },
  {
    title: 'Happy Environment',
    icon: <FaChild />,
    desc: 'Joyful and nurturing atmosphere every day.',
    color: 'bg-purple-200',
  },
];

const HappyLand = () => {
  return (
    <div className="bg-pink-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-br from-pink-200 to-pink-100 ">
        <h1 className="text-4xl font-extrabold text-pink-700 mb-4 mt-10">Welcome to HappyLand Nursery</h1>
        <p className="max-w-xl mx-auto text-lg text-pink-800">
          A magical place where learning begins with love, laughter, and creativity.
        </p>
        <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition">
          Book a Visit
        </button>
      </section>

      {/* Features */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 text-pink-700">Why Choose HappyLand?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:scale-105 ${feature.color}`}
            >
              <div className="text-3xl mb-3 text-pink-700">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-4 bg-pink-100 mt-12">
        <h2 className="text-2xl font-bold text-pink-800 mb-4">Let’s grow together at HappyLand!</h2>
        <p className="max-w-xl mx-auto text-pink-700 mb-6">
          Contact us today to schedule a visit and see why our nursery is the perfect place for your child.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default HappyLand;
