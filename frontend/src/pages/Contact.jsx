import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      inquiryType: '',
      message: '',
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },

    validate: (values) => {
      const errors = {};
      if (!values.firstName) errors.firstName = 'Required';
      if (!values.lastName) errors.lastName = 'Required';
      if (!values.phone) errors.phone = 'Required';
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      if (!values.inquiryType) errors.inquiryType = 'Required';
      if (!values.message) errors.message = 'Required';
      return errors;
    },
  });

  return (
    <div className=''>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 py-12 bg-gray-100 gap-12 ">
        {/* Left Info Panel */}
        <motion.div
          className="md:w-1/3 space-y-6 text-center md:text-left mt-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-black">CONTACT US</h2>
          <p className="text-gray-600">
            If you cannot find the information that you need on our website, please contact us.
          </p>

          <div className="space-y-4 mt-6">
            <div>
              <p className="text-pink-600 font-semibold">📞 Phone</p>
              <p className="text-gray-800">1811811</p>
            </div>
            <div>
              <p className="text-orange-500 font-semibold">📍 Head Office</p>
              <p className="text-gray-800">Arabian Gulf St., Salmiya</p>
            </div>
            <div>
              <p className="text-indigo-500 font-semibold">✉️ Email</p>
              <p className="text-gray-800">info@dsidrunternational</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={formik.handleSubmit}
          className="md:w-1/2 bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg w-full space-y-4 lg:mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                className="w-full p-3 rounded-full border border-gray-300 focus:outline-none"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              {formik.errors.firstName && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                className="w-full p-3 rounded-full border border-gray-300 focus:outline-none"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
              {formik.errors.lastName && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
              )}
            </div>
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            {formik.errors.phone && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
            )}
          </div>

          <div>
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
            {formik.errors.inquiryType && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.inquiryType}</div>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>

          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message*"
              className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none resize-none"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            {formik.errors.message && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-black text-white font-semibold hover:from-pink-500 hover:to-pink-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>



  );
};

export default Contact;





















