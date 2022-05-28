import React from "react";
// import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  faAngular,
  // faCss3,
  // faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faEthereum,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              {t("about")}
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>{t("hi")}</p>
            <div className="hidden lg:flex">
              <br></br>
              <br></br>
            </div>
            <div className="cubespinner hidden lg:flex">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faEthereum} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faNodeJs} color="#EC4D28" />
              </div>
            </div>
          </div>
          <div>
            <p align="LEFT">{t("me1")}</p>
            <p align="LEFT">{t("me2")}</p>
            <p align="LEFT">{t("me3")}</p>
            <p align="LEFT">{t("me4")}</p>
            <p align="LEFT">{t("me5")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
