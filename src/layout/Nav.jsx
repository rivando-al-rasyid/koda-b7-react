import { NavLink } from "react-router";

NavLink;
export default function Nav() {
    return (
        <nav className="flex flex-row  bg-white border-2 border-zinc-900 rounded-2xl overflow-hidden">
            <NavLink
                className={({ isActive }) =>
                    `px-3 py-1 rounded ${isActive ? "bg-zinc-900 text-white" : "text-zinc-900"}`
                }
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-3 py-1 rounded ${isActive ? "bg-zinc-900 text-white" : "text-zinc-900"}`
                }
                to="/counter"
            >
                Counter
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-3 py-1 rounded ${isActive ? "bg-zinc-900 text-white" : "text-zinc-900"}`
                }
                to="/product"
            >
                Product
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-3 py-1 rounded ${isActive ? "bg-zinc-900 text-white" : "text-zinc-900"}`
                }
                to="/pokemon"
            >
                Pokemon
            </NavLink>
        </nav>
    );
}
