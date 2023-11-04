import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import TechList from "./components/TechList";

function App() {
  return (
    <div className="bg-custom-black font-sans">
      <TopNav />
      <SideNav />
      <main>
        <Header />
        <ProjectList />
        <TechList />
      </main>
    </div>
  );
}

export default App;
