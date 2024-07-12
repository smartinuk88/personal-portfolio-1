import { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const [display, setDisplay] = useState("none");
  const { t } = useTranslation();

  const aboutTextToggleHandler = () => {
    display === "none" ? setDisplay("block") : setDisplay("none");
  };

  return (
    <header className="mb-14">
      <h1 className="font-bold text-5xl md:text-7xl uppercase text-lm-custom-orange dark:text-dm-custom-orange">
        Scott Martin
      </h1>
      <h2 className="font-bold text-5xl md:text-7xl uppercase text-lm-mint dark:text-dm-mint">
        {t("jobTitle")}
      </h2>
      <div className="my-5 block h-1 w-3/4 bg-lm-custom-orange dark:bg-dm-custom-orange"></div>
      <section>
        <div
          onClick={aboutTextToggleHandler}
          className="mt-5 text-lm-support dark:text-dm-support text-lg cursor-pointer w-40 border-2 py-2 px-8 transition-all duration-500 border-lm-mint dark:border-dm-mint hover:shadow-inner-mint hover:opacity-70 shadow-sm"
        >
          {t("about.heading")}
        </div>
        <div
          style={{ display: display }}
          className="text-xs sm:text-small md:text-base dark:text-dm-support w-full pt-4"
        >
          <p className="mb-2">
            {t("about.body1")}
            <span className="font-bold">Scott</span>,
          </p>
          <p className="mb-2">{t("about.body2")}</p>

          <p className="mb-2">{t("about.body3")}</p>

          <p className="mb-2">{t("about.body4")}</p>
          <p className="mb-2">{t("about.body5")}</p>
          <p className="mb-2">
            <a
              className="inline-block font-bold transition-all duration-400 hover:opacity-80 text-lm-fucshia dark:text-dm-fucshia"
              aria-label="CV on Google Drive"
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1z58kSN6Vb7DArjCsxouTKXJjwVDxLKmk/view?usp=sharing"
            >
              {t("about.cv")}
            </a>
            .
          </p>
        </div>
      </section>
    </header>
  );
}

export default Header;
