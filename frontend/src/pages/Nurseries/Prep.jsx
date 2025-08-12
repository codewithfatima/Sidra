import React from 'react';
import { FaPuzzlePiece, FaBookOpen, FaChalkboardTeacher, FaPalette } from 'react-icons/fa';

const features = [
  {
    title: 'Foundational Learning',
    desc: 'Basic math, phonics, and language development.',
    icon: <FaBookOpen />,
    color: 'bg-yellow-100',
  },
  {
    title: 'Creative Play',
    desc: 'Hands-on learning through art, music & role play.',
    icon: <FaPalette />,
    color: 'bg-pink-100',
  },
  {
    title: 'Problem Solving',
    desc: 'Critical thinking through puzzles and group work.',
    icon: <FaPuzzlePiece />,
    color: 'bg-green-100',
  },
  {
    title: 'Caring Educators',
    desc: 'Certified teachers with passion for early education.',
    icon: <FaChalkboardTeacher />,
    color: 'bg-purple-100',
  },
];

const Prep = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-yellow-50 min-h-screen text-gray-800 font-sans">
      {/* Hero */}
      <section className="text-center py-16 px-4 bg-yellow-200 rounded-b-3xl shadow">
        <h1 className="text-4xl font-extrabold text-yellow-800 mb-3 mt-10">Welcome to Prep Class</h1>
        <p className="max-w-xl mx-auto text-lg text-yellow-900">
          Where young learners take their first steps into a structured learning journey — full of discovery, fun, and imagination.
        </p>
        <button className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition">
          Learn More
        </button>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-yellow-700 mb-10">Prep Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 ${item.color}`}
            >
              <div className="text-3xl mb-3 text-yellow-700">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-yellow-100 mt-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-4">Ready to start your child's journey?</h2>
        <p className="text-gray-700 mb-6">Join us for a prep class that builds confidence and curiosity from day one.</p>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full shadow">
          Contact Admissions
        </button>
      </section>
    </div>
  );
};

export default Prep;
