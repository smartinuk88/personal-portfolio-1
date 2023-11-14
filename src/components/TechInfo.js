import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";

export default function TechInfo({
  techInfo,
  isOver,
  borderStyle,
  dragStarted,
}) {
  const techMap = {
    react: {
      name: "React",
      text: "React is great!",
      image: <FaReact />,
    },
    nextjs: {
      name: "NextJS",
      text: "NextJS text is here",
      image: <SiNextdotjs />,
    },
    firebase: {
      name: "Firebase",
      text: "Firebase is awesome",
      image: <SiFirebase />,
    },
    tailwind: {
      name: "Tailwind CSS",
      text: "I love Tailwind CSS",
      image: <SiTailwindcss />,
    },
    styledComponents: {
      name: "Styled Components",
      text: "I love Styled Components",
      image: <SiStyledcomponents />,
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
      className={`flex border-dotted border-2 items-center justify-center text-center ${
        isOver ? "border-lm-mint dark:border-dm-mint" : getBorderStyle()
      } h-52 opacity-70`}
    >
      <h3 className={`${getTextColor()} text-xl`}>
        {dragStarted
          ? "Drop logo here to display more tech info..."
          : "Drag a logo here to display more tech info..."}
      </h3>
    </div>
  ) : (
    <div
      className={`flex flex-col items-center justify-center space-y-2 text-center h-52 border-dotted border-2 ${
        isOver ? "border-lm-mint dark:border-dm-mint" : getBorderStyle()
      }`}
    >
      <div className="text-5xl">{techMap[techInfo].image}</div>
      <h2 className="text-lm-custom-orange dark:text-dm-custom-orange text-3xl">
        {techMap[techInfo].name}
      </h2>
      <h5 className="text-lm-support dark:text-dm-support">
        {techMap[techInfo].text}
      </h5>
    </div>
  );
}
