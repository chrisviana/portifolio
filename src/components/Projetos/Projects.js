import { Title } from "../Title";
import { Card } from "./Card";
import imgProjeto01 from "../../assets/projeto-01.png";
import imgProjeto02 from "../../assets/projeto-02.png";

export function Projects() {
    const projeto2 = ["NojeJS", "Express"]
    const projeto1 = ["React"]
    return (
        <div id="projects">
            <div>
                <Title title="MY WORKS" />
                <h1 className="font-plus text-font-400 text-[3rem]">Featured Portfolios</h1>
            </div>
            <div className="sm:flex items-center justify-center gap-14">
                <Card urlImg={imgProjeto01} name="ToDo" link="https://todo-rho-ruddy.vercel.app/" technologies={projeto1} />
                <Card urlImg={imgProjeto02} name="Simple API financial" link="https://github.com/chrisviana/api-financeira-nodejs" technologies={projeto2} />

            </div>
        </div>
    )
}