import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "./AnimatedLetters";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

const Contact = () => {
  const { t } = useTranslation();
  const [letterClass, setLetterClass] = useState("text-animate");
  const formRef = useRef();
  const contacto = t("contact");
  let contStr = [];
  for (let i = 0; i < contacto.length; i++) {
    contStr.push(contacto.charAt(i));
  }

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ruoppbo",
        "template_jp7eobg",
        formRef.current,
        "AhFuuH51hDZWlaVB9"
      )
      .then(
        () => {
          alert(t("msg_ok"));
          window.location.reload(false);
        },
        () => {
          alert(t("msg_fail"));
        }
      );
  };

  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* <div className="flex flex-col justify-center items-center w-full h-screen"> */}
      <div className="max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-1">
          <div className="containerqqq contact-page">
            <div className="text-zone sm:w-full md:w-10/12 md:left-20">
              <h1>
                {" "}
                &nbsp;
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={contStr}
                  idx={15}
                />
              </h1>
              <p>{t("interest")}</p>
              <br></br>
              <div className="contact-form">
                <form ref={formRef} onSubmit={sendEmail}>
                  <ul>
                    <li className="half">
                      <input
                        placeholder={t("name")}
                        type="text"
                        name="from_name"
                        required
                      />
                    </li>
                    <li className="half">
                      <input
                        placeholder="Email"
                        type="email"
                        name="from_email"
                        required
                      />
                      <input
                        hidden
                        type="email"
                        name="to_email"
                        defaultValue="dsimonel@gmail.com"
                      />
                    </li>
                    <li>
                      <input
                        placeholder={t("subject")}
                        type="text"
                        name="user_subject"
                        required
                      />
                    </li>
                    <li>
                      <textarea
                        placeholder={t("message")}
                        name="message"
                        required
                      ></textarea>
                    </li>
                    <li>
                      <input
                        type="submit"
                        className="flat-button"
                        value={t("send")}
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            {/* <div className="info-map">
            Daniel Simonelli
            <br />
            Calle 497 n° 754, B7608FUR <br />
            Mar del Plata / Argentina <br />
            <br />
            <span>dsimonel@gmail.com</span>
          </div> */}
          </div>
          <div className="map-wrap">
            <MapContainer center={[-38.116362, -57.602241]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[-38.116362, -57.602241]}>
                <Popup>{t("headquarters")}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <Loader type="pacman" />
      </div>
    </div>
  );
};

export default Contact;
