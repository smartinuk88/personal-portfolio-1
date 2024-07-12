import { useTranslation } from "react-i18next";

function LanguageSelector({
  visible,
  onShowLanguageSelector,
  onHideLanguageSelector,
}) {
  const { i18n } = useTranslation();

  const lngs = {
    en: { nativeName: "English" },
    es: { nativeName: "Español" },
  };

  const lngsArray = Object.keys(lngs);

  const handleClick = (lng) => {
    i18n.changeLanguage(lng);
    onHideLanguageSelector();
  };
  return (
    <div
      className={`fixed flex left-0 top-0 items-center border-b-2 bg-transparent border-lm-fucshia dark:border-dm-fucshia w-screen-minus-19 md:w-screen-minus-18 h-20 z-50 transition-transform duration-700 ease-in-out ${
        visible ? "transform translate-x-0" : " transform -translate-x-full"
      }`}
    >
      {lngsArray.map((lng, index) => (
        <div
          key={lng}
          onClick={() => handleClick(lng)}
          className={`h-full bg-lm-light w-1/2 dark:bg-dm-custom-black cursor-pointer flex items-center ${
            index !== lngsArray.length - 1 ? "border-r-2" : "border-r-2"
          } border-lm-fucshia dark:border-dm-fucshia overflow-hidden transition-all ease-in-out duration-500 hover:shadow-inner-fucshia px-4 md:px-8 text-xl text-lm-custom-black dark:text-dm-light`}
        >
          {lngs[lng].nativeName}
        </div>
      ))}
    </div>
  );
}

export default LanguageSelector;
