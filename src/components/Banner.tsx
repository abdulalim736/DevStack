
import logo from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="container mx-auto flex items-center justify-between px-12 py-6">
            <div>
                <h1 className="text-5xl font-bold">Build Your Ideal</h1>
                <h1 className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-5xl font-bold text-transparent">
                    Development Stack
                </h1>
                <p className="mt-4 text-[#475569]">
                    Explore frontend, backend, database and tooling option,
                    <br />
                    compare them side by side, put together the stack that fits your
                    <br />
                    next projects
                </p>
                <div className="mt-4 flex gap-4">
                    <button className="rounded-l rounded-r brand-gradient px-2 py-2 text-white">
                        <a href="">Explore Technologies</a>
                    </button>
                    <button className="rounded-l rounded-r border border-black bg-white px-2 py-2 text-black">
                        <a href="">Learn More</a>
                    </button>
                </div>
            </div>
            <img src={logo} alt="Logo" className="mt-4" />
        </div>
    );
};

export default Banner;