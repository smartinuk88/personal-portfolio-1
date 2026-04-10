import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiPostgresql,
  SiNodedotjs,
  SiLeaflet,
  SiJest,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function TechInfo({
  techInfo,
  isOver,
  borderStyle,
  dragStarted,
}) {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === "es";

  const techMap = {
    react: {
      name: "React",
      text: [
        {
          header: t("techInfo.react.heading1"),
          body: t("techInfo.react.body1"),
        },
        {
          header: t("techInfo.react.heading2"),
          body: t("techInfo.react.body2"),
        },
        {
          header: t("techInfo.react.heading3"),
          body: t("techInfo.react.body3"),
        },
      ],
      image: <FaReact />,
    },
    nextjs: {
      name: "NextJS",
      text: [
        {
          header: t("techInfo.nextjs.heading1"),
          body: t("techInfo.nextjs.body1"),
        },
        {
          header: t("techInfo.nextjs.heading2"),
          body: t("techInfo.nextjs.body2"),
        },
        {
          header: t("techInfo.nextjs.heading3"),
          body: t("techInfo.nextjs.body3"),
        },
      ],
      image: <SiNextdotjs />,
    },
    typescript: {
      name: "Typescript",
      text: [
        {
          header: t("techInfo.typescript.heading1"),
          body: t("techInfo.typescript.body1"),
        },
        {
          header: t("techInfo.typescript.heading2"),
          body: t("techInfo.typescript.body2"),
        },
        {
          header: t("techInfo.typescript.heading3"),
          body: t("techInfo.typescript.body3"),
        },
      ],
      image: <SiTypescript />,
    },
    firebase: {
      name: "Firebase",
      text: [
        {
          header: t("techInfo.firebase.heading1"),
          body: t("techInfo.firebase.body1"),
        },
        {
          header: t("techInfo.firebase.heading2"),
          body: t("techInfo.firebase.body2"),
        },
        {
          header: t("techInfo.firebase.heading3"),
          body: t("techInfo.firebase.body3"),
        },
      ],
      image: <SiFirebase />,
    },
    tailwind: {
      name: "Tailwind CSS",
      text: [
        {
          header: t("techInfo.tailwind.heading1"),
          body: t("techInfo.tailwind.body1"),
        },
        {
          header: t("techInfo.tailwind.heading2"),
          body: t("techInfo.tailwind.body2"),
        },
        {
          header: t("techInfo.tailwind.heading3"),
          body: t("techInfo.tailwind.body3"),
        },
      ],
      image: <SiTailwindcss />,
    },
    redux: {
      name: "Redux",
      text: [
        {
          header: t("techInfo.redux.heading1"),
          body: t("techInfo.redux.body1"),
        },
        {
          header: t("techInfo.redux.heading2"),
          body: t("techInfo.redux.body2"),
        },
        {
          header: t("techInfo.redux.heading3"),
          body: t("techInfo.redux.body3"),
        },
      ],
      image: <SiRedux />,
    },
    postgresql: {
      name: "PostreSQL",
      text: [
        {
          header: t("techInfo.postgresql.heading1"),
          body: t("techInfo.postgresql.body1"),
        },
        {
          header: t("techInfo.postgresql.heading2"),
          body: t("techInfo.postgresql.body2"),
        },
        {
          header: t("techInfo.postgresql.heading3"),
          body: t("techInfo.postgresql.body3"),
        },
      ],
      image: <SiPostgresql />,
    },
    nodejs: {
      name: "Node.js",
      text: [
        {
          header: t("techInfo.nodejs.heading1"),
          body: t("techInfo.nodejs.body1"),
        },
        {
          header: t("techInfo.nodejs.heading2"),
          body: t("techInfo.nodejs.body2"),
        },
        {
          header: t("techInfo.nodejs.heading3"),
          body: t("techInfo.nodejs.body3"),
        },
      ],
      image: <SiNodedotjs />,
    },
    leaflet: {
      name: "Leaflet",
      text: [
        {
          header: t("techInfo.leaflet.heading1"),
          body: t("techInfo.leaflet.body1"),
        },
        {
          header: t("techInfo.leaflet.heading2"),
          body: t("techInfo.leaflet.body2"),
        },
        {
          header: t("techInfo.leaflet.heading3"),
          body: t("techInfo.leaflet.body3"),
        },
      ],
      image: <SiLeaflet />,
    },
    jest: {
      name: "Jest",
      text: [
        {
          header: t("techInfo.jest.heading1"),
          body: t("techInfo.jest.body1"),
        },
        {
          header: t("techInfo.jest.heading2"),
          body: t("techInfo.jest.body2"),
        },
        {
          header: t("techInfo.jest.heading3"),
          body: t("techInfo.jest.body3"),
        },
      ],
      image: <SiJest />,
    },
  };

  const getBorderStyle = () => {
    if (dragStarted) {
      return "border-lm-custom-orange dark:border-dm-custom-orange";
    } else {
      return borderStyle || "border-lm-support dark:border-dm-support";
    }
  };

  const getTextColor = () => {
    if (dragStarted) {
      if (isOver) {
        return "text-lm-mint dark:text-dm-mint";
      } else {
        return "text-lm-custom-orange dark:text-dm-custom-orange";
      }
    }
  };

  return techInfo === null ? (
    <div
      className={`flex border-dotted border-2 items-center justify-center text-center dark:text-dm-light ${
        isOver ? "border-lm-mint dark:border-dm-mint" : getBorderStyle()
      } h-52 opacity-70`}
    >
      <h3
        className={`${getTextColor()} ${
          isSpanish ? "md:text-lg" : "text-lg md:text-xl"
        }`}
      >
        {dragStarted ? t("techInfo.drop") : t("techInfo.drag")}
      </h3>
    </div>
  ) : (
    <div
      className={`flex flex-col py-5 px-5 md:px-8 items-center justify-center space-y-4 text-center dark:text-dm-light border-dotted border-2 ${
        isOver ? "border-lm-mint dark:border-dm-mint" : getBorderStyle()
      }`}
    >
      <div className="text-5xl">{techMap[techInfo].image}</div>
      <h2 className="text-lm-custom-orange dark:text-dm-custom-orange text-3xl">
        {techMap[techInfo].name}
      </h2>
      <ul className="text-lm-support text-xs md:text-sm text-left dark:text-dm-support">
        {techMap[techInfo].text.map((item, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{item.header}</span>: {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
