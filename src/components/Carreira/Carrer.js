import { Title } from "../Title";
import { Route, Routes, NavLink } from "react-router-dom";
import { CaretRight } from "phosphor-react";
import { Card } from "./Card";
import { useState } from "react";

const empresas = [
  {
    link: "/acct",
    name: "ACCT | Consulting & Technology",
    describe:
      "Improving overall website performance for mobile users Collaborate with back-end developers and web designers to improve usabilityAdd voice search feature for mobile app. Developing an admin panel to manage contents, users, products and ...",
    time: "2020 - 2012",
    occupation: "Front-end Developer",
    skills: ["VTEX IO", "React", "TypeScript"],
  },

  {
    link: "/fontanella",
    name: "Transportes Fontanella",
    describe: "Teste 02",
    time: "2020 - 2012",
    occupation: "Front-End",
    skills: ["VTEX IO", "React", "TypeScript"],
  },

  {
    link: "/webmais",
    name: "WebMais Sistemas",
    describe: "Teste 03",
    time: "2020 - 2012",
    occupation: "Front-End",
    skills: ["VTEX IO", "React", "TypeScript"],
  },
];

export function Carrer() {
  const [active, setActive] = useState(3);  

  return (
    <div className="mt-8">
      <Title title="CARREIRA" />
      <h1 className="font-plus text-font-400 text-[2.25rem]">
        Experiência de Trabalho
      </h1>
      <div className="sm:flex">
        <div className="w-[21.563rem]">
          <ul className="sm:mt-20">
            {empresas.map((empresa, i) => {
              return (
                <li
                  key={empresa.name}
                  className="px-8 py-4 text-base flex justify-between hover:text-font-verde delay-100"
                >
                  <NavLink
                    to={empresa.link}
                    onClick={() => setActive(i)}
                    className={`${active === i ? "text-font-verde" : ""}`}
                  >
                    {empresa.name}
                  </NavLink>
                  <CaretRight
                    size={24}
                    color={`${active === i ? "#03FA6E" : "#232E35"}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <Routes>
            <Route
              exact
              path="/acct"
              element={
                <Card
                  describe={empresas[0].describe}
                  time={empresas[0].time}
                  occupation={empresas[0].occupation}
                  skills={empresas[0].skills}
                />
              }
            />
            <Route
              exact
              path="/fontanella"
              element={
                <Card
                  describe={empresas[1].describe}
                  time={empresas[1].time}
                  occupation={empresas[1].occupation}
                  skills={empresas[1].skills}
                />
              }
            />
            <Route
              exact
              path="/webmais"
              element={
                <Card
                  describe={empresas[2].describe}
                  time={empresas[2].time}
                  occupation={empresas[2].occupation}
                  skills={empresas[2].skills}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
