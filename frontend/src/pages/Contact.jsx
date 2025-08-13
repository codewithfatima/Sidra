import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Contact = () => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      inquiryType: '',
      message: '',
    },

   onSubmit: async (values, { resetForm }) => {
  try {
    // Send POST request directly with values as data payload
    const res = await axios.post("http://localhost:5000/api/contact", values);

    alert(res.data.message);
    resetForm('');
  } catch (error) {
    console.error(error);
    alert('Failed to send message. Please try again later.');
  }
},

  });

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-center items-center px-6 py-12 bg-gray-100 gap-12">
        <motion.div
          className="md:w-1/3 space-y-6 text-center md:text-left mt-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-black">{t('contactUs')}</h2>
          <p className="text-gray-600">{t('infoText')}</p>
        </motion.div>

        <motion.form
          onSubmit={formik.handleSubmit}
          className="md:w-1/2 bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg w-full space-y-4 lg:mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* First and Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="First Name*"
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name*"
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>

          {/* Phone */}
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number*"
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />

          {/* Inquiry Type */}
          <select
            name="inquiryType"
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none text-gray-600"
            value={formik.values.inquiryType}
            onChange={formik.handleChange}
          >
            <option value="">—Please choose an option—</option>
            <option value="inquiry">General Inquiry</option>
            <option value="support">Customer Support</option>
          </select>

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email Address*"
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none"
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message*"
            className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none resize-none"
            value={formik.values.message}
            onChange={formik.handleChange}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
