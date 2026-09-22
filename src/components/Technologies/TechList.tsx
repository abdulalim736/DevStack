
import { use } from "react";
import type { Technology } from "../../Types";
import TechCard from "./TechCard";

interface TechListProps {
    technologiesPromise: Promise<Technology[]>;
    stack: Technology[];
    handleAddToStack: (tech: Technology) => void;
}

const TechList = ({ technologiesPromise, stack, handleAddToStack }: TechListProps) => {
    const technologies = use(technologiesPromise);
    return (
     
        <div className="col-span-3 grid grid-cols-3 gap-5">
            {technologies.map((tech) => (
                <TechCard key={tech.id} tech={tech} stack={stack} handleAddToStack={handleAddToStack} />
            ))}
        </div>
    );
};

export default TechList