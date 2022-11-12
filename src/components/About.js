import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { Title } from "./Title";
import HeroImagem from "../assets/hero-image.png";

export function About() {
  return (
    <div className="sm:flex items-center mt-36 p-5">
      <div>
        <Title title={"MY NAME IS"} />
        <h1 className="font-plus text-font-400 text-[3rem]">Christian <span className="text-font-verde">Viana</span></h1>
        <p className="text-[#232E35]">
        I work with development since 2017 as a Full Stack where I had my first experiences using COS (Caché Object Script) and CSP (Caché Server Pages).
        </p>
        <div className="flex mt-8 gap-2">
          <a href="/" className="hover:text-font-verde">
            <InstagramLogo size={32} color="#232E35"  />
          </a>
          <a href="/">
            <GithubLogo size={32}  color="#232E35" />
          </a>
          <a href="/">
            <LinkedinLogo size={32} color="#232E35" />
          </a>
        </div>
      </div>

      <img src={HeroImagem} alt=""  />
    </div>
  );
}
