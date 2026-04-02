import { NavLink } from "react-router";

const Header = () => {
    const navLinkStyles = ({ isActive }) =>
        isActive
            ? "px-3 py-1 border-2 border-zinc-900 bg-amber-400 shadow-[2px_2px_0px_#18181b] transition-all"
            : "px-3 py-1 border-2 border-transparent hover:text-amber-500 transition-colors";

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-zinc-900 px-6 py-4 flex items-center justify-between">
            {/* Navbar Brand */}
            <NavLink
                to="/"
                className="text-2xl font-black tracking-tighter text-zinc-900 uppercase hover:text-amber-500 transition-colors"
            >
                React
            </NavLink>

            <div className="flex items-center gap-8">
                {/* Nav Links */}
                <nav>
                    <ul className="hidden md:flex items-center gap-4 font-bold text-zinc-900 uppercase text-sm tracking-wide">
                        <li>
                            <NavLink to="/" className={navLinkStyles}>
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
                                Products
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Avatar / Dropdown Wrapper */}
            </div>
        </header>
    );
};

export default Header;
