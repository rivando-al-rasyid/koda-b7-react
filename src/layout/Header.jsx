import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import UserContext from "../context/user/context";

const Header = () => {
    /**
     * Description placeholder
     *
     * @type {object} user - The current user's information, including username and profile picture URL.
     */
    const { isLogin, setIsLogin, user } = useContext(UserContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    /**
     * Description placeholder
     *
     * @param {object} props
     * @param {boolean} props.isActive
     */
    const navLinkStyles = ({ isActive }) =>
        isActive
            ? "px-3 py-1 border-2 border-zinc-900 bg-amber-400 shadow-[2px_2px_0px_#18181b] transition-all"
            : "px-3 py-1 border-2 border-transparent hover:text-amber-500 transition-colors";

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-zinc-900 px-6 py-4 flex items-center justify-between">
            <NavLink
                to="/"
                className="text-2xl font-black tracking-tighter text-zinc-900 uppercase hover:text-amber-500 transition-colors"
            >
                React
            </NavLink>
            <div className="flex items-center gap-8">
                <nav>
                    <ul className="hidden md:flex items-center gap-4 font-bold text-zinc-900 uppercase text-sm tracking-wide">
                        <li>
                            <NavLink to="/" end className={navLinkStyles}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/pokemon" className={navLinkStyles}>
                                Pokédex
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/counter" className={navLinkStyles}>
                                Counter
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/product" className={navLinkStyles}>
                                Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/characters" className={navLinkStyles}>
                                Characters
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/survei" className={navLinkStyles}>
                                Survei
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    {isLogin ? (
                        <div className="relative">
                            <button
                                type="button"
                                aria-haspopup="true"
                                aria-expanded={isDropdownOpen}
                                onClick={() =>
                                    setIsDropdownOpen((prev) => !prev)
                                }
                                className="
                                    flex items-center gap-3 px-3 py-1.5
                                    border-[3px] border-black bg-yellow-400
                                    shadow-[4px_4px_0px_#000]
                                    hover:bg-yellow-300 hover:shadow-[6px_6px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5
                                    active:shadow-none active:translate-x-0.5 active:translate-y-0.5
                                    transition-all duration-75 outline-none focus-visible:ring-2 focus-visible:ring-black
                                "
                            >
                                <span className="font-bold text-black uppercase tracking-tight">
                                    {user?.username || "User"}
                                </span>

                                <div className="relative">
                                    <img
                                        src={
                                            user?.profilePic ||
                                            "https://via.placeholder.com/150"
                                        }
                                        alt={`${user?.username}'s profile`}
                                        className="w-9 h-9 object-cover border-2 border-black block bg-white"
                                    />
                                </div>

                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <ul className="absolute right-0 mt-2 w-50 bg-white border-[3px] border-black shadow-[8px_8px_0px_#000] z-50 overflow-hidden list-none">
                                    <li className="border-b-[3px] border-black">
                                        <NavLink
                                            to="/profile"
                                            className="block px-4 py-3 hover:bg-cyan-300 transition-colors uppercase text-xs font-black tracking-wide text-black"
                                            onClick={() =>
                                                setIsDropdownOpen(false)
                                            }
                                        >
                                            View Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                setIsLogin(false);
                                                setIsDropdownOpen(false);
                                                navigate("/login");
                                            }}
                                            className="w-full text-left px-4 py-3 hover:bg-red-500 transition-colors uppercase text-xs font-black tracking-wide text-red-600 hover:text-white"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <button
                            className="px-4 py-2 border-[3px] border-black bg-yellow-400 shadow-[4px_4px_0px_#000] font-black uppercase text-xs tracking-wide hover:bg-yellow-300 hover:shadow-[6px_6px_0px_#000] hover:-translate-x-px hover:-translate-y-px active:shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-75 outline-none"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
