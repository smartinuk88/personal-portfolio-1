import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";

export default function TechInfo({ techInfo, isOver, borderStyle }) {
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

  return techInfo === null ? (
    <div
      className={`flex border-dotted border-2 items-center justify-center text-center ${
        isOver ? "border-mint" : ""
      } h-52 opacity-70`}
    >
      <h3 className={`${isOver && "text-mint"} text-xl`}>
        {isOver
          ? "Drop logo!"
          : "Drag a logo here to display more tech info..."}
      </h3>
    </div>
  ) : (
    <div
      className={`flex flex-col items-center justify-center space-y-2 text-center h-52 border-dotted border-2 ${borderStyle}`}
    >
      <div className="text-5xl">{techMap[techInfo].image}</div>
      <h2 className="text-custom-orange text-3xl">{techMap[techInfo].name}</h2>
      <h5 className="text-support-text">{techMap[techInfo].text}</h5>
    </div>
  );
}
