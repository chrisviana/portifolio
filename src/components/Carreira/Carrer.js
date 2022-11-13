import { Title } from "../Title";
import { Route, Routes, Link } from "react-router-dom";
import { CaretRight } from "phosphor-react";
import { Acct } from "./Acct";
import { Fontanella } from "./Fontanella";
import { WebMais } from "./WebMais";

const empresas = [
  {
    link: "/acct",
    name: "ACCT | Consulting & Technology",
  },

  {
    link: "/fontanella",
    name: "Transportes Fontanella",
  },

  {
    link: "/webmais",
    name: "WebMais Sistemas",
  },
];

export function Carrer() {
  return (
    <div className="mt-8">
      <Title title="CARREIRA" />
      <h1 className="font-plus text-font-400 text-[2.25rem]">
        Experiência de Trabalho
      </h1>
      <div className="sm:flex">
      <div className="w-[21.563rem]">
        <ul className="mt-20">
          {empresas.map((empresa) => {
            return (
              <li key={empresa.name} className="px-8 py-4 text-base flex justify-between hover:text-font-verde delay-100">
                <Link to={empresa.link}>{empresa.name}</Link>
                <CaretRight size={24} />
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <Routes>
          <Route exact path="/acct" element={<Acct />} />
          <Route exact path="/fontanella" element={<Fontanella />} />
          <Route exact path="/webmais" element={<WebMais />} />
        </Routes>
      </div>
      </div>

    </div>
  );
}
