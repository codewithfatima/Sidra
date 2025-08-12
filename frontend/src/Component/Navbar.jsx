import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Logo from "../../src/assets/logo.png";
import Us from "../../src/assets/Us.png";
import Kw from "../../src/assets/Kw.png";

const navItems = [
  { titleKey: "home", path: "/" },
  {
    titleKey: "About",
    submenu: [
      { titleKey: "our_vision", path: "/about/vision" },
      { titleKey: "our_mission", path: "/about/mission" },
    ],
  },
  {
    titleKey: "our_schools",
    submenu: [
      {
        titleKey: "happy_land",
        path: "https://www.happylandkw.com/",
        external: true,
      },
      {
        titleKey: "my_nursery",
        path: "https://mynurserykw.com/",
        external: true,
      },
    ],
  },
  {
    titleKey: "company",
    submenu: [
      { titleKey: "about_sidra", path: "/company" },
      { titleKey: "company_owners", path: "/company/owners" },
      { titleKey: "locations", path: "/company/locations" },
    ],
  },
  { titleKey: "contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownTimeout = useRef(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isActive = (path) => location.pathname === path;
  const isSubmenuActive = (submenu) =>
    submenu.some((sub) => location.pathname === sub.path);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo + Mobile Language Switcher */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <img src={Logo} alt="Sidra Logo" className="h-12 w-12 object-contain" />
              <span className="text-sm font-bold sm:text-xl">{t("brand_name")}</span>
            </Link>
            <div className="flex items-center space-x-2 md:hidden ml-2">
              <button onClick={() => changeLanguage("en")} className="text-xs font-medium px-2 py-1 border rounded-md">
                <img src={Us} alt="EN" className="h-4 w-4 inline mr-1" />EN
              </button>
              <button onClick={() => changeLanguage("ar")} className="text-xs font-medium px-2 py-1 border rounded-md">
                <img src={Kw} alt="AR" className="h-4 w-4 inline mr-1" />AR
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 flex-1 justify-center">
            <ul className="flex space-x-6">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="relative group"
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
                      <button className={`font-medium ${isSubmenuActive(item.submenu) ? "text-indigo-600" : "text-gray-700 group-hover:text-indigo-600"}`}>
                        {t(item.titleKey)}
                        <svg className={`ml-1 inline h-4 w-4 transition-transform ${openDropdown === idx ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === idx && (
                        <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                          {item.submenu.map((sub, subIdx) => (
                            <li key={subIdx}>
                              {sub.external ? (
                                <a href={sub.path} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700" onClick={() => setOpenDropdown(null)}>
                                  {t(sub.titleKey)}
                                </a>
                              ) : (
                                <Link to={sub.path} className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700" onClick={() => setOpenDropdown(null)}>
                                  {t(sub.titleKey)}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link to={item.path} className={`font-medium ${isActive(item.path) ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`}>
                      {t(item.titleKey)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Language + Login */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => changeLanguage("en")} className="flex items-center gap-2 px-3 py-1.5 border rounded-md hover:text-indigo-600">
              <img src={Us} alt="EN" className="h-5 w-5" />EN
            </button>
            <button onClick={() => changeLanguage("ar")} className="flex items-center gap-2 px-3 py-1.5 border rounded-md hover:text-indigo-600">
              <img src={Kw} alt="AR" className="h-5 w-5" />AR
            </button>
            <Link to="/admin-login">
              <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" className="text-gray-700 hover:text-indigo-600">
              {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-md transition-all">
          <ul className="flex flex-col px-4 py-4 space-y-2">
            {navItems.map((item, idx) => (
              <li key={idx}>
                {!!item.submenu ? (
                  <details className="group">
                    <summary className="flex justify-between items-center px-2 py-2 font-medium hover:text-indigo-600 cursor-pointer">
                      {t(item.titleKey)}
                      <svg className="ml-2 h-4 w-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul className="pl-4 space-y-1">
                      {item.submenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          {sub.external ? (
                            <a href={sub.path} target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:text-indigo-600" onClick={() => setMobileOpen(false)}>
                              {t(sub.titleKey)}
                            </a>
                          ) : (
                            <Link to={sub.path} className={`block px-2 py-1 ${isActive(sub.path) ? "text-indigo-600" : "hover:text-indigo-600"}`} onClick={() => setMobileOpen(false)}>
                              {t(sub.titleKey)}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link to={item.path} className={`block px-2 py-2 font-medium ${isActive(item.path) ? "text-indigo-600 underline" : "hover:text-indigo-600"}`} onClick={() => setMobileOpen(false)}>
                    {t(item.titleKey)}
                  </Link>
                )}
              </li>
            ))}
            <Link to="/admin-login" className="px-2">
              <button className="bg-black text-white py-1 px-4 rounded-md w-full">Login</button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
