import { Title } from "../Title";
import iconJavascript from "../../assets/icon-javascript.svg";
import iconTypeScript from "../../assets/icon-typescript.svg"
import iconReact from "../../assets/icon-react.svg"
import iconNodeJs from "../../assets/icon-nodejs.svg"
import iconHtml from "../../assets/icon-html.svg"
import iconCSS from "../../assets/icon-css.svg"
import iconGit from "../../assets/icon-git.svg"

export function EducationSkill() {
  return (
    <div className="mt-8">
      <Title title="LEARNING PATH" />
      <h1 className="font-plus text-font-400 text-[2.25rem]">
        Education & Skills
      </h1>
      <div className="sm:flex">
        <div className="flex flex-col mt-8 w-[21.563rem]">
          <span className="text-font-400 font-plus">Faculdades Esucri</span>
          <span className="text-font-200 text-sm">Bacharel em Sistema de Informação</span>
          <span className="mt-6 text-font-400 text-sm">2016 - 2021</span>
        </div>
        <div className="sm:ml-28 sm:w-[39.125rem]">
          <div>
            <div>
              <p>For 5+ years, I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks, and here you can see a summary of my skills.</p>
            </div>
          </div>
          <div className="mt-8 gap-4 flex flex-wrap">
            <img src={iconJavascript} alt="" />
            <img src={iconTypeScript} alt="" />
            <img src={iconReact} alt="" />
            <img src={iconNodeJs} alt="" />
            <img src={iconHtml} alt="" />
            <img src={iconCSS} alt="" />
            <img src={iconGit} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
