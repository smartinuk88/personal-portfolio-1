import { useState } from "react";

function Header() {
  const [display, setDisplay] = useState("none");

  const aboutTextToggleHandler = () => {
    display === "none" ? setDisplay("block") : setDisplay("none");
  };

  return (
    <header className="mb-14">
      <div>
        <h1 className="font-bold text-5xl md:text-7xl uppercase text-lm-custom-orange dark:text-dm-custom-orange">
          Scott Martin
        </h1>
        <h2 className="font-bold text-5xl md:text-7xl uppercase text-lm-mint dark:text-dm-mint">
          Front End Developer
        </h2>
        <div className="my-5 block h-1 w-3/4 bg-lm-custom-orange dark:bg-dm-custom-orange"></div>
        <section>
          <div
            onClick={aboutTextToggleHandler}
            className="mt-5 text-lm-support dark:text-dm-support text-lg cursor-pointer w-40 border-2 py-2 px-8 transition-all duration-500 border-lm-mint dark:border-dm-mint hover:shadow-inner-mint hover:opacity-70 shadow-sm"
          >
            About Me
          </div>
          <div
            style={{ display: display }}
            className="text-xs md:text-small dark:text-dm-support w-full pt-4"
          >
            <p className="mb-2">
              Hi, I'm <span className="font-bold">Scott</span>,
            </p>
            <p className="mb-2">
              a passionate front-end web developer living in the vibrant city of
              Murcia, Spain. My journey into the world of web development is
              fueled by a blend of creativity and technical curiosity, which I
              honed through years of experience as a photographer and web
              administrator.
            </p>

            <p className="mb-2">
              Driven by a love for visual storytelling, my background in
              photography allows me to bring a unique aesthetic perspective to
              my development projects, emphasizing clean, user-friendly
              interfaces that engage and communicate clearly. Transitioning to
              web development was a natural progression for me, combining my
              keen visual eye with technical skills to build seamless digital
              experiences.
            </p>

            <p className="mb-2">
              As a self-taught developer, I am committed to continuous learning
              and improvement. I thrive on challenges and enjoy staying updated
              with the latest industry trends and technologies. My current
              toolkit includes React, TailwindCSS, and Firebase, with a keen
              interest in expanding to full-stack development.
            </p>
            <p className="mb-2">
              Whether collaborating on projects or crafting individual sites, my
              goal is to create websites that not only look great but also
              provide functional, intuitive user experiences. I am eager to
              bring my creative flair and meticulous eye for detail to a dynamic
              team, where I can contribute to impactful and genuinely useful
              projects and grow alongside like-minded professionals.
            </p>
            <p className="mb-2">
              <a
                className="inline-block font-bold transition-all duration-400 hover:opacity-80 text-lm-fucshia dark:text-dm-fucshia"
                aria-label="CV on Google Drive"
                rel="noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1z58kSN6Vb7DArjCsxouTKXJjwVDxLKmk/view?usp=sharing"
              >
                CV right here
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
