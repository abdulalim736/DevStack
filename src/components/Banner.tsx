import React from 'react';
import logo from "../assets/banner-stack.png";
const Banner = () => {
    return (
        <div className="container mx-auto px-12 py-6 flex justify-between items-center">
            <div>
                <h1 className='text-[#1E1E1E] text-[60px] font-bold'>Build Your Ideal</h1>
                <h1 className='text-[60px] font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent'>Development Stack</h1>
                <p className="text-[#475569]">Explore frontend, backend, database and tooling option,</p>
                <p className="text-[#475569]">compare them side by side, put togather the stack that fits your</p>
                <p className="text-[#475569]">next projects</p>
                <div className="flex gap-4 mt-4">
                    <button className='bg-amber-500 text-white-500 px-2 py-2 rounded-l rounded-r'><a href="">Explore Technologies</a></button>
                    <button className='bg-white-200 text-black border border-black px-2 py-2 rounded-l rounded-r'><a href="">Learn More</a></button>
                </div>
            </div>
            <img src={logo} alt="Logo" className='mt-4' />
        </div>
    );
};

export default Banner;