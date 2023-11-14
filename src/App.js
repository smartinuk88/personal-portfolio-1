import { useState, useEffect } from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import TechList from "./components/TechList";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkModeHandler = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="bg-lm-light dark:bg-dm-custom-black font-sans">
      <TopNav />
      <SideNav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleDarkModeHandler={toggleDarkModeHandler}
      />
      <main className="pt-28 px-12 pb-12 md:pl-12 md:pr-32 lg:pl-24 lg:pr-44">
        <Header />
        <ProjectList />
        <TechList />
      </main>
    </div>
  );
}

export default App;
