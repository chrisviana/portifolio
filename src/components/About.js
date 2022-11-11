import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { Title } from "./Title";
import HeroImagem from "../assets/hero-image.png";

export function About() {
  return (
    <div className="sm:flex items-center mt-36">
      <div>
        <Title title={"MY NAME IS"} />
        <h1 className="font-plus text-fontbranca-200 text-[3rem]">Christian <span className="text-font-verde">Viana</span></h1>
        <p className="text-[#f5f5f5]">
          Creative front-end developer with more than +5 years of experience in
          enterprise companies and startups. Proficient in JavaScript, Angular,
          and React. Passionate about UI/UX
        </p>
        <div className="flex">
          <InstagramLogo size={32} />
          <GithubLogo size={32} />
          <LinkedinLogo size={32} />
        </div>
      </div>

      <img src={HeroImagem} alt=""  />
    </div>
  );
}
