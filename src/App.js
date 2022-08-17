import React, { Suspense, useState } from "react";
import Loading from "./components/Loading";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work-exp";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<Loading />}>
        <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </div>
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default App;
