import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <div className="container mx-auto px-12 py-6">
            <div className="flex justify-between mt-20">
                <div className="mt-10">
                    <img src={logo} alt="DevStack logo" />
                    <p> Curated tools, technologies, and resources for developers building<br />
                        modern software.</p>
                    <ul className="flex gap-4">
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
            <div className="flex justify-between items-center">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <ul className="flex gap-2">
                    <li className="text-[#475569]"><a href="">Privacy</a></li>
                    <li className="text-[#475569]"><a href=""></a>Terms</li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;