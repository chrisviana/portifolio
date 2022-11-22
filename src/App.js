import { About } from "./components/About";
import { Carrer } from "./components/Carreira/Carrer";
import { EducationSkill } from "./components/EducationSkills/EducationSkills";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projetos/Projects";

function App() {
  return (
    <div className="max-w-7xl	w-full mx-auto p-5">
      <Header />
      <About />
      <Projects />
      <Carrer />
      <EducationSkill />
      <Footer />
    </div>
  );
}

export default App;
