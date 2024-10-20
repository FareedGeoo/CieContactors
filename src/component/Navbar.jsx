import React from "react";
import logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const { t, i18n } = useTranslation();
  if (i18n.language === "ar") {
    document.body.style.direction = "rtl";
  } else if (i18n.language === "en") {
    document.body.style.direction = "ltr";
  }

  const location = useLocation();
  return (
    <div className="fixed-top">
      <div className=" bg-primary py-1">
        <div className="container">
          <div className=" d-flex justify-content-between align-items-center">
            <ul className="d-flex gap-2 m-0">
              <li>
                <div className="d-flex text-white  phone ">
                  <i class="fa-solid fa-phone mx-2 fs-5"></i>
                  {/* <span className='mx-2'>{t("Phone")}:</span> */}
                  <p className="m-0">24177846 - 26902534</p>
                </div>
              </li>
              <li>
                <div className="d-flex text-white email ">
                  <i class="fa-solid fa-square-envelope mx-2 fs-5"></i>
                  {/* <span className='mx-2'>{t("E-mail")}:</span> */}
                  <p className="m-0">cie_contractors@yahoo.com</p>
                </div>
              </li>
            </ul>
            <div class="footer-social-icons  m-0">
              <ul class="social-icons m-0">
                <li className="px-2">
                  <a href="" class="social-icon">
                    {" "}
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href="" class="social-icon">
                    {" "}
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href="" class="social-icon">
                    {" "}
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg nav-bg ">
        <div className="container">
          <img className="logo" src={logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContentfareeed"
          >
            {location.pathname === "/" ? (
              <ul
                className={
                  i18n.language == "ar"
                    ? "navbar-nav me-auto mb-2 mb-lg-0"
                    : "navbar-nav ms-auto mb-2 mb-lg-0"
                }
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                  >
                    {t("home")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#services">
                    {t("services")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#about">
                    {t("about")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#projects">
                    {t("projects")}
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" aria-current="page" href="#contact">
                    {t("contact")}
                  </a>
                </li>
                <select
                  className={
                    i18n.language == "ar"
                      ? "form-select lang-menu-ltr"
                      : "form-select lang-menu"
                  }
                  onChange={(e) => {
                    i18n.changeLanguage(e.target.value);
                  }}
                  name=""
                  id=""
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                </select>
              </ul>
            ) : (
              <ul
                className={
                  i18n.language == "ar"
                    ? "navbar-nav me-auto mb-2 mb-lg-0"
                    : "navbar-nav ms-auto mb-2 mb-lg-0"
                }
              >
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                    to={"/"}
                  >
                    {t("home")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#about"
                    to={"/"}
                  >
                    {t("about")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#projects"
                    to={"/"}
                  >
                    {t("projects")}
                  </Link>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " href="#contact">
                    {t("contact")}
                  </a>
                </li>
                <select
                  className={
                    i18n.language == "ar"
                      ? "form-select lang-menu-ltr"
                      : "form-select lang-menu"
                  }
                  onChange={(e) => {
                    window.localStorage.language = e.target.value;
                    i18n.changeLanguage(e.target.value);
                  }}
                  value={i18n.language}
                  name=""
                  id=""
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                </select>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
