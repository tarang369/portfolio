import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/TARANG.png";
import { NAVIGATION_LINKS } from "../constants";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className="fixed left-0 right-0 top-4 z-50">
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
                    <div className="flex justify-between gap-6">
                        <div>
                            <a href="#">
                                <img
                                    src={logo}
                                    width={64}
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div>
                            <ul className="flex items-center gap-4">
                                {NAVIGATION_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            onClick={(e) =>
                                                handleLinkClick(e, link.href)
                                            }
                                            className="text-sm hover:text-yellow-400"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href="../assets/Tarang_Jain_Resume.pdf"
                            download="Tarang_Jain_Resume.pdf"
                            target="_blank"
                            className="flex w-28 items-center justify-center gap-2 rounded-full bg-yellow-400 px-1.5 py-1 text-center text-sm font-semibold text-slate-950 hover:bg-yellow-500"
                        >
                            <BsDownload /> Resume
                        </a>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="rounded-lg backdrop-blur-md lg:hidden">
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="#">
                                <img
                                    src={logo}
                                    width={96}
                                    alt="logo"
                                    className="m-2"
                                />
                            </a>
                        </div>
                        <div className="flex items-center">
                            <button
                                className="focus:outline-none lg:hidden"
                                onClick={toggleMobileMenu}
                            >
                                {isMobileMenuOpen ? (
                                    <FaTimes className="m-2 h-6 w-5" />
                                ) : (
                                    <FaBars className="m-2 h-6 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                            {NAVIGATION_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={(e) =>
                                            handleLinkClick(e, link.href)
                                        }
                                        className="block w-full text-xl font-semibold"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="../assets/Tarang_Jain_Resume.pdf"
                                    download="Tarang_Jain_Resume.pdf"
                                    target="_blank"
                                    className="mb-4 flex w-28 items-center justify-center gap-2 rounded-full bg-yellow-400 px-1.5 py-1 text-center text-sm font-semibold text-slate-950 hover:bg-yellow-500"
                                >
                                    <BsDownload /> Resume
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
