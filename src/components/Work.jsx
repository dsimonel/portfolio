import React from "react";
import WorkItem from "./WorkItem";
import fpmt from "../assets/fpmt.jpg";
import Booking from "../assets/Booking.jpg";
// import MLR from "../assets/MLR.jpg";
import mymusic from "../assets/mymusic-4.jpg";
import TP from "../assets/TP.jpg";
import myadmin from "../assets/myadmin.jpg";
import CoinMarketCap from "../assets/CMC-2.jpg";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1300px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            {t("work")}
          </p>
          <p className="py-6 text-2xl">{t("checkout")}</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <WorkItem
            imgLink={fpmt}
            workType={t("phpapp")}
            workDesc={t("wd1")}
            firstButton={"Demo"}
            secondButton={"Website"}
            href1={"https://youtu.be/7oPGP7NI-1o"}
            href2={"https://tibetan.ueuo.com/fpmt/guest.php"}
          />
          <WorkItem
            imgLink={CoinMarketCap}
            workType={"Solidity/React/Heroku"}
            workDesc={t("wd2")}
            firstButton={t("code")}
            secondButton={"Website"}
            href1={"https://github.com/dsimonel/web3_coinmarketcap"}
            href2={"http://danielsimonelli.orgfree.com/cmc/index.html"}
          />
          <WorkItem
            imgLink={TP}
            workType={t("phpapp")}
            workDesc={t("wd3")}
            firstButton={"Code"}
            secondButton={"Website"}
            href1={"#"}
            href2={"http://tashipedeb.ueuo.com/index.php"}
          />
          <WorkItem
            imgLink={myadmin}
            workType={"React JS/Tailwind"}
            workDesc={t("wd4")}
            firstButton={t("code")}
            secondButton={"Website"}
            href1={"https://github.com/dsimonel/admin-react"}
            href2={"https://dsimonel.github.io/admin-react"}
          />
          <WorkItem
            imgLink={mymusic}
            workType={"React/Node/Heroku"}
            workDesc={t("wd5")}
            firstButton={"Demo"}
            secondButton={"Website"}
            href1={"https://www.youtube.com/watch?v=qN_JH_10i6k&t=58s"}
            href2={"http://danielsimonelli.orgfree.com/mymusic/index.html"}
          />
          <WorkItem
            imgLink={Booking}
            workType={"React/Mongo/Heroku"}
            workDesc={t("wd6")}
            firstButton={t("code")}
            secondButton={"Website"}
            href1={"https://github.com/dsimonel/mybooking-ui-react"}
            href2={"https://dsimonel.github.io/mybooking-react/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
