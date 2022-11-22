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
        name: "Support Tecnically",
        describe: "Directly assisting the end user of the ERP, with the issuance of invoices, DRE, Flow of Cash, Accounts Payable and Receivable, Production Order Process;",
        time: "2015- 2020"
      }
    ],
    skills: ["VTEX IO", "React", "TypeScript"],
  },

  {
    link: "/fontanella",
    name: "Transportes Fontanella",
    occupation: [
      {
        name: "Support Tecnically",
        describe: "Directly assisting the end user of the ERP, with the issuance of invoices, DRE, Flow of Cash, Accounts Payable and Receivable, Production Order Process;",
        time: "2020 - 2012",
      }
    ],
    skills: ["VTEX IO", "React", "TypeScript"],
  },

  {
    link: "/webmais",
    name: "WebMais Sistemas",
    occupation: [
      {
        name: "Support Tecnically",
        describe: "Directly assisting the end user of the ERP, with the issuance of invoices, DRE, Flow of Cash, Accounts Payable and Receivable, Production Order Process;",
        time: "2015- 2012"
      },
      {
        name: "Tete",
        describe: "dadadadada"
      }
    ],
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
