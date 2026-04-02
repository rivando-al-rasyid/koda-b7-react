import { useState } from "react";

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="navbar">
            <a href="/" className="navbar-brand">
                DevSpace
            </a>

            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <a href="/" className="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/pokemon">Pokédex</a>
                    </li>
                    <li>
                        <a href="/counter">Counter</a>
                    </li>
                    <li>
                        <a href="/product">Products</a>
                    </li>
                </ul>

                <div className="avatar-wrapper">
                    <button
                        className="avatar-btn"
                        aria-haspopup="true"
                        aria-expanded={dropdownOpen}
                        onClick={() => setDropdownOpen((prev) => !prev)}
                    >
                        <img
                            src="https://www.gravatar.com/avatar?d=mp&s=32"
                            alt="User Avatar"
                            className="avatar-image"
                        />
                    </button>
                    <div className={`avatar-dropdown ${dropdownOpen ? "open" : ""}`}>
                        <div className="dropdown-email">user@example.com</div>
                        <a href="/settings" className="dropdown-item">
                            &#9632; Settings
                        </a>
                        <button
                            className="dropdown-item logout"
                            onClick={() => alert("Signed out")}
                        >
                            &#9632; Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
