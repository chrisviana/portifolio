import { Title } from "../Title";
import { Card } from "./Card";

export function Projects() {
    return (
        <div>
            <div>
                <Title title="PROJETOS" />
                <h1 className="font-plus text-font-400 text-[3rem]">Projetos em destaque</h1>
            </div>
            <div className="sm:flex items-center justify-center gap-14">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}