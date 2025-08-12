import React from 'react';
import { FaSmile, FaBook, FaHandsHelping, FaSeedling } from 'react-icons/fa';

const MyNursery = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-pink-100 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-pink-200 rounded-b-3xl shadow-md">
        <h1 className="text-4xl font-extrabold text-pink-800 mb-4 mt-10">Welcome to MyNursery</h1>
        <p className="text-lg max-w-2xl mx-auto text-pink-900">
          Where little dreams grow big! A joyful place filled with learning, care, and creativity.
        </p>
        <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition shadow">
          Explore More
        </button>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-10">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <FeatureCard
            icon={<FaSmile />}
            title="Safe & Happy"
            desc="A nurturing and secure environment for every child."
            color="bg-pink-100"
          />
          <FeatureCard
            icon={<FaBook />}
            title="Creative Learning"
            desc="Interactive activities that inspire early curiosity."
            color="bg-yellow-100"
          />
          <FeatureCard
            icon={<FaHandsHelping />}
            title="Loving Teachers"
            desc="Qualified caregivers who support every child's journey."
            color="bg-green-100"
          />
          <FeatureCard
            icon={<FaSeedling />}
            title="Growth & Play"
            desc="Daily routines that balance education and fun."
            color="bg-purple-100"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">About MyNursery</h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg">
          MyNursery is a place where young minds blossom. We focus on emotional, social, and cognitive development through engaging activities and personal attention.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-pink-100 py-12 text-center">
        <h3 className="text-xl font-semibold text-pink-800 mb-4">Join Our Nursery Family</h3>
        <p className="text-gray-700 mb-6">
          Let’s create a beautiful beginning for your child together.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full shadow">
          Contact Us
        </button>
      </section>
    </div>
  );
};

// Feature card component
const FeatureCard = ({ icon, title, desc, color }) => (
  <div
    className={`rounded-xl p-6 shadow hover:shadow-xl transform transition hover:scale-105 ${color}`}
  >
    <div className="text-3xl text-pink-700 mb-3">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-700">{desc}</p>
  </div>
);

export default MyNursery;
