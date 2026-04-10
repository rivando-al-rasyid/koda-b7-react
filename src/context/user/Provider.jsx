import UserContext from "./context";
import { useState } from "react";

function UserProvider({ children }) {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="flex items-center gap-8">
            <UserContext.Provider value={{ isLogin, setIsLogin }}>
                {children}
            </UserContext.Provider>
        </div>
    );
}

export default UserProvider;
