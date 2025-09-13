import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "../../src/assets/logo.png";
import Us from "../../src/assets/Us.png";
import Kw from "../../src/assets/Kw.png";

const navItems = [
  { titleKey: "home", path: "/" },
  {
    titleKey: "about_us",
    submenu: [
      { titleKey: "our_vision", path: "/about/vision" },
      { titleKey: "our_mission", path: "/about/mission" },
      { titleKey: "our_values", path: "/about/values" },
    ],
  },
  {
    titleKey: "our_sectors",
    submenu: [
      {
        titleKey: "happy_land",
        path: '/happyland'
      },
      {
        titleKey: "my_nursery",
        path: '/mynursery',
      },
    ],
  },
  {
    titleKey: 'news', path: "/news"
  },
  { titleKey: "contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const dropdownTimeout = useRef(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isActive = (path) => location.pathname === path;
  const isSubmenuActive = (submenu) =>
    submenu.some((sub) => location.pathname === sub.path);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    setShowLangDropdown(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 font-almarai">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="flex justify-between items-center h-16" >

          {/* Logo */}

          <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base whitespace-nowrap overflow-hidden">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:text-[#f5bc00] transition-colors duration-300 font-almarai"
            >
              <img
                src={Logo}
                alt="Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain"
              />

              <div className="flex items-center space-x-1 sm:space-x-2 font-bold text-black">
                <span className="text-base sm:text-xl lg:text-2xl">
                  {t("brand_sidra")}
                </span>
                <span className="text-yellow-500 text-base sm:text-xl lg:text-2xl">
                  {t("brand_international")}
                </span>
              </div>
            </Link>
          </div>



          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 flex-1 justify-center">
            <ul className="flex space-x-8">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="relative group text-lg"
                  onMouseEnter={() => {
                    clearTimeout(dropdownTimeout.current);
                    setOpenDropdown(idx);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
                  }}
                >
                  {!!item.submenu ? (
                    <>
                      <button
                        className={`font-almarai text-lg font-bold cursor-pointer transition-colors duration-300 ${isSubmenuActive(item.submenu)
                          ? "text-[#f5bc00]"
                          : "text-black group-hover:text-[#f5bc00]"
                          }`}
                      >
                        {t(item.titleKey)}
                        <svg
                          className={`ml-1 inline h-4 w-4 transition-transform ${openDropdown === idx ? "rotate-180" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === idx && (
                        <ul className="absolute left-0 mt-2 w-48 bg-white border-2 border-[#f5bc00] rounded-md shadow-lg z-50 font-almarai">
                          {item.submenu.map((sub, subIdx) => (
                            <li key={subIdx}>
                              {sub.external ? (
                                <a
                                  href={sub.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-4 py-2 text-black  hover:text-[#b8860b] hover:bg-yellow-100 rounded-md transition-colors duration-200"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {t(sub.titleKey)}
                                </a>
                              ) : (
                                <Link
                                  to={sub.path}
                                  className="block  px-4 py-2 font-bold text-black hover:bg-[#fff8cc] hover:text-[#b8860b] rounded-md transition-colors duration-200"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {t(sub.titleKey)}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-almarai font-bold transition-colors duration-300 ${isActive(item.path)
                        ? "text-[#f5bc00]"
                        : "text-black hover:text-[#f5bc00] text-lg"
                        }`}
                    >
                      {t(item.titleKey)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Language Dropdown */}
          <div className="relative m-4 font-almarai">
            <button
              onClick={() => setShowLangDropdown((prev) => !prev)}
              className="bg-yellow-500 text-white rounded-full p-2 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300"
            >
              <GrLanguage size={20} />
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-[#f5bc00] rounded-md shadow-md z-50 font-almarai">
                <button
                  onClick={() => changeLanguage("en")}
                  className="font-almarai flex items-center gap-2 px-3 py-1.5 w-full hover:bg-[#fff8cc] hover:text-[#b8860b] rounded-md cursor-pointer transition-colors duration-200"
                >
                  <img src={Us} alt="EN" className="h-5 w-5" />
                  English
                </button>
                <button
                  onClick={() => changeLanguage("ar")}
                  className="font-almarai flex items-center gap-2 px-3 py-1.5 w-full hover:bg-[#fff8cc] hover:text-[#b8860b] rounded-md cursor-pointer transition-colors duration-200"
                >
                  <img src={Kw} alt="AR" className="h-5 w-5" />
                  العربية
                </button>
              </div>
            )}
          </div>

          {/* Login */}
          <Link to="/admin-login" className="hidden md:block font-almarai">
            <motion.button
              whileHover={{ scale: 1.1, }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: " spring", stiffness: 300 }}
              className="bg-yellow-400 text-black py-2 px-4 font-bold rounded-md hover:bg-black hover:text-white cursor-pointer transition-colors duration-300">
              Login
            </motion.button>
          </Link>

          {/* Mobile Toggle */}
          <div className="md:hidden font-almarai  ">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
              className="cursor-pointer text-yellow-400 hover:text-[#f5bc00] transition-colors duration-300 mr-7"
            >
              {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* {/* Mobile Menu */}
      <div
        className={`
    md:hidden bg-white border-t border-[#f5bc00] shadow-md font-almarai
    transition-all duration-500 ease-in-out overflow-hidden 
    ${mobileOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
  `}
      >
        <ul className="flex flex-col px-3 py-4 space-y-2 ">
          {navItems.map((item, idx) => (
            <li key={idx}>
              {item.submenu ? (
                <details className="group">
                  <summary className="flex justify-between items-center h-16 px-4 sm:px-8 py-2 text-md font-bold  cursor-pointer text-black hover:text-[#f5bc00] transition-colors duration-300">
                    {t(item.titleKey)}
                    <svg
                      className="ml-2 h-4 w-4 group-open:rotate-180 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <ul className="pl-4 space-y-1 font-almarai">
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        {sub.external ? (
                          <a
                            href={sub.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-2 py-1 text-black hover:text-[#f5bc00] transition-colors duration-300"
                            onClick={() => setMobileOpen(false)}
                          >
                            {t(sub.titleKey)}
                          </a>
                        ) : (
                          <Link
                            to={sub.path}
                            className={`block font-bold text-md px-2 py-1 ${isActive(sub.path)
                              ? 'text-[#f5bc00]'
                              : 'hover:text-[#f5bc00]'
                              } transition-colors duration-300`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {t(sub.titleKey)}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  to={item.path}
                  className={`block px-2 py-2 font-bold ${isActive(item.path)
                    ? 'text-[#f5bc00]'
                    : 'hover:text-[#f5bc00]'
                    } transition-colors duration-300`}
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.titleKey)}
                </Link>
              )}
            </li>
          ))}

          <Link to="/admin-login" className="px-2 mt-3">
            <button
              className="bg-[#f5bc00] font-bold text-black py-2 px-4 rounded-md w-full hover:bg-yellow-500 transition-colors duration-300"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </button>
          </Link>
        </ul>
      </div>


    </nav>
  );
};

export default Navbar;
