
import logo from "../assets/logo-text.png";

const Navber = () => {
    return (
        <>
            <nav className="sticky top-0 z-50">
                <div className=" container mx-auto px-12 py-6 flex justify-between items-center gap-10">

                    <div className="md:hidden">
                        <button type="button" aria-label="Open menu" className="flex flex-col gap-1.5 p-2">
                            <span className="block h-0.5 w-6 rounded-full bg-slate-700" />
                            <span className="block h-0.5 w-6 rounded-full bg-slate-700" />
                            <span className="block h-0.5 w-6 rounded-full bg-slate-700" />
                        </button>
                    </div>

                    <div>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div>
                        <ul className="hidden md:flex gap-4">
                            <li className="text-[#DB2777] font-bold"><a href="">Home</a></li>
                            <li className="text-[#475569]"><a href="">Technologies</a></li>
                            <li className="text-[#475569]"><a href="">Projects</a></li>
                            <li className="text-[#475569]"><a href="">About</a></li>
                            <li className="text-[#475569]"><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <button className='bg-white text-black'><a href="">Sign In</a></button>
                        <button className="bg-[#D91B7E] text-white px-4 py-2 rounded-full"><a href="">Sign Up</a></button>
                    </div>


                </div>
            </nav>





        </>
    );
};

export default Navber;