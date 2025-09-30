import Portifolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Console from "./components/Console";
import About from "./components/About";

function App() {
  return (
    <div className="w-11/12 mx-auto h-full py-10">
      {/* <Intro /> */}
      <Console />
      <Portifolio />
      <Timeline />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
