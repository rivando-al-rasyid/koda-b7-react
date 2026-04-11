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

    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("user");
        if (saved !== null) {
            return JSON.parse(saved);
        }
        return {
            username: "",
            profilePic: "https://via.placeholder.com/150",
        };
    });

    useEffect(() => {
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
    }, [isLogin]);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
