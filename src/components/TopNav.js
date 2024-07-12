import DownloadIcon from "@mui/icons-material/Download";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

function TopNav() {
  const [isLanguageSelectorVisible, setIsLanguageSelectorVisible] =
    useState(false);
  const { t, i18n } = useTranslation();

  const showLanguageSelector = () => {
    setIsLanguageSelectorVisible(true);
  };

  const hideLanguageSelector = () => {
    setIsLanguageSelectorVisible(false);
  };

  return (
    <div
      className={`fixed top-0 border-b-2 border-lm-fucshia dark:border-dm-fucshia w-full h-20 z-50 bg-lm-light dark:bg-dm-custom-black`}
    >
      <div className="relative flex items-center justify-start h-full">
        <LanguageSelector
          onShowLanguageSelector={showLanguageSelector}
          onHideLanguageSelector={hideLanguageSelector}
          visible={isLanguageSelectorVisible}
        />
        <ul className="flex items-center h-full w-full list-none">
          <li
            className="h-full cursor-pointer flex items-center border-r-2 border-lm-fucshia dark:border-dm-fucshia overflow-hidden transition-all ease-in-out duration-500 hover:shadow-inner-fucshia hover:opacity-80 w-20"
            onClick={showLanguageSelector}
          >
            <button className="text-xl h-full w-full flex items-center justify-center">
              <LanguageIcon
                className="text-lm-custom-black dark:text-dm-light"
                fontSize="large"
              />
            </button>
          </li>
          <li className=" h-full cursor-pointer flex items-center border-r-2 border-lm-fucshia dark:border-dm-fucshia overflow-hidden transition duration-500 hover:shadow-inner-fucshia hover:opacity-80 w-20 md:w-auto">
            <a
              className="px-4 md:px-8 text-xl no-underline text-lm-custom-black dark:text-dm-light h-full w-full flex items-center justify-center"
              href={
                (i18n.language === "en" &&
                  "https://drive.google.com/file/d/1z58kSN6Vb7DArjCsxouTKXJjwVDxLKmk/view?usp=sharing") ||
                (i18n.language === "es" &&
                  "https://drive.google.com/file/d/1VuKcy7aYzLxQNVmnw12-rr52iA5bQuEG/view?usp=sharing")
              }
              target="_blank"
              rel="noreferrer"
            >
              CV <DownloadIcon />
            </a>
          </li>
          <li className="hidden md:flex h-full cursor-pointer items-center border-r-2 border-lm-fucshia dark:border-dm-fucshia overflow-hidden transition-all ease-in-out duration-500 hover:shadow-inner-fucshia hover:opacity-80">
            <a
              aria-label="Link to Email"
              rel="noreferrer"
              className="md:px-8 text-xl no-underline text-lm-custom-black dark:text-dm-light h-full w-full flex items-center justify-center"
              href="mailto:scottmartinwebdevelopment@gmail.com"
            >
              {t("contact")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
