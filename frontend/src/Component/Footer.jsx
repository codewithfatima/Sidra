import React from 'react';
import { Link }  from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (

    <footer className="bg-black text-[#f5bc00] w-full border-t-4 border-[#f5bc00]">
      <div className="px-4 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-10 py-15">


        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#f5bc00]">{t('footer.school_name')}</h2>
          <p className="text-gray-300">{t('footer.school_description')}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#f5bc00]">{t('footer.quick_links')}</h3>
          <ul className="space-y-2 text-gray-300 ">
            <li><a href="/" className="hover:text-[#f5bc00]">{t('home')}</a></li>
            <li><a href="/news" className="hover:text-[#f5bc00] mb-1">{t('news')}</a></li>
            <li><a href="/contact" className="hover:text-[#f5bc00]">{t('contact')}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#f5bc00]">{t('footer.contact')}</h3>
          <p className="text-gray-300 mt-2">{t('footer.address')}</p>
          <p className="text-gray-300 mt-2 mb-2">{t('footer.email')}</p>
          <p className="text-gray-300">{t('footer.phone')}</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#f5bc00]">
            {t('footer.follow_us')}
          </h3>

          <div className="flex flex-wrap gap-3 sm:gap-4 text-xl">
            <a
              href="#"
              className="text-white hover:bg-gray-200 hover:text-black bg-yellow-500 rounded-full p-3 sm:px-4 sm:py-4"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-200 hover:text-black bg-yellow-500 rounded-full p-3 sm:px-4 sm:py-4"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/sidra_int/?utm_source=ig_web_button_share_sheet&igsh=MTVhZHR3ZDJmNmZqZQ%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:bg-gray-200 hover:text-black bg-yellow-500 rounded-full p-3 sm:px-4 sm:py-4"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/sidra-int/"
              target='_blank'
              className="text-white hover:bg-gray-200 hover:text-black bg-yellow-500 rounded-full p-3 sm:px-4 sm:py-4"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>


      </div>
      {/* Bottom line */}
      <div className="mt-12 pb-5 text-center text-sm text-gray-300 border-t border-yellow-500 pt-6">
        &copy; {new Date().getFullYear()} {t('footer.school_name')} . {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;