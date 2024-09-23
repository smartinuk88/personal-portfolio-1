import ProjectRow from "./ProjectRow";
import { useTranslation } from "react-i18next";
import flashFluentImg1 from "../images/flashfluent-1.png";
import amazonImg1 from "../images/amazon-1.png";
import botifyImg1 from "../images/botify-1.png";
import { FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiReactrouter,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

function ProjectList() {
  const { t } = useTranslation();

  const flashFluentBullets = [
    {
      header: t("flashFluent.heading1"),
      body: t("flashFluent.body1"),
    },
    {
      header: t("flashFluent.heading2"),
      body: t("flashFluent.body2"),
    },
    {
      header: t("flashFluent.heading3"),
      body: t("flashFluent.body3"),
    },
  ];

  const amazonBullets = [
    {
      header: t("amazon.heading1"),
      body: t("amazon.body1"),
    },
    {
      header: t("amazon.heading2"),
      body: t("amazon.body2"),
    },
    {
      header: t("amazon.heading3"),
      body: t("amazon.body3"),
    },
    {
      header: t("amazon.heading4"),
      body: t("amazon.body4"),
    },
  ];

  const botifyBullets = [
    {
      header: t("botify.heading1"),
      body: t("botify.body1"),
    },
    {
      header: t("botify.heading2"),
      body: t("botify.body2"),
    },
    {
      header: t("botify.heading3"),
      body: t("botify.body3"),
    },
    {
      header: t("botify.heading4"),
      body: t("botify.body4"),
    },
  ];

  return (
    <div className="flex flex-col gap-16 mb-20">
      <ProjectRow
        title={t("flashFluent.title")}
        bullets={flashFluentBullets}
        image={flashFluentImg1}
        techIcons={[FaReact, SiFirebase, SiTailwindcss, SiReactrouter]}
        codeLink="https://github.com/smartinuk88/flashcard-app"
        liveLink="https://main--stunning-cupcake-ed88e2.netlify.app/"
      />
      <ProjectRow
        title={t("amazon.title")}
        bullets={amazonBullets}
        image={amazonImg1}
        techIcons={[SiNextdotjs, SiTypescript, SiTailwindcss]}
        codeLink="https://github.com/smartinuk88/amazon-redesign-oxylabs-scraper"
        liveLink="https://amazon-redesign-oxylabs-scraper.vercel.app/"
      />
      <ProjectRow
        title={t("botify.title")}
        bullets={botifyBullets}
        image={botifyImg1}
        techIcons={[SiNextdotjs, SiTypescript, SiTailwindcss]}
        codeLink="https://github.com/smartinuk88/chatbot-ai-app"
        liveLink="https://chatbot-ai-creator-app.vercel.app/"
      />
    </div>
  );
}

export default ProjectList;
