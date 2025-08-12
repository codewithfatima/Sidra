import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">{t('footer.school_name')}</h2>
          <p className="text-gray-300">{t('footer.school_description')}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">{t('footer.quick_links')}</h3>
          <ul className="space-y-2 text-gray-300 ">
            <li><a href="/" className="hover:text-indigo-700">{t('home')}</a></li>
            <li><a href="/about-school" className="hover:text-indigo-700">{t('about_school')}</a></li>
            <li><a href="/news" className="hover:text-indigo-700">{t('news')}</a></li>
            <li><a href="/admission" className="hover:text-indigo-700">{t('admission')}</a></li>
            <li><a href="/contact" className="hover:text-indigo-700">{t('contact')}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3  text-white hover:text-indigo-700">{t('footer.contact')}</h3>
          <p className="text-gray-300 mt-2">{t('footer.address')}</p>
          <p className="text-gray-300 mt-2 ">{t('footer.email')}: info@sidraschool.edu</p>
          <p className="text-gray-300 ">{t('footer.phone')}: +123 456 7890</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white hover:text-indigo-700">{t('footer.follow_us')}</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-indigo-700"><FaFacebookF /></a>
            <a href="#" className="hover:text-indigo-700"><FaTwitter /></a>
            <a href="#" className="hover:text-indigo-700"><FaInstagram /></a>
            <a href="#" className="hover:text-indigo-700"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-600 pt-6">
        &copy; {new Date().getFullYear()} {t('footer.school_name')}. {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;
