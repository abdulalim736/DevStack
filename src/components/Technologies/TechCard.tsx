
import type { Technology } from "../../Types";


interface TechCardProps {
    technology: Technology;
};

const TechCard = ({ technology }: TechCardProps) => {
    return (
        <div>
            <div className="card w-70 bg-base-100">
                <div className="card-body bg-off-white border-1 rounded my-5">
                    <div className="flex justify-between"> <img className="w-10 h-10" src={technology.icon} alt="" />
                        <span className="badge badge-xs badge-warning">{technology.badge}</span>
                    </div>
                    <h1 className="text-2xl font-bold"> {technology.name}</h1>
                    <p></p>{technology.description}
                    <div className="flex justify-between">
                        <span>{technology.category}</span>
                        <span>{technology.difficulty}</span>
                        <span className="flex items-center"><img className="w-5 h-5" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /> {technology.rating}</span>
                    </div>

                    <div className="mt-6">
                        <button className="btn btn-primary btn-block bg-[#0A0F1D]">Add to Stack</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechCard;
