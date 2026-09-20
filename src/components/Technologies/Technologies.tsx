import { use } from 'react';
import type { Technology } from '../../Types';
import TechCard from './TechCard';

interface TechnologiesProps {
    technologiesPromise: Promise<Technology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use<Technology[]>(technologiesPromise);

    return (
        <div>
            <h1 className='text-[30px] text[#0F172A] font-bold'>Explore the <span className='text-brand-gradient'>Technology</span></h1>
            <p className="text-[#475569]">Pick one technology per category to build your ideal stack.</p>
            {technologies.length === 0 && <p>No Technology Found</p>}
            <div className='grid grid-cols-3 gap-5'>
                {technologies.map((technology) => (
                    <TechCard key={technology.id} technology={technology} />
                ))}
            </div>
        </div>
    );
};

export default Technologies;