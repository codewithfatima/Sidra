import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { IoCall } from "react-icons/io5";
import { slideUpVariants, zoomInVariants } from '../Component/variants'
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";

import axios from 'axios';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

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
        const res = await axios.post("http://localhost:5000/api/contact", values);
        alert(res.data.message);
        resetForm();
      } catch (error) {
        console.error(error);
        alert('Failed to send message. Please try again later.');
      }
    },
  });

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 py-12 bg-gray-100 gap-12">
        {/* Contact Info Section */}
        <motion.div
          className={`md:w-1/3 space-y-6 text-center ${isArabic ? 'md:text-right' : 'md:text-left'} mt-10`}
          initial= "hidden"
          animate={{ opacity: 1, x: 0 }}
          whileInView = "visible"
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={ zoomInVariants}
        >
          <motion.h2 
          initial= "hidden"
          whileInView= "visible"
          variants={slideUpVariants}
          className="text-3xl font-bold text-black relative inline-block">
            {t('contactUs')}
            <span className={`block w-16 h-1 bg-yellow-500 mt-2 transform ${isArabic ? 'mr-9' : 'ml-9'} origin-left rounded-md`}></span>
          </motion.h2>

          <p className="text-gray-600 mt-4">{t('infoText')}</p>

          <div className="mt-6 space-y-3 text-gray-700 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-lg text-yellow-500 "><IoCall /></span>
              <span className='font-almarai tracking-wider'>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg text-yellow-500 "><MdOutlineMailOutline /></span>
              <span className='font-almarai tracking-wider'>contact@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg text-yellow-500"><GrLocationPin /></span>
              <span className='font-almarai tracking-wider '>1234 Elm Street, Some City, ST 12345</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={formik.handleSubmit}
          className="md:w-1/2 bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg w-full space-y-4 lg:mt-10"
          initial= "hidden"
          whileInView= "visible"
          variants={zoomInVariants}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* First and Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="firstName"
              type="text"
              placeholder={t('firstName')}
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            <input
              name="lastName"
              type="text"
              placeholder={t('lastName')}
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>

          {/* Phone */}
          <input
            name="phone"
            type="tel"
            placeholder={t('phoneNumber')}
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
            <option value="">{t('pleaseChoose')}</option>
            <option value="inquiry">{t('generalInquiry')}</option>
            <option value="support">{t('customerSupport')}</option>
          </select>

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder={t('emailAddress')}
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none"
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder={t('yourMessage')}
            className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none resize-none"
            value={formik.values.message}
            onChange={formik.handleChange}
          />

          <button
            type="submit"
            className='bg-yellow-500 font-semibold cursor-pointer text-white px-6 py-2 rounded-xl hover:bg-black hover:text-white transition-colors duration-300 w-full'
          >
            {t('sendMessage')}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;

