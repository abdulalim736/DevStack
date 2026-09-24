import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <div className="container mx-auto px-12 py-6 mt-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between mt-20 gap-10">
                <div>
                    <img src={logo} alt="DevStack logo" />
                    <p> Curated tools, technologies, and resources for developers building<br />
                        modern software.</p>
                    <ul className="flex gap-4 mt-6">
                        <li><a href="https://github.com/">GitHub</a></li>
                        <li><a href="https://twitter.com/">Twitter</a></li>
                        <li><a href="https://https://www.linkedin.com//">LinkedIn</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold">PRODUCT</h2>
                    <ul>
                        <li className="text-[#475569]"><a href="">Home</a></li>
                        <li className="text-[#475569]"><a href=""></a>Technologies</li>
                        <li className="text-[#475569]"><a href="">Projects</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold">COMPANY</h2>
                    <ul>
                        <li className="text-[#475569]"><a href="">About</a></li>
                        <li className="text-[#475569]"><a href="">Contact</a></li>
                        <li className="text-[#475569]"><a href="">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold">LEGAL</h2>
                    <ul>
                        <li className="text-[#475569]"><a href="">Privacy Policy</a></li>
                        <li className="text-[#475569]"><a href="">Terms of Service</a></li>

                    </ul>
                </div>
            </div>
            <div className="divider"></div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:flex gap-10 justify-between items-center">
                <p className="text-[#475569]">© 2026 Dev Stack. All rights reserved.</p>
                <ul className="flex gap-2">
                    <li className="text-[#475569]"><a href="">Privacy</a></li>
                    <li className="text-[#475569]"><a href="">Terms</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;