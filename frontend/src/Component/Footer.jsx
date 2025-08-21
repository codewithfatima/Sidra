import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (

    <footer className="bg-black text-yellow-500 w-full border-t-4 border-yellow-500">
      <div className="px-4 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-10 py-15">


        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">{t('footer.school_name')}</h2>
          <p className="text-gray-300">{t('footer.school_description')}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-500">{t('footer.quick_links')}</h3>
          <ul className="space-y-2 text-gray-300 ">
            <li><a href="/" className="hover:text-[#f5bc00]">{t('home')}</a></li>
            <li><a href="/about-school" className="hover:text-[#f5bc00]">{t('about_school')}</a></li>
            <li><a href="/news" className="hover:text-[#f5bc00]">{t('news')}</a></li>
            <li><a href="/admission" className="hover:text-[#f5bc00]">{t('admission')}</a></li>
            <li><a href="/contact" className="hover:text-[#f5bc00]">{t('contact')}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-500">{t('footer.contact')}</h3>
          <p className="text-gray-300 mt-2">{t('footer.address')}</p>
          <p className="text-gray-300 mt-2">{t('footer.email')}: info@sidraschool.edu</p>
          <p className="text-gray-300">{t('footer.phone')}: +123 456 7890</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-500">{t('footer.follow_us')}</h3>
          <div className="flex space-x-4 text-xl ">
            <a href="#" className="text-white hover:bg-gray-200 hover:text-black bg-yellow-500 rounded-full px-4 py-4"><FaFacebookF /></a>
            <a href="#" className="text-white hover:bg-gray-200 hover:text-black bg-yellow-500 rounded-full px-4 py-4"><FaTwitter /></a>
            <a href="#" className="text-white hover:bg-gray-200 hover:text-black bg-yellow-500 rounded-full px-4 py-4"><FaInstagram /></a>
            <a href="#" className="text-white hover:bg-gray-200 hover:text-black bg-yellow-500 rounded-full px-4 py-4"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 pb-5 text-center text-sm text-gray-300 border-t border-yellow-600 pt-6">
        &copy; {new Date().getFullYear()} {t('footer.school_name')} . {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;
