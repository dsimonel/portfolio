import React, { useState } from "react";
// import ScreenSize from "./ScreenSize";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";
import i18n from "../i18n";
import cv from "../assets/Academic_CV_DS.pdf";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaSkype,
} from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/daniel-6.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  function traducir() {
    console.log("Cambiar l");
    // locale === "en" ? changeLocale("es") : changeLocale("en");
    locale === "en"
      ? changeLocale("es")
      : locale === "es"
      ? changeLocale("it")
      : changeLocale("en");
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "60px" }} />
      </div>
{/* <ScreenSize /> */}
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            {t("home")}
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            {t("about")}
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            {t("skills")}
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            {t("work")}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            {t("contact")}
          </Link>
        </li>
        <button className="navButton bg-white text-black font-semibold rounded-lg w-[45px]" onClick={() => traducir()}>
        &nbsp;{t("language")}&nbsp;
        </button>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            {t("home")}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            {t("about")}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            {t("skills")}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            {t("work")}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            {t("contact")}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <button onClick={() => traducir()}>{t("language")}</button>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/daniel-simonelli-522709109/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/dsimonel"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.youtube.com/channel/UCCdtrmcCm7pseWANlYtKP4Q"
              rel="noreferrer"
              target="_blank"
            >
              Youtube <FaYoutube size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="skype:live:dsimonel"
              rel="noreferrer"
              target="_blank"
            >
              Skype <FaSkype size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#cf7724]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={cv}
              rel="noreferrer"
              target="_blank"            >
              {t('resume')} <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
