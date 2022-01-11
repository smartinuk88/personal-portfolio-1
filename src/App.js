import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <TopNav />
      <SideNav />
      <main>
        <Header />
      </main>
    </div>
  );
}

export default App;
