import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { Title } from "./Title";
import HeroImagem from "../assets/hero-image.png";

export function About() {
  return (
    <div className="sm:flex items-center mt-36">
      <div>
        <Title title={"MY NAME IS"} />
        <h1 className="font-plus text-font-400 text-[3rem]">Christian <span className="text-font-verde">Viana</span></h1>
        <p className="text-[#232E35]">

          Developer since 2017 where I hade my first experience utilized COS (Caché Object Script) and CSP (Caché Server Pages) acting directly as Full Stack. Today I work directly as Front End, but I always apply my studies in back-end and front-end technologies
        </p>
        <div className="flex mt-8 gap-2">
          <a href="https://www.instagram.com/chrisviana_dev/" className="hover:text-font-verde">
            <InstagramLogo size={32} color="#232E35" />
          </a>
          <a href="https://github.com/chrisviana">
            <GithubLogo size={32} color="#232E35" />
          </a>
          <a href="https://www.linkedin.com/in/christian-viana-421239107/">
            <LinkedinLogo size={32} color="#232E35" />
          </a>
        </div>
      </div>

      <img src={HeroImagem} alt="" />
    </div>
  );
}
