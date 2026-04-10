import UserContext from "./context";
import { useEffect, useState } from "react";

function UserProvider({ children }) {
    const [isLogin, setIsLogin] = useState(() => {
        const saved = localStorage.getItem("isLogin");
        if (saved !== null) {
            return JSON.parse(saved);
        }
        return false;
    });

    useEffect(() => {
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
    }, [isLogin]);

    return (
        <div className="flex items-center gap-8">
            <UserContext.Provider value={{ isLogin, setIsLogin }}>
                {children}
            </UserContext.Provider>
        </div>
    );
}

export default UserProvider;
