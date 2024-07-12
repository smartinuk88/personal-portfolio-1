import { useTranslation } from "react-i18next";

function ProjectRow({ image, title, bullets, techIcons, codeLink, liveLink }) {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === "es";

  const colors = [
    "text-lm-fucshia dark:text-dm-fucshia",
    "text-lm-mint dark:text-dm-mint",
    "text-lm-custom-orange dark:text-dm-custom-orange",
  ];
  const getColor = (index) => {
    return colors[index % colors.length];
  };

  return (
    <div className="w-full border-2 max-w-6xl mx-auto border-lm-custom-black dark:border-dm-light shadow-md  items-center">
      <div className="flex flex-col text-center">
        <img
          className="aspect-w-16 aspect-h-9 w-full h-auto object-contain"
          src={image}
          alt={`${title} project screenshot`}
        />

        <div className="flex flex-col justify-between px-4 py-6 lg:px-8 leading-normal">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-center text-lm-custom-black dark:text-dm-light">
            {title}
          </h2>

          <div className="flex flex-col text-left space-y-2 text-xs lg:text-base text-lm-support dark:text-dm-support mb-6">
            {bullets.map((bullet) => (
              <p>
                <span className="font-bold">{bullet.header}</span>:{" "}
                {bullet.body}
              </p>
            ))}
          </div>

          <div className="flex justify-between w-3/5 md:w-2/5 mx-auto text-2xl md:text-4xl pb-4">
            {techIcons.map((IconComponent, index) => (
              <IconComponent key={index} className={getColor(index)} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full h-16 justify-between text-center border-t-2 border-lm-custom-black dark:border-dm-light">
        <div
          className={`${
            isSpanish ? "" : "text-lg"
          } w-full h-full border-r border-lm-custom-black dark:border-dm-light`}
        >
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center w-full h-full hover:opacity-80 transition-all duration-500 text-lm-custom-black dark:text-lm-light hover:text-lm-light dark:hover:text-dm-custom-black hover:bg-lm-custom-black dark:hover:bg-dm-light"
          >
            {t("projectRow.live")}
          </a>
        </div>
        <div
          className={`${
            isSpanish ? "" : "text-lg"
          } w-full h-full border-l border-lm-custom-black dark:border-dm-light`}
        >
          <a
            href={codeLink}
            rel="noreferrer"
            target="_blank"
            className="flex justify-center items-center w-full h-full hover:opacity-80 transition-all duration-500 text-lm-custom-black dark:text-dm-light hover:text-lm-light dark:hover:text-dm-custom-black hover:bg-lm-custom-black dark:hover:bg-dm-light"
          >
            {t("projectRow.code")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectRow;
