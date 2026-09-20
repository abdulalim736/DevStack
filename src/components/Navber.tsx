
import logo from "../assets/logo-text.png"
const Navber = () => {
    return (
        <>
            <nav>
                <div className=" container mx-auto px-12 py-6 flex justify-between">
                    <div className="flex justify-between items-center gap-80">
                        <img src={logo} alt="Logo" />
                        <ul className="flex gap-4">
                            <li className="text-[#DB2777] font-bold"><a href="">Home</a></li>
                            <li className="text-[#475569]"><a href="">Technologies</a></li>
                            <li className="text-[#475569]"><a href="">Projects</a></li>
                            <li className="text-[#475569]"><a href="">About</a></li>
                            <li className="text-[#475569]"><a href="">Contact</a></li>
                        </ul>
                    </div>

                    <div className="flex gap-4">
                        <button className='bg-white text-black'><a href="">Sign In</a></button>
                        <button className='bg-[#D91B40] text-white border px-2 py-2 rounded-full'><a href="">Sign Up</a></button>
                    </div>


                </div>
            </nav>





        </>
    );
};

export default Navber;