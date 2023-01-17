import React, {useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#about" },
        { name: "SKILLS", link: "#skills" },
        { name: "PROJECTS", link: "#projects" },
        { name: "CONTACT", link: "#contact" }
    ];

    return (
        <nav className={`fixed w-full left-0 top-0 z-[999] text-white shadow-cyan-400/50`}>
            <div className="flex items-center justify-between ">
                <div className="mx-7">
                    <h4 className="text-3xl uppercase font-bold ">&lt;K
                        <span className="text-cyan-400">P<span className="text-2xl">/</span>&gt;
                        </span>
                    </h4>
                </div>

                <div className="text-gray-900 md:block hidden pl-8 pr-4 py-2 font-medium rounded-bl-3xl bg-white shadow-xl shadow-cyan-400/40 ">
                    <ul className="flex items-center gap-1 py-2 text-lg ">
                        {menuLinks?.map((menu, i) => (
                            <li key={i} className="px-4 hover:text-cyan-400">
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div onClick={() => setOpen(!open)} className={`z-[999] ${open ? "text-gray-900" : "text-gray-100"} text-3xl md:hidden m-5`}>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <div className={`md:hidden text-gray-900 absolute w:1/4 h-screen px-7 py-2 font-medium top-0 bg-white duration-300 ${open ? "right-0" : "right-[-100%]"}`}>
                    <ul className="flex flex-col items-center justify-center h-full gap-10 py-2 text-lg">
                        {menuLinks?.map((menu, i) => (
                            <li onClick={() => setOpen(false)} key={i} className="px-6 hover:text-cyan-400">
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
