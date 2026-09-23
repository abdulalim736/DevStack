import type { Technology } from "../../Types";

interface TechCardProps {
    tech: Technology;
    stack: Technology[];
    handleAddToStack: (tech: Technology) => void;
}
const TechCard =({ tech, stack, handleAddToStack }: TechCardProps)=> {
    const isAdded = stack.some((item) => item.id === tech.id);
    return (

        <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-center mb-4">
                <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{tech.badge}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{tech.description}</p>
            <div className="flex gap-2 justify-between mb-4">
            
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">{tech.difficulty}</span>
                <div className="flex items-center"> 
                     <img className="w-3 h-3" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="Star" />
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{tech.rating}</span>
                </div>
                
            </div>
            <button
                onClick={() => handleAddToStack(tech)}
                disabled={isAdded}
                className={`w-full py-2 rounded-lg font-semibold transition ${isAdded ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'
                    }`}
            >
                {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
            </button>
        </div>
    );
};

export default TechCard;
