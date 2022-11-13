import { About } from "./components/About";
import { Carrer } from "./components/Carreira/Carrer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projetos/Projects";

function App() {
  return (
    <div className="max-w-7xl	w-full mx-auto p-5">
      <Header />
      <About />
      <Projects />
      <Carrer />
    </div>
  );
}

export default App;
