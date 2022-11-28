import { Title } from "../Title";
import { Route, Routes, NavLink } from "react-router-dom";
import { CaretRight } from "phosphor-react";
import { Card } from "./Card";
import { useState } from "react";

const empresas = [
  {
    link: "/acct",
    name: "ACCT | Consulting & Technology",
    occupation: [
      {
        name: "Front-End Developer",
        describe: "Acting in the creation and maintenance of e-commerce, using as main technology the VTEX IO and ReactJS component creation.",
        time: "August 2021 - Present",
        skills: ["VTEX IO", "React", "TypeScript", "NodeJS"]
      }
    ],

  },

  {
    link: "/fontanella",
    name: "Transportes Fontanella",
    occupation: [
      {
        name: "Desenvolvedor Front-End",
        describe: "Acting on projects for the carrier's internal system, applying the technology of React and COS.",
        time: "May 2021 - July 2021",
        skills: ["React", "JavaScript", "JQuery", "Caché Intersystem", "HTML", "CSS"],
      }
    ],

  },

  {
    link: "/webmais",
    name: "WebMais Sistemas",
    occupation: [
      {
        name: "Technical support",
        describe: "Directly assisting the end user of the ERP, with the issuance of invoices, DRE, Flow of Cash, Accounts Payable and Receivable, Production Order Process.",
        time: "March 2016 - July 207"
      },
      {
        name: "Full Stack Jr Developer",
        describe: "Acting directly in the maintenance of the ERP and development of small applications within of ERP using COS.",
        time: "July 2017 - February 2019",
        skills: ["JavaScript", "JQuery", "Caché Intersystem", "HTML", "CSS"],
      },
      {
        name: "Senior Full Stack Developer",
        describe: "Working on more complex projects aimed at the financial area within the ERP and performing technical analysis.",
        time: "February 2019 - May 2021",
        skills: ["JavaScript", "JQuery", "Caché Intersystem", "HTML", "CSS"],
      }
    ],

  },
];

export function Carrer() {
  const [active, setActive] = useState(3);
  return (
    <div className="mt-8" id="experience">
      <Title title="CARRER PATH" />
      <h1 className="font-plus text-font-400 text-[2.25rem]">
        Work Experices
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
