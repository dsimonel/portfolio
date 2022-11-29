import React, { useState, useEffect, useMemo } from "react";
import WorkItem from "./WorkItem";
import fpmt from "../assets/fpmt.jpg";
import Booking from "../assets/Booking.jpg";
// import MLR from "../assets/MLR.jpg";
import mymusic from "../assets/mymusic-4.jpg";
import TP from "../assets/TP.jpg";
import myadmin from "../assets/myadmin.jpg";
import CoinMarketCap from "../assets/CMC-2.jpg";
import BackArrow from "../assets/left-arrow.png";
import ForwardArrow from "../assets/right-arrow.png";
import Guasap from "../assets/guasap.jpg";
import CryptoBooks from "../assets/cryptobooks.jpg";
import { useTranslation } from "react-i18next";

const Work = () => {
  const [numPage, setNumPage] = useState(0);
  const { t } = useTranslation();

  const WorkItemData = useMemo(() => ([
    {
      id: 0,
      imgLink: fpmt,
      workType: t("phpapp"),
      workDesc: t("wd1"),
      firstButton: "Demo",
      secondButton: "Website",
      href1: "https://youtu.be/7oPGP7NI-1o",
      href2: "https://tibetan.ueuo.com/fpmt/guest.php",
    },
    {
      id: 6,
      imgLink: Guasap,
      workType: "React/Firebase",
      workDesc: t("wd7"),
      firstButton: t("code"),
      secondButton: "Website",
      href1: "https://github.com/dsimonel/guasap",
      href2: "https://dsimonel.github.io/guasap/",
    },
    {
      id: 2,
      imgLink: TP,
      workType: t("phpapp"),
      workDesc: t("wd3"),
      firstButton: "Code",
      secondButton: "Website",
      href1: "#",
      href2: "http://tashipedeb.ueuo.com/index.php",
    },
    {
      id: 7,
      imgLink: CryptoBooks,
      workType: "React/Firebase/Google Cloud",
      workDesc: t("wd8"),
      firstButton: "Code",
      secondButton: "Website",
      href1: "#",
      href2: "https://cryptobooks-clone.rj.r.appspot.com/",
    },
    {
      id: 3,
      imgLink: myadmin,
      workType: "React JS/Tailwind",
      workDesc: t("wd4"),
      firstButton: t("code"),
      secondButton: "Website",
      href1: "https://github.com/dsimonel/admin-react",
      href2: "https://dsimonel.github.io/admin-react",
    },
    {
      id: 4,
      imgLink: mymusic,
      workType: "React/Docker/Google Cloud",
      workDesc: t("wd5"),
      firstButton: "Demo",
      secondButton: "Website",
      href1: "https://www.youtube.com/watch?v=qN_JH_10i6k&t=58s",
      href2: "http://danielsimonelli.orgfree.com/mymusic/index.html",
    },
    {
      id: 5,
      imgLink: Booking,
      workType: "React/Mongo/Heroku",
      workDesc: t("wd6"),
      firstButton: t("code"),
      secondButton: "Website",
      href1: "https://github.com/dsimonel/mybooking-ui-react",
      href2: "https://dsimonel.github.io/mybooking-react/",
    },
    {
      id: 1,
      imgLink: CoinMarketCap,
      workType: "Solidity/React/Heroku",
      workDesc: t("wd2"),
      firstButton: t("code"),
      secondButton: "Website",
      href1: "https://github.com/dsimonel/web3_coinmarketcap",
      href2: "http://danielsimonelli.orgfree.com/cmc/index.html",
    },
  ]),[t]);

  const [page, setPage] = useState(WorkItemData);
  const itemsxpage = 2;
  const quantPages = Math.ceil(WorkItemData.length / itemsxpage);
  const handleLeft = () => {
    setNumPage(numPage - (1 % quantPages));
    // setFirstPage(true);
  };

  const handleRight = () => {
    setNumPage(numPage + (1 % quantPages));
    // setFirstPage(false);
  };

  useEffect(() => {
    if (numPage === quantPages - 1) {
	  setPage(WorkItemData.slice(numPage * itemsxpage));
    } else {
      setPage(WorkItemData.slice(numPage * itemsxpage, numPage * itemsxpage + itemsxpage));
    }
  }, [numPage, quantPages, WorkItemData]);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1150px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            {t("work")}
          </p>
          <p className="py-6 text-2xl">{t("checkout")}</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Grid Items */}
          {page.map((wi) => {
            console.log(wi);
            return (
              <WorkItem
                key={wi.id}
                imgLink={wi.imgLink}
                workType={wi.workType}
                workDesc={wi.workDesc}
                firstButton={wi.firstButton}
                secondButton={wi.secondButton}
                href1={wi.href1}
                href2={wi.href2}
              />
            );
          })}
        </div>
        <div className="flex flex-row justify-between">
          <button className="ml-20 mt-7">
            <img
              src={BackArrow}
              onClick={handleLeft}
              style={{ display: numPage === 0 ? "none" : "block" }}
              // style={{ cursor: "default" }}
              alt=""
              width="30px"
              height="30px"
            />
          </button>
          <button className="mr-20 mt-7">
            <img
              src={ForwardArrow}
              onClick={handleRight}
              style={{ display: numPage === quantPages - 1 ? "none" : "block" }}
              alt=""
              width="30px"
              height="30px"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
